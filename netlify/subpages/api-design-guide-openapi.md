---
path: /api-design-guide/openapi
tags: ['guides', 'api-design']
relatedTags: ['api-design']
publishedDate: 'Jan 23, 2019'
title: Understanding OpenAPI
subtitle: Learn all there is about API Design through our comprehensive guide
color: orange
tabs:
  - title: API Design Basics
    href: /api-design-guide/basics
  - title: API Design Tooling
    href: /api-design-guide/tooling
  - title: Understanding OpenAPI
    href: /api-design-guide/openapi
  - href: /api-design-guide-download
    title: Download the Guide
actionBar:
  enabled: true,
  text: Read how world’s leading API first companies are solving API Design Management at Scale.
  ctas:
    - title: Get the API Design Guide
      type: submit
      submit:
        button:
          color: purple
          title: Get the API Design Guide
        input:
          type: email
          placeholder: 'Your work email...'
        formId: 'e6cb86b0-8b13-49b8-860a-0e717da5489d'
        className: 'mt-4 p-4 bg-black text-white'
meta:
  robots: 'index, follow'
  title: API Design Guide | OpenAPI
  description: Get to know the intricate details of the all-important OpenAPI with Stoplight’s comprehensive and technical guide.
  twitter:
    image: /images/mark_light_bg.png
    title: API Design Guide | OpenAPI
    username: '@stoplightio'
---

## What is OpenAPI used for?

The industry has selected OpenAPI as the way forward, so let’s understand it. From a technical standpoint, it is a YAML or JSON file that follows a specific [document structure](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#documentStructure). You should be able to describe any REST API using a document that adheres to the OpenAPI v3 schema.

The primary sections of an OpenAPI v3 document are:

- Info: meta-data about the API, including its name and version.
- Paths: relative endpoints, their operations, and responses.
- Security: the scheme used to authenticate calls, such as API Key or OAuth.
- Servers: one or more servers that can be reached with the paths.
- Components: reusable elements, such as error messages or responses.
- Tags: labels that can be used for grouping related paths
- External Docs: meta-data for human-readable documentation

While not all of these sections are required in an OpenAPI definition, they can be used together to flexibly describe an API with minimal repetition. Promoting re-use means you can avoid the tedium and potential human error of find-and-replace updates.

### OpenAPI Versions: v2.0 vs v3.0

While OpenAPI v3 is the most recent version of OpenAPI, it replaced OpenAPI v2 - previously known as Swagger. The newer version provides a simpler way to describe APIs, while also offering more flexibility. Because there were a lot of legacy Swagger documents, it’s important to have a compatible community-owned version. But API practitioners wanted to move the Spec forward with OpenAPI v3.

One of the biggest differences between OpenAPI v2 and v3 is the components object. For example, responses were their own distinct object in OpenAPI v2, whereas they are now organized under components. Components are reusable objects, which include schemas, request bodies, parameters, response information, security schemes, and newer concepts like links, and callbacks.

There are a handful of other components, some of which didn’t directly exist in OpenAPI v2. Two notable new components are callbacks and headers. Callbacks can be used with Webhooks and other asynchronous technologies. Headers, while describable in OpenAPI v2, are now able to be reused more easily.

## Should Definitions Use JSON or YAML?

Through the OpenAPI Initiative, the industry has agreed upon this new approach. However, the format to use for definitions is still up for much debate. Both JSON and YAML are supported by OpenAPI v3. They each have advantages for both human and machine consumers.

In terms of readability, YAML is clean and easy for most to decipher. It uses whitespace, colons, and newlines—a common writing syntax. By contrast, JSON has a lot of curly braces, quotes, and commas. Yet, when pretty printed, it can be similarly readable. JSON is also very easily consumed by machines. The syntax is still relatively lightweight and helps modern languages quickly parse data.

The whitespacing of YAML describes the nesting of data. When accurately written, it can be quickly parsed. However, consistent spacing becomes difficult for human editors. Once a machine understands the data, outputting YAML is straightforward, but manual writing can become an effort in fighting indentations.

There are good and bad things about both YAML and JSON. In addition to reading and writing issues, you’ll find some tools support only one or the other. It’s best to be familiar with both and plan to convert between them when needed.

## Get Familiar With API Design

Whether wrestling with data formats or spinning up mock servers, there are tools to improve your API design experience. Start from scratch or import an existing description, then start building and sharing with your team. Stoplight’s [Visual OpenAPI Designer](/design) provides a design-first suite of tools to help you build great APIs.
