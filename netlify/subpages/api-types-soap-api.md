---
path: /api-types/soap-api/
tags:
  - 'soap'
  - 'api types'
relatedTags:
  - 'soap'
  - 'api types'
  - 'rest'
publishedDate:
title: SOAP APIs
subtitle: >-
  Explore SOAP APIs, how to call them, how to describe them, and other common topics.
color: blue
tabs:
  - href: /api-types
    title: API Types
  - href: /api-types/vs-rest-api/
    title: SOAP APIs vs REST APIs    
actionBar:
  enabled: false
meta:
  description: >-
    Explore SOAP APIs, how to call them, how to describe them, and other common topics.  
  title: SOAP API Protocol | Types of APIs for Enterprises
  twitter:
    description: >-
      Explore SOAP APIs, how to call them, how to describe them, and other common topics.
    title: SOAP API Protocol | Types of APIs for Enterprises
    username: '@stoplightio'
---


SOAP is an important protocol that helped introduce the widespread use of Web Services, also called APIs. Based on XML, the SOAP protocol is still in wide usage. Many organizations use the more flexible REST API pattern, but others prefer the structure, datatype control, and defined standard of SOAP.

This guide will cover an introduction to SOAP APIs, including how to call them, how to describe them, and other common topics that will help you understand the basics of the protocol’s history and place within Web Service APIs.

## What is SOAP

SOAP is the Simple Object Access Protocol, a messaging standard defined by the World Wide Web Consortium and its member editors. SOAP uses an XML data format to declare its request and response messages, relying on XML Schema and other technologies to enforce the structure of its payloads.

Both public and private Application Programming Interfaces (APIs) use SOAP as an interface. While more popular in large enterprises, organizations of all sizes produce and consume SOAP APIs.

SOAP is uses the Remote Procedure Call (RPC) pattern, where functions or methods are passed parameters and return a result. Many RPC solutions prior to SOAP were dependent on specific programming languages or technology stacks. For example, previous RPC implementations often required both sides of the RPC to use the C programming language, which predates the modern Internet. Even an Internet-era language, Java, has its own RPC model called Remote Method Invocation (RMI), which originally was tightly coupled with the Java Virtual Machine (JVM).

Among the important aspects of SOAP APIs are their independence from programming language and even underlying transport protocol. The sender can use C#, for example, while the recipient’s stack relies on Java. While these more enterprise-oriented languages are most common with SOAP, there are SOAP implementations in Python, Ruby, and all modern programming languages.

A final advantage to SOAP is its extensibility. As a standard, its specification is deliberately limited on constraints. As such, the extensibility model within the SOAP specification provides for customization.

## How to Call a SOAP API

In order to call a SOAP API, you’ll most likely need to include a SOAP library with your programming language. Although it’s possible to make SOAP API calls without SOAP libraries, it’s more efficient to work with an abstraction rather than crafting the messages yourself. The SOAP messages are verbose, mainly due to reliance on XML.

While the following examples use Python for readability, remember that SOAP is agnostic regarding your programming language. To retrieve a user profile from a fictitious SOAP API, you might make the following request using the Zeep library:

```python
from zeep import Client

client = Client('http://www.example.com/exampleapi')
result = client.service.GetUser(123) # request user with ID 123

name = result['Username']
```

In this example, we initiate a SOAP client based upon the SOAP endpoint. Then we call the service, invoking the `getuser` option with a user ID parameter. It’s a simple example, but disguises even more detail of the SOAP messages behind the scenes.

Let’s look at how this SOAP call might be structured:

```xml
<?xml version="1.0"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
  <soap:Header>
  </soap:Header>
  <soap:Body>
    <m:GetUser>
      <m:UserId>123</m:UserId>
    </m:GetUser>
  </soap:Body>
</soap:Envelope>
```

And the response might look something like this:

```xml
<?xml version="1.0"?>

<soap:Envelope
xmlns:soap="http://www.w3.org/2003/05/soap-envelope/"
soap:encodingStyle="http://www.w3.org/2003/05/soap-encoding">

<soap:Body>
  <m:GetUserResponse>
    <m:Username>Tony Stark</m:Username>
  </m:GetUserResponse>
</soap:Body>

</soap:Envelope>
```

Even in this simple example, the actual data within the message is surrounded by the SOAP structure. Compared to some more modern API request examples, SOAP may appear overly complex. Keep in mind that most developers making SOAP API calls are using a library, which provides a friendlier interface.

That said, it is possible to make SOAP API calls through a typical HTTP request (most SOAP services use HTTP, though the specification is independent of protocol). Here is the same call above using the Python requests library:

```python
import requests
req_headers = {"content-type": "text/xml"}
req_body =  "<?xml version=\"1.0\"?>"
req_body += "<soap:Envelope xmlns:soap=\"http://www.w3.org/2003/05/soap-envelope\">"
req_body += "<soap:Header></soap:Header>"
req_body += "<soap:Body>"
req_body += "<m:GetUser>"
req_body += "<m:UserId>123</m:UserId>"
req_body += "</m:GetUser>"
req_body += "</soap:Body>"
req_body += "</soap:Envelope>"
response = requests.post(
  "http://www.example.com/exampleapi",
  data=req_body,
  headers=req_headers
)
```

In this case, `response.content` would include the raw XML response, which needs to be parsed in order to determine the username and any other data the SOAP API returns.

## Anatomy of a SOAP Message

The examples in the above sections have already shown the format of SOAP API messages. In this section, you can better understand the few blocks of XML that SOAP requests contain. While it’s deliberately minimal (the “S” in SOAP stands for “simple,” after all), it provides the foundation for complex implementations.

SOAP messages are constructed of up to four blocks:

- `soap:Envelope`
- `soap:Header`
- `soap:Body`
- `soap:Fault`

Only `soap:Envelope` and `soap:Body` are required. However, each plays an important role in SOAP APIs. Below, each of these SOAP constructs is covered separately.

### SOAP Envelope

SOAP uses XML, but needs a way to separate it from other XML documents. The `soap:Envelope` tag provides a mechanism to identify the XML as SOAP.

In addition, the `soap:Envelope` tag requires a `namespace` attribute (`xmlns:soap="http://www.w3.org/2003/05/soap-envelope/"` for the latest version of SOAP) and can optionally supply an `encodingStyle` attribute.

The entirety of the SOAP message comes within the envelope, including the other three blocks.

### SOAP Header

In the basic SOAP API examples shown in earlier sections, the header was empty. While it’s optional, `soap:Header` makes possible SOAP’s extensibility via SOAP Modules. These modules can either be required or optional. In the case that they are required, you can include the `mustUnderstand` attribute set to `true`.

### SOAP Body

As implied by the name and shown in examples, `soap:Body` contains the bulk of the SOAP message. Namespaces can be used to describe what data to expect within the body, but are not required. In practice, the name of the procedure, parameters, and data all come through the SOAP Body.

### SOAP Fault

Finally, the `soap:Fault` tag is used within the `soap:Body` tag for error messages when a SOAP API call is not able to complete. There are many possible causes for an error, including inaccurate SOAP formatting, a processing error on the server, and mismatched data type.

To communicate the many errors, there are several sub-elements that can be present within the Fault tag:

- `Code`: a machine-readable error code
- `Reason`: a human-readable error reason
- `Node`: the SOAP node where the error occurred
- `Role`: the role of the SOAP node where the error occurred
- `Detail`: application-specific error details, with both human- and machine-readable data

While `soap:Fault` is optional, a SOAP implementation is not truly complete without encapsulating potential errors using this tag.

## Use a WSDL to Describe a SOAP API

As SOAP and other Web Services became ubiquitous, many tools, technologies, and standards were created to support them. Among them is the Web Services Description Language (WSDL), an XML format that describes how to call a web service. It defines the operations available and what input/output fields to expect.

Though not specific to SOAP, many implementations of SOAP APIs combine a WSDL with XML Schema to provide a robust web service for exchanging messages using defined procedures and field types. Because a WSDL is machine-readable, a SOAP client could determine what operations are possible, what data is needed to complete the call, and then present a user with the data needed.

WSDLs are also used to generate human-readable documentation for SOAP APIs. Developers can look at the method names and input to determine what’s required to call the SOAP API. In addition, some programming language libraries and developer environments can consume a WSDL file to help programmers with available methods and syntax when writing code.

Like SOAP, WSDL is general enough for many types of usage, though the two technologies are frequently used together.

## SOAP API Security

Many SOAP API examples, such as those to query stock quotes or weather, have no authentication. While useful for a quick proof of concept, more robust SOAP APIs will authenticate and authorize the API calls, ensuring that important business processes are only available to approved parties.

As with any API or web service, there are many ways to handle security within SOAP APIs. Since many SOAP APIs use HTTP, it’s possible to piggyback on other authentication and authorization schemes within that protocol.

For example, HTTP Basic Auth accepts a username and password. When sent via SSL/TLS, this can be a barebones way to authenticate a user. However, there is no built-in role or authorization with this method. In addition, while it provides point-to-point security, often end-to-end security is required.

WS-Security is a SOAP extension that provides a number of security features for SOAP APIs. Built on top of the XML Encryption and XML Signature specifications, WS-Security describes how to sign and encrypt SOAP messages. In addition, it supports a handful of security token formats, including SAML, X.509, and Kerberos.

Perhaps SOAP’s most used extension, WS-Security enables end-to-end security, authorization of senders, and other features enterprises require in web services.

## History and Future of SOAP

The first SOAP specification was published in 2000. An earlier version, released in 1998, was known as XML-RPC and had a more focused feature set. Like SOAP, XML-RPC allows for remote procedure calls via XML. XML-RPC specifically only uses HTTP to transport the data. While this is the common protocol for SOAP, as well, SOAP can technically use any protocol.

It took three years for the SOAP specification to reach recommendation stage. Quickly it became the most common approach to web services. Prior to SOAP, there was not a standards-based approach to creating programmable interfaces for exchanging data between systems. SOAP helped shepherd innovation both within the enterprise and encouraged the first wave of public APIs from companies like eBay, Salesforce, and Amazon.

Around the same time, REST APIs were described in a doctoral dissertation. However, SOAP’s embrace as a standard, as well as its application in industry (contrasted with academia), helped it remain the popular choice for much of the decade.

SOAP remains important as a standard for web services and runs many internal systems worldwide. For new projects, many organizations are moving to microservices architecture using REST APIs. While the more modern techniques leave behind a fully standards-based approach of SOAP, many prefer the more flexible and nimble development process.

[Compare SOAP vs REST](https://stoplight.io/api-types/soap-api/vs-rest-api/) to see the differences and similarities between these two approach to web services.
