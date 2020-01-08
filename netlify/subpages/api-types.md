---
path: /api-types
tags:
  - 'api types'
relatedTags:
  - 'soap'
  - 'xml-rpc'
  - 'json-rpc'
  - 'restful' 
  - 'api types'
publishedDate:
title: API Types
subtitle: >-
 Discussing different types of APIs, alongside protocols and standards, such as Open APIs, Internal APIs, Partner APIs, Compostie APIs, RESTFUL, JSON-RPC, XML-RPC, and SOAP.
color: blue
tabs:
  - href: /api-types/soap-api/
    title: SOAP APIs
  - href: /api-types/vs-rest-api/
    title: SOAP APIs vs REST APIs
  - href: /api-types/composite-api/
    title: Composite APIs
actionBar:
  enabled: false
meta:
  description: >-
    Discussing different types of APIs, alongside protocols and standards, such as Open APIs, Internal APIs, Partner APIs, Compostie APIs, RESTFUL,JSON-RPC, XML-RPC, and SOAP.
  title: API Types | Types of APIs for Enterprises
  twitter:
    description: >-
      Discussing different types of APIs, alongside protocols and standards, such as Open APIs, Internal APIs, Partner APIs, Compostie APIs, RESTFUL,JSON-RPC, XML-RPC, and SOAP.
    title: API Types | Types of APIs for Enterprises
    username: '@stoplightio'
---

APIs (application programming interfaces) come in many forms. API designers can choose from a range of protocols and standards when creating a new API, depending on the type of API they are creating, and its purpose. This article takes a look at a few important API types and protocols.

## Web APIs

Web APIs are APIs that can be accessed using the HTTP protocol. The API defines endpoints, and valid request and response formats. Web APIs include the APIs used to communicate with the browser (see [Mozilla’s Web APIs and interfaces](https://developer.mozilla.org/en-US/docs/Web/API) list). They may be services such as web notifications and web storage. Different web APIs feature varying levels of security and privacy, including open, internal and partner APIs. Multiple web APIs can be combined into a composite API - a collection of data or service APIs.

### Open APIs

Open APIs, also known as external or public APIs, are available to developers and other users with minimal restrictions. They may require registration, and use of an API key, or may be completely open. They are intended for external users (developers at other companies, for example) to access data or services. As an example, take a look at the [Food Hygiene Rating API](https://api.ratings.food.gov.uk/help) provided by the UK government. Any developer can access it, without even registering, allowing app builders to include governmental data on restaurant standards in their apps.

### Internal APIs

In contrast to open APIs, internal APIs are designed to be hidden from external users. They are used within a company to share resources. They allow different teams or sections of a business to consume each other’s tools, data and programs. Using internal APIs has several advantages over conventional integration techniques, including security and access control, an audit trail of system access, and a standard interface for connecting multiple services.

### Partner APIs

Partner APIs are technically similar to open APIs, but they feature restricted access, often controlled through a third-party API gateway. They are usually intended for a specific purpose, such as providing access to a paid-for service. This is a very common pattern in software as a service ecosystem.

### Composite APIs

Composite APIs allow developers to access several endpoints in one call. These could be different endpoints of a single API, or they could be multiple services or data sources. Composite APIs are especially useful in microservice architectures, where a user may need information from several services to perform a single task. Using composite APIs can reduce server load and improve application performance, as one call can return all the data a user needs.

## API Architectures and Protocols

An API protocol defines the rules for API calls: it specifies accepted data types and commands. Different API architectures specify different protocol constraints.

### REST

REST (representational state transfer) is a very popular web API architecture. To be a REST API, an API must adhere to certain architectural constraints, or principles, including:

- Client-server architecture: the interface is separated from the backend and data storage. This allows for flexibility, and for different components to evolve independent of each other.
- Statelessness: no client context is stored on the server between requests.
- Cacheability: clients can cache responses, so a REST API response must explicitly state whether it can be cached or not.
- Layered system: the API will work whether it is communicating directly with a server, or through an intermediary such as a load balancer.

### JSON-RPC and XML-RPC

An RPC is a remote procedural call protocol. XML-RPC uses XML to encode its calls, while JSON-RPC uses JSON for the encoding. Both protocols are simple. A call can contain multiple parameters, and expects one result. They have a couple of key features, which require a different architecture to REST:

- They are designed to call methods, whereas REST protocols involve the transfer of documents (resource representations). Or, to put it another way, REST works with resources, whereas RPC is about actions.
- The URI identifies the server, but contains no information in its parameters, whereas in REST the URI contains details such as query parameters.

### SOAP

SOAP (simple object access protocol) is an established web API protocol. It is intended to be extensible, neutral (able to operate over a range of communication protocols, including HTTP, SMTP, TCP and more), and independent (it allows for any programming style) The SOAP specification includes:

- The processing model: how to process a SOAP message.
- Extensibility model: SOAP features and modules.
- Protocol binding rules: how to use SOAP with an underlying protocol, such as HTTP.
- Message construct: how to structure a SOAP message.

Note that it is possible to build a RESTful API while using SOAP protocols, although the two are usually considered to be competing standards.
