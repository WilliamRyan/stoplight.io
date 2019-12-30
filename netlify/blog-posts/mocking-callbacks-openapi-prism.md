---
path: /blog/mocking-callbacks-openapi-prism
tags:
  - blog
  - blog-design
  - blog-mocking
  - blog-featured
  - blog-general
  - blog-industry
relatedTags:
  - blog 
  - blog-design
  - blog-mocking
  - blog-featured
  - blog-general
  - blog-industry
publishedDate: 2019-12-12
author: Karol Maciaszek
title: Mocking Callbacks with OpenAPI and Prism
subtitle: What are callback, why use them, and how to set them up using OpenAPI and Prism. 
image: /images/rotary-phone.jpg
color: black
includeToc: true
actionBar:
  ctas:
  enabled: false
meta:
  canonical: https://11sigma.com/blog/2019-11-22--mocking-callbacks/#how-to-set-up-callbacks-with-openapi-and-prism
  description: What are callback, why use them, and how to set them up using OpenAPI and Prism.
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Mocking Callbacks with OpenAPI and Prism | Stoplight Blog
  image: /images/rotary-phone.jpg
  twitter:
    description: What are callback, why use them, and how to set them up using OpenAPI and Prism.
    title: Mocking Callbacks with OpenAPI and Prism | Stoplight API Corner
    image: /images/rotary-phone.jpg
    username: '@stoplightio'
---

Callbacks are outgoing, asynchronous requests that service will make to some other service in response to an action. They are very similar to callback functions in popular programming languages like JavaScript. However, they are executed at the API abstraction level.

Callbacks can be observed in everyday life for instance when you order a package. If you subscribe to updates, the logistics company that delivers your parcel will send you notifications about events such as: “your package is ready to be picked up“, “your package arrived at its final destination“.

This type of communication happens asynchronously and in real-time. Very cool stuff!

## Other Approaches

Callbacks solve the asynchronous communication problem. Usually, systems performing computational-heavy operations use message-queues like Kafka, RabbitMQ or JMS-based. Selective subscription to events is implemented with topics. However, since the underlying protocol is not web-friendly (not HTTP-based) these solutions can't be leveraged by typical web applications.

Another common approach is to use configure WebHooks. GitHub or Stripe expose a UI for setting them up.

Did I say WebHook? Quick explanation: WebHook is the caller's API endpoint that receives callback requests.

The disadvantage of such a solution is that you need to manually update an external service (like GitHub) with the URL of the WebHook. That makes your configuration decentralized, difficult to maintain and update.

## Why callbacks

- they are standardized in OpenAPI (see [documentation](https://swagger.io/docs/specification/callbacks/) and [specification](https://spec.openapis.org/oas/v3.0.2#callbackObject))
- it's a Web Standard meaning, it's designed to use it safely in an HTTP-based environment, often publicly available (client-facing)
- supports selective data subscription
- reception endpoints configuration is kept on the caller side which makes it single source of truth

## How to set up callbacks with OpenAPI and Prism

Now let's set a goal. The goal is to mock a complete, real-life example of a callback hitting a WebHook. We will use Prism as a mocking tool.

Let's assume there is a logistics company named Ship-n-Pray Ltd. As a partner of the company, we decided to integrate with their API to automate our processes. For example, when a package arrives, we would like to send an email to our clients. Or keeping track and statistics of how the logistics company operates.

Fortunately, they are exposing an API which will let us track that. Moreover, it's an OpenAPI specification. We are dealing with professionals!

## OpenAPI specification of Ship-n-Pray Ltd's API

```yaml
logistics.oas3.yaml

openapi: 3.0.0
paths:
  /tracking/{parcelId}/subscribe:
    parameters:
    - name: parcelId
      in: path
      required: true
      description: The parcel identifier
      schema:
        $ref: '#/components/schemas/parcelId'
    post:
      summary: Subscribe to notifications about given parcel
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                url:
                  type: string
                  format: uri
                token:
                  type: string
              required:
              - url
              - token
      responses:
        202:
          description: 'Successfully subscribed to notifications about given parcel'
          content:
            text/plain:
              examples:
                ok:
                  value: 'ok'
      callbacks:
        notification:
          '{$request.body#/url}?token={$request.body#/token}':
            post:
              summary: 'Receive single notification about a parcel'
              requestBody:
                required: true
                content:
                  application/json:
                    schema:
                      $ref: '#/components/schemas/notification'
              responses:
                200:
                  description: 'Notification successfully processed'
                  content:
                    text/plain:
                      examples:
                        ok:
                          value: 'ok'
components:
  schemas:
    parcelId:
      type: string
      pattern: '^[0-9]{16}$'
    notification:
      type: object
      properties:
        parcelId:
          $ref: "#/components/schemas/parcelId"
        status:
          type: string
          enum:
          - pick-up
          - in-transit
          - delivered
      required:
      - parcelId
      - status
```

Ok wait, that's quite a lot. Let me describe the important lines.

1. We will execute `POST` request on `/tracking/{parcelId}/subscribe` endpoint in order to subscribe to notifications about the parcel identified by `parcelId`.

**Note:** `$ref: '#/components/schemas/parcelId'` is a trick which makes us able to reuse `parcelId` schema definition (defined in the components section at the end of document)

2. The request body section defines an expected input payload:

- `url` enables you to tell the logistics company on which URL you want to receive notifications
- `token` is the foundation of our security. The token will be generated for each subscription and stored on our side. At the moment of notification reception, we are going to verify that the token was generated by us.

**Note:** the token may be randomly generated data (we need to store it on our side). It also may be a public key (then we just need to verify that it matches our secret private key).

```yaml
requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                url:
                  type: string
                  format: uri
                token:
                  type: string
              required:
              - url
              - token

```

3. Next, `responses` section defines a single `202` response. `202` means 'Accepted' for further processing.

4. The most important section: `callbacks`. The key(s) under `callbacks` keyword are their names, `notification` in our case. Then comes the headliner - `'{$request.body#/url}?token={$request.body#/token}'`. This path is a runtime expression ([read more here](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#runtimeExpression)). The path means that `url` and `token` will be extracted from the request body and will construct the notification reception URL.

## OpenAPI specification of the client service (us!)

``` yaml

client.oas3.yaml

openapi: 3.0.0
paths:
  /notify:
    post:
      summary: 'Receive notification about a parcel'
      security:
        - TokenSecurity: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/notification'
      responses:
        '200':
          description: 'Notification successfully processed'
          content:
            text/plain:
              examples:
                ok:
                  value: 'ok'
components:
  securitySchemes:
    TokenSecurty:
      type: apiKey
      name: token
      in: query
  schemas:
    parcelId:
      type: string
      pattern: '^[0-9]{16}$'
    notification:
      type: object
      properties:
        parcelId:
          $ref: "#/components/schemas/parcelId"
        status:
          type: string
          enum:
          - pick-up
          - in-transit
          - delivered
      required:
      - parcelId
      - status
```

Our API specification defines a single endpoint that will handle notifications reception. Simple as that!

## Let's Mock

We've defined specifications of logistics service API and our API. It's time to spin up `prism` instances and see some action.

The following command will run `prism` instance for the logistics company on `4010` port.

``` yaml
prism mock -p 4010 logistics.oas3.yaml
```

Now please open new console and run following command:

``` yaml
prism mock -p 4011 client.oas3.yaml
```

Ready?

``` yaml
curl -v -H'Content-type: application/json' -d'{ "url": "http://localhost:4011/notify", "token": "dontpeek" }' http://127.0.0.1:4010/tracking/7352110771638879/subscribe
```

Here is the output of logistics service:

```
[CLI] …  awaiting  Starting Prism…
[HTTP SERVER] ℹ  info      Server listening at http://127.0.0.1:4010
[CLI] ℹ  info      POST       http://127.0.0.1:4010/tracking/7352110771638879/subscribe
[HTTP SERVER] post /tracking/7352110771638879/subscribe ℹ  info      Request received
    [NEGOTIATOR] ℹ  info      Request contains an accept header: */*
    [VALIDATOR] ✔  success   The request passed the validation rules. Looking for the best response
    [NEGOTIATOR] ✔  success   Found a compatible content for */*
    [NEGOTIATOR] ✔  success   Responding with the requested status code 202
    [CALLBACK] ℹ  info      notification: Making request to http://localhost:4011/notify?token=dontpeek...
    [CALLBACK] ℹ  info      notification: Request finished
```

And the corresponding output on client service console:

```
[CLI] …  awaiting  Starting Prism…
[HTTP SERVER] ℹ  info      Server listening at http://127.0.0.1:4011
[CLI] ℹ  info      POST       http://127.0.0.1:4011/notify
[HTTP SERVER] post /notify ℹ  info      Request received
    [NEGOTIATOR] ℹ  info      Request contains an accept header: */*
    [VALIDATOR] ✔  success   The request passed the validation rules. Looking for the best response
    [NEGOTIATOR] ✔  success   Found a compatible content for */*
    [NEGOTIATOR] ✔  success   Responding with the requested status code 200
```

Whoa! What happened?

1. The `POST` request has been made to `http://127.0.0.1:4010/tracking/7352110771638879/subscribe`
2. Prism responds with `202` meaning that the subscription has been accepted.
3. The request body contains the callback URL and token
4. Callback definition contains a recipe for on how to construct a WebHook URL, which results in `http://localhost:4011/notify?token=dontpeek`
5. Parcel event occurs which triggers notification request
6. Prism performs request to our `/notify` endpoint with a mocked payload
7. Client console shows that the notification was received

For those loving diagrams, here is a sequence diagram. It presents a process of subscribing to callbacks and receiving three notifications.

![Sequence Diagram](/images/sequence-diagram.png)

Congratulations, you've just mocked two services and forced them to talk to each other. That finalizes this tutorial!

## That's fine, but why do I need Prism

Testing callbacks may become complicated. You probably need to write some small tool which will imitate the caller service. Or call it "by hand" with *curl*. Or force the service to call you API and trust that it will actually do it.

Still sounds fairly easy? Now imagine that your API changes over time. You need to maintain that tool but uou lost the *curl* command, and there is no documentation on how to quickly test the API. Oh, how familiar!

But wait, you have an OpenAPI specification which is always kept up to date (because your boss tells you to do it) and Prism which can turn it into a fully functional imitation of any part of the API. Now you need neither secret commands nor non-documented tools.

![Now I Understand](/images/now-i-understand.gif)

Originally published November 22, 2019 on [11sigma.com](https://11sigma.com/blog/2019-11-22--mocking-callbacks/#how-to-set-up-callbacks-with-openapi-and-prism)
