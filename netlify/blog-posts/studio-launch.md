---
path: /blog/studio
tags:
  - blog
  - blog-design
  - blog-featured
  - blog-general
relatedTags:
  - blog-studio
  - blog-design
publishedDate: 2019-08-21T00:00:00.000Z
author: Marc MacLeod
title: 'Announcing Stoplight Studio, Our Next Gen API Designer'
subtitle: >-
  Written from scratch with the modern development workflow in mind. Now with
  OpenAPI v3 support, and options to use your own version control system.
image: /images/dayne-topkin-cxruh7pmmsu-unsplash.jpg
includeToc: false
actionBar:
  enabled: false
meta:
  favicon: /images/mark_light_bg.png
  title: 'Announcing Stoplight Studio, Our Next Gen API Designer'
  image: /images/studio/blog.png
  robots: 'index, follow'
  twitter:
    title: 'Announcing Stoplight Studio, Our Next Gen API Designer'
    image: /images/studio/blog.png
    username: '@stoplightio'
  url: 'https://stoplight.io/blog/studio'
---
Today we are thrilled to share [Stoplight Studio](https://stoplight.io/studio/), our new free API designer, built with the modern development workflow in mind.

Previous versions of Stoplight required you to keep your API description documents on our servers, but Stoplight Studio includes first class git support (yes, even in the browser!), which allows you to use your existing version control system. We analyze git repositories to find relevant files, and give you a beautiful visual editor to create your API designs. When ready, you can commit the changes directly to your git repository (GitHub, Bitbucket, GitLab, etc). This makes integration with your own PR workflows and build pipelines easy, and means your API descriptions and docs can now live right alongside your code.

We’ll share a lot more about Stoplight Studio over the coming weeks, but here’s a quick look at what is available today:

- Studio Web, with first class Github support (our enterprise platform supports other VCS providers)
  - Open any github repository by visiting a URL like `https://stoplight.io/p/studio/gh/{yourGithubOrg}/{yourGithubProject}`
- Studio Desktop for working offline, with files on your computer
- Editors for OpenAPI v2 & v3, standalone JSON Schema models, and Markdown files.
- [Prism](https://stoplight.io/open-source/prism/) integration in Studio Desktop, for automatic local mock servers
- [Spectral](https://stoplight.io/open-source/spectral/) integration in Studio Web & Desktop, for API style guides and linting
- Smooth design-to-docs experience - publish and share beautiful documentation from Studio Web with a single click

Stoplight Studio is completely free for individuals - you don't even need an account to use it. We want everyone to have access to the best API design tooling, without compromises or vendor lock-in. For four years, that’s been our goal, and we believe Studio is a huge step towards delivering on that promise. Before going further, let's take a quick walk through Stoplight's evolution over the years.

![Screenshot of Stoplight Studio](/images/studio/blog.png)

## First Visual API Designer for API Descriptions, Circa 2015

When Stoplight was founded, declarative API specifications were starting to become popular, but remained fairly unapproachable. You could use documentation-focused Swagger (which later became OpenAPI) or modeling-centric RAML. In either case, you had to write the YAML or JSON yourself, which significantly increased the barrier to entry for many would-be adopters.

We built the first visual API designer to enable anyone to design an API without first picking and learning a new specification syntax. You could bring an existing document, or start fresh with a builder that walks you through the elements of an API definition. Model request and response shapes, declare HTTP methods, and so on. Many of the ideas in this groundbreaking initial interface remain in Stoplight Studio.

Our first API design tool saved valuable developer time and opened the design process up to the whole team. Without becoming a Swagger or RAML expert, enterprise architects and product managers alike could build APIs 10x faster than using a code based editor.

## True OpenAPI Editor Built on Git, Circa 2018

When OpenAPI emerged as the industry choice, we wanted our design editor to fully support the format. In 2018, we built the next version of our designer to adopt this standard. While our original designer supported multiple API specifications, it deconstructed and reconstructed them on import/export. This was a lossy process, and any non standard OpenAPI (such as extensions) was lost when rebuilt. Our second API designer improved upon this flaw with a lossless approach - it operated directly on the original OpenAPI document. Because it worked directly with the underlying specification document, it was the first time we supported both a form AND code editor experience.

Our customers build and update many APIs, which brings a versioning challenge. We attempted to solve the problem with a tool well known for branching and merging. Our new editor was built atop a Gitlab server that we host, which allowed for tracking revisions and defining versions. Any team member could use the editor, add comments, make updates, and see all the changes. Our customers love the experience and insight it gives them into their API design and development process. Plus, we gave them tools to share their API beyond the immediate team.

Every API needs documentation, so we created a flexible docs generator from OpenAPI. Though Stoplight Studio supersedes the editor, this documentation product will remain at [Stoplight Hubs](/hubs) (as will all of our "next" based tooling) for the foreseeable future. Add your own styles, generate API references, and add additional documentation pages. A consumer’s complete experience of your API includes understanding how it works, what is possible, and how to get started. Hubs help you educate developers, whether external or internal, while ensuring that documentation is automatically updated along with your OpenAPI document.

## No Compromise API Design Management, Circa Now

Our API design application had solved many of our customer’s problems, but we inadvertently created yet another walled garden. The Gitlab that we run to power many of the git features became the source of truth for our customer's design assets. Customers could not leverage their existing version control systems, and in order to get the maximum benefit, everyone in their organization needed to store their design assets on our servers.

With Stoplight Studio, our aim is to become part of your workflow, rather than requiring you to conform to ours. We connect to your git server, and bring the lossless OpenAPI visual editor you’ve come to expect. Changes are saved locally until you choose to push them to your repository. We can also detect external changes so you’re always working with the latest version.

OpenAPI documents can be leveraged across the API lifecycle. Our team contributes to many open source projects in API tooling area, including some we’ve created ourselves. Two of these are bundled with Stoplight Studio:

- Spectral, a [flexible JSON linter](https://stoplight.io/blog/spectral-v4/), ensures complete OpenAPI definitions and helps your organization design consistent APIs.
- Prism, an [incredibly fast mock server](https://stoplight.io/blog/prism-v3/), creates mock servers based on OpenAPI documents.

We invite you to [try Stoplight Studio now](https://stoplight.io/studio/). Both Studio Web and Studio Desktop are free. You can open any GitHub URL inside the editor and begin to explore how we interpret your API files. Prototype new endpoints, generate mock servers, and quickly publish documentation.

Stoplight Studio is the first of a broader set of tools from Stoplight to help organizations go design-first with their APIs. We've got many other exciting updates and features in the pipeline, and can't wait to share them. Until then, happy designing!
