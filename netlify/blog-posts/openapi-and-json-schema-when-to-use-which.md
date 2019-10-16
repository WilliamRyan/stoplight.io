---
path: /blog/json-schema-openapi
tags:
  - blog
  - blog-design
relatedTags:
  - blog-design
publishedDate: 2019-10-16T19:31:43.127Z
author: Kyle Lange
title: 'OpenAPI and JSON Schema: When to Use Which'
subtitle: Behind the divergence in data formats and how you can solve it
color: black
includeToc: true
actionBar:
  ctas:
    - color: black
      href: 'https://next.stoplight.io'
      submit:
        button:
          color: purple
          type: link
        input:
          type: email
      type: link
  enabled: false
meta:
  robots: 'index, follow'
---
OpenAPI v3.0 was a big step forward for the API design community. It expanded on and improved design-first processes and automation. It simplified definitions for more reusability, while supporting more security schemes. Among the largest additions were components. While these components improved upon previous JSON Schema support, OpenAPI v3.0 still leaves developers to cover for its incompatibilities.

Many organizations have existing objects described by JSON Schema. The elephant in the room is that developers are running into a big problem: OpenAPI [still does not recognize and support some JSON Schema keywords](https://apisyouwonthate.com/blog/openapi-and-json-schema-divergence-part-1).

A brief history of the compatibility issues: OpenAPI v2.0 was an extended subset of JSON Schema. There was a divergence that led to a roughly 80% compatibility with JSON Schema Draft 4. OpenAPI v3.0 took us to 90% compatibility with JSON Schema Draft 5. In short, as of this writing, developers have never been able to use JSON Schema without dodging incompatibilities.

There are robust discussions happening to mitigate this to full compatibility with the latest draft of JSON Schema ([Draft 2019-09](http://json-schema.org/specification.html)), but for now, we need to learn to play nice with both of the latest formats and see how and when they might work together.
## JSON Schema Describes JSON Documents
Before we get into the nitty-gritty, let’s clear up any confusion with a quick dive into what JSON Schema is and how it is used. 

First and foremost, the definition of a schema is a data structure or template. It is not a database itself, nor a JSON document of data. A schema’s largest advantage is that it allows a team to plan and iterate how its data will be structured. Agreeing on formats helps teams collaborate with fewer errors. For example, client and server-side teams can give each other feedback and test use-cases without a complete API with live data.

JSON Schema is commonly used with APIs, but it only describes the data itself. That means, you can use the format in other ways, too. Schemas are also helpful for structuring databases into reusable blocks for greater efficiency and maneuverability. Anywhere you need to validate that JSON data matches a defined pattern, JSON Schema will help.

To borrow a Stoplight example, the latest Prism mock server tool leans on JSON Schema. It uses [dynamic example generation](https://stoplight.io/blog/prism-v3/#built-in-support-for-openapi-3.0-from-the-ground-up) to show accurate response types. With extensions enabled, it can also create specific value types, such as names and street addresses.

If you would like to delve further down the rabbit hole of JSON Schema, [their own documentation](https://json-schema.org/understanding-json-schema/) is a great place to start.
## OpenAPI Describes Entire APIs
OpenAPI is the name for multiple API specification formats. OpenAPI v2.0 was previously known as Swagger before being donated to the OpenAPI Initiative. That group of industry experts then created OpenAPI v3.0. Both are description formats for REST/HTTP APIs that allows you to map your API’s input/output parameters, endpoints, and authentication methods.

In contrast to JSON Schema, an OpenAPI document is a definition for an entire API, not just data models. Previous to its creation, many APIs were designed without any ability to map how it should work or validate that it operates as expected. With this machine-readable description, you can also generate useful tools for humans, such as documentation and mock servers.

You can use JSON Schema to describe data objects for both requests and responses. However, OpenAPI includes _how_ those requests and responses are formatted. Similarly, you can mock API responses with JSON Schema, but you need something like OpenAPI to generate an entire mock server.

For more on complete API descriptions, see the Stoplight [API design guide to OpenAPI](https://stoplight.io/api-design-guide/openapi/).
## How to Use OpenAPI and JSON Schema Together
Having looked at these formats separately, let’s journey forward to how and when you can use OpenAPI and a JSON Schema together.  Referenced here will be a lot of good work done by Stoplight’s Phil Sturgeon, who has some quick-fix ideas that will also help us understand the basics of how we can marry these powerful tools together.

### Keep Using JSON Schema

If you’re already using JSON Schema to describe your data objects, there’s no need to change things up. The divergence between OpenAPI and JSON Schema is hopefully a short term issue. Using an OpenAPI 3.0 compatible version of JSON Schema might impact other areas, so look downstream for changes.

You’ll want to take your existing JSON Schema and convert it to one that includes the keywords that OpenAPI supports. As an API architect who wants to follow this quick fix, this means that a pure JSON Schema draft will be your Rosetta Stone for your data model. Next, you’ll create a version that is written in JSON Schema that works with OpenAPI. It’s an extra step, but there are tools that can support you.

### Convert JSON Schema to OpenAPI Schema

It’s not ideal to require an additional tool to maintain the harmony between JSON Schema and OpenAPI. That said, when later versions are compatible, it will be easier to reverse your fix. 

Using a simple [NPM package](https://github.com/openapi-community/json-schema-to-openapi-schema),  convert JSON Schema to OpenAPI Schema Objects. You’ll find a longer description of the conversions it makes in the above GitHub repo, but here’s a quick example with types and nullables:


```javascript
const toOpenApi = require('json-schema-to-openapi-schema');

const schema = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  type: ['string', 'null'],
  format: 'date-time',
};

console.log(toOpenApi(schema));
```

The example prints out:
```
{
  type: 'string',
  format: 'date-time',
  nullable: true
}
```

Keep in mind that this package was based on [JSON Schema v5.0](http://json-schema.org/specification-links.html#draft-5) - so make sure you at using that version or later.

There’s more detail behind this solution in [Phil's original post](https://apisyouwonthate.com/blog/solving-openapi-and-json-schema-divergence) on the APIs You Won’t Hate blog.
### The Future of Compatibility

OpenAPI v3.0 has continued to befuddle devs by being both a subset of JSON Schema Draft 5 and a superset. Stoplight aims to work with the community on fixing this problem. As of Stoplight’s [PR #1977] (https://github.com/OAI/OpenAPI-Specification/pull/1977), the specification is leaning into the making OpenAPI v3.1 _only_ a superset of JSON Schema. 

In other words, the future still has divergence, but it’s getting closer. Here are JSON Schema 2019-09 keywords that still need support in OpenAPI v3.1, according to discussion within the pull request above:

* nullable
* discriminator
* xml
* example

In addition, there are notes about the use of exclusiveMinimum and exclusiveMaximum. For a deeper dive, you can [read Phil’s article](https://phil.tech/2019/09/07/update-openapi-json-schema/) on the subject. He delves into the specific differences between the schema and spec. The big goal is to write standard JSON Schema in OpenAPI 3.1 **without** getting bizarre errors. No more workarounds or conversions.

Additionally, tooling vendors will be able to use JSON Schema validators to replace any quick-fix OpenAPI validators they were using as placeholders in an “OpenAPI friendly” version of a project.

If no unexpected problems show up with implementing this idea, we'll see this proposal appear as a feature in OpenAPI v3.1, and take another step toward leaving the "divergence" issue in the past for good.
