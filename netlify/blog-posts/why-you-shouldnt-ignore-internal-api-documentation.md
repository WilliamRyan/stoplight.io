---
path: /blog/internal-api-documentation
tags:
  - blog
  - blog-documentation
relatedTags:
  - blog-documentation
publishedDate: 2019-09-25T17:12:53.176Z
author: Adam DuVander
title: Why You Shouldn't Ignore Internal API Documentation
subtitle: Enable your teams to move faster and collaborate efficiently
image: /images/whiteboard-collaboration.jpg
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
  description: Enable your teams to move faster and collaborate efficiently
  robots: 'index, follow'
  title: Why You Shouldn't Ignore Internal API Documentation | Stoplight API Corner
  image: /images/whiteboard-collaboration.jpg
  twitter:
    description: Enable your teams to move faster and collaborate efficiently
    title: Why You Shouldn't Ignore Internal API Documentation | Stoplight API Corner
    image: /images/whiteboard-collaboration.jpg
---
Your internal teams build and consume many web services. Some of these may be public APIs, such as BigCommerce for e-commerce or SendGrid for transactional email. The most enlightened development teams are [building microservices internally](https://stoplight.io/blog/designing-apis-for-microservices/). These reusable components can speed up development across an organization. In order to see these gains, your engineers and their business collaborators need to know what services are available.

Great documentation allows your team to understand what’s possible with each API and get started quickly. It’s one important output of a much larger API design management process. When implemented, your internal API documentation provides immediate and long-term value to your team.
## Help Dev Teams Build Faster
Ask any developer for their top API pet peeve and it’s likely related to poor documentation. It may be inaccurate, incomplete, or just plain absent. These things don’t happen maliciously, of course. It is difficult to maintain even the most basic API docs, particularly when there are many APIs (or microservices) you are documenting alongside development.

When you [generate documentation from OpenAPI](https://stoplight.io/documentation/) descriptions, you always have an updated API reference even before your engineers start writing code.

Engineers building APIs move faster when there’s a machine-readable source of truth. For example, they can programmatically confirm which endpoints have been built. In addition, they don’t need to stop to write documentation. Instead, they can generate a new version of the docs. Even better, building these reference docs can be incorporated into your development workflow so it happens automatically.

The developers consuming the internal API also speed up their work. They can begin integration before the final API is ready. Armed with up-to-date, accurate API documentation, your teams can confidently pursue development simultaneously.
## Expand API Knowledge Beyond Your Engineers
“API” seems like a technical term, but you want the software process to be approachable to non-engineers. Product and business team members are becoming more comfortable with APIs. Plus, these non-coders often hold an important understanding of the problems you’re solving with your software.

With plenty of public API examples, non-engineers are used to looking through documentation. While they won’t necessarily write the code to consume these APIs, they can figure out how it works. Your internal documentation brings that important knowledge of what’s possible. Save your engineers from meeting overload and invite your API docs to the call instead.

Your documentation will be judged internally based upon companies who have put a lot of effort into their public API developer experience. You may find an important [part of your API documentation is missing](https://stoplight.io/blog/missing-api-documentation/). Some of these are only needed once the API is built, but others can be generated while the API is in development.

Your entire team can benefit from early access to your internal docs. Since APIs solve business problems, people with that business knowledge can provide important feedback. For example, a product manager may see that an endpoint does not return the data needed. Or a business development manager could recognize a partnership opportunity and begin the long work to arrange a fruitful integration. When documentation is created after your API is already built, it may be too late to make large changes.  
## Create an API Design Management Culture
Documentation contains the human-readable visualization of decisions made about your API. Whether or not you ascribe to [design-first APIs](https://stoplight.io/api-design-guide/basics/), someone within your organization is designing your APIs. It’s during this important process that you want to expand input beyond the engineering team. Additionally, an API design management culture will help keep your APIs consistent, which will benefit everyone in the organization.

To understand your API designs, OpenAPI documents are the source of truth. Among many formats, including Swagger (which spawned the OpenAPI Initiative), OpenAPI has the widest industry support. The JSON or YAML documents are meant firstly for machines, but can be used to generate documentation. [Stoplight Studio](https://stoplight.io/studio/) help teams design, organize, and share their APIs.

That said, API design management is not a single tool. You cannot enforce a one-size-fits-all approach and allow your team the flexibility to move quickly. Store OpenAPI documents in your own GitHub repository, for example, but pull them into the relevant tools to generate documentation, build mock servers, and share with team members who aren’t likely to explore code repos.

A modular approach allows you to use tools like [Spectral](https://stoplight.io/open-source/spectral/), an open source JSON linter that helps codify API style guides. Consistency in your API designs becomes its own implicit documentation. Ensure your OpenAPI documents are complete and go beyond technically correct by declaring rules to keep your designs consistent.

A culture of API design management will help you produce better APIs and vastly improve your internal API documentation. Your engineering teams will move faster and allows for more collaboration across your organization.

Great internal documentation, built primarily from OpenAPI descriptions, allows anyone to understand which APIs are available and what’s possible with each.
