---
path: /api-types/vs-rest-api/
tags:
  - 'soap'
  - 'rest'
  - 'api types'
relatedTags:
  - 'soap'
  - 'api types'
  - 'rest'
publishedDate:
title: SOAP APIs vs REST APIs
subtitle: >-
  SOAP APIs vs REST APIs - exploring the differences and similarities between these two approach to web services.
color: blue
tabs:
  - href: /api-types
    title: API Types
  - href: /api-types/soap-api
    title: SOAP APIs
actionBar:
  enabled: false
meta:
  description: >-
    SOAP APIs vs REST APIs - exploring the differences and similarities between these two approach to web services.  
  title: SOAP APIs vs REST APIs | Types of APIs for Enterprises
  twitter:
    description: >-
      SOAP APIs vs REST APIs - exploring the differences and similarities between these two approach to web services.
    title: SOAP APIs vs REST APIs | Types of APIs for Enterprises
    username: '@stoplightio'
---


The effectiveness of loosely or strictly typed languages has always been debated among developers of web applications. APIs are no different.

As soon as SOAP APIs (Simple Object Access Protocol) became the gold standard for companies like Oracle, Sun, and PayPal, there was an equal and opposite reaction a year or so later towards REST APIs from Google, Amazon, and eBay.

Your preferred API format may come down to the complexity of the information you want to send and retrieve, the security with which that information needs to be transferred, or the speed you would prefer the information get to the user.

In this article, we’ll discuss the similarities and differences of a SOAP API vs REST API so you can determine which is the best fit for your needs.

## Similarities Between SOAP and REST

No matter which API format you lean towards, both SOAP and REST have some fundamental similarities:

* Both SOAP and REST connect to two applications via server-side data that is machine and human-readable.
* Both typically utilize HTTP protocols and methods (i.e. GET, POST, DELETE), but can also use other protocols, such as STMP.
* Both can understand XML web documentation and can use XML in requests and responses.

Despite the resemblance, there is little relation between providing or consuming SOAP and REST APIs.

## Differences Between SOAP and REST

Despite the fundamental similarities SOAP and REST APIs share, there are many more differences. Your organization’s needs can help you decide which is more advantageous for your use.

Some of the larger differences between the API types:

* REST can use XML, but is equally at home with JSON, HTML, and even plain text. By contrast, SOAP APIs require XML, as the standard is built upon the format.
* SOAP is a standard protocol with strict rules - maintained and fully backed by the W3C consortium, while REST is a set of best practices that can be more fluid.
* SOAP is built around remote procedure calls and REST is resource-based (i.e.. getUser(23) vs /user/23).

While some organizations support both SOAP and REST, these differences tend to impact the REST API design. As the more flexible of the two, REST bends to meet the needs of the standards-focused SOAP API.

## When to Use SOAP vs REST

In short, SOAP and REST are two API formats that answer the question of data transmission from two different points of view.

REST has become the preferred choice for public APIs and open source work that allows other developers to connect and easily use the data. Its lighter architecture and allowance for JSON also leads to the faster performance speeds that mobile app designers covet.

Because of SOAP’s acceptance as a standard protocol, it also has advanced security features available via SOAP extensions. SOAP APIs forgo performance speed for higher complexity. Many large enterprises build SOAP APIs specifically for these reasons. However, there are many industry best practices for securing REST APIs, as well.

You may want to consider SOAP if the API consumers (your organization or partners) already have tooling that supports it. For example, C# and Java have advanced SOAP libraries. Similarly, you might need SOAP for its use of typed data and procedures. For example, you can call a remote procedure in SOAP similar to how you call a local procedure.

REST might be your ticket if you prefer JSON, would like a more simple code base that uses HTTP’s GET/POST/DELETE commands, and/or is more scalable, allowing your API to grow as your project does.
