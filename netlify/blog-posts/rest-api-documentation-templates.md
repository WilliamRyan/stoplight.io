---
path: /blog/rest-api-documentation-templates
tags:
  - blog
  - blog-documentation
relatedTags:
  - blog-documentation
publishedDate: 2019-11-22
author: Adam DuVander
title: 'REST API Documentation Templates'
subtitle: Streamlining The API Documentation Process
image: /images/documentation-team.jpg
color: black
includeToc: true
disqus:
  enabled: true
actionBar:
  ctas:
    - color: black
      href: 'https://stoplight.io/studio/'
      submit:
        button:
          color: purple
          type: link
        input:
          type: email
      type: link
  enabled: false
meta:
  description: Streamlining The API Documentation Process
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: 'REST API Documentation Templates | Stoplight API Corner'
  image: /images/documentation-team.jpg
  twitter:
    description: Streamlining The API Documentation Process
    title: 'REST API Documentation Templates | Stoplight API Corner'
    image: /images/documentation-team.jpg
---
Documentation can be time-consuming to create from scratch. In many cases, it’s an afterthought. You’ve already designed and built the API. Now you need to figure out how to tell others how to use it. Whether it’s internal or external API consumers, they’ll want to know about authentication, the endpoints, and what response data to expect. Once you collect all the information, then you need to figure out how to present it.

Yet, we’ve all had at least one great experience with documentation, where everything you need is effortlessly communicated. In this post, we’ll outline a shortcut for documenting your API and provide templates you can use to create great docs for your REST API.

## API Templates Checklist

Before you look for API documentation templates or create your own, take a moment to review what should be included. At a minimum, you’ll need an API reference, which explains the various API endpoints, how requests are constructed, and what to expect as a response. On the surface, it’s straightforward, but it’s easy to forget important details that enable robust integrations.

Make sure your API reference templates include the following information:

- The root path for this version of your API
- Authentication and other headers required with each request
- The path to call each endpoint
- Which HTTP methods can be used with each endpoint
- The request data fields and where each goes, such as path, query-string, or body
- Explanation of what request data is required and what is optional
- Which HTTP status codes are possible for each endpoint/method pairing
- What each status code means in the context of each call
- The data to expect in each response, including which responses will always be present
- Example request and response data

In addition to the reference, there are likely [other types of documentation](https://stoplight.io/blog/missing-api-documentation/) your users will expect. Supplemental documentation helps improve the developer experience, especially during the initial integration, and can communicate the use cases your API supports.

While not required, you should consider whether your API templates can include these other types of documentation:

- Getting started guides and other tutorials
- Code repositories and sample applications
- API explorer or interactive tools to make live calls
- Case studies or a gallery of existing solutions

These various requirements of great documentation can be overwhelming, especially when you’re trying to quickly communicate what’s possible to API consumers. As you continue to build the API, it’s even harder to keep the documentation updated with what’s new. Wherever possible, look to automate as much of your API documentation as is reasonable. In the next section, we’ll look at methods to generate complete API references.

<div class="convertful-26074"></div>

## Generate API Documentation

Now that you have an idea of what should be included in your documentation, it’s time to create it. While you can write it by hand, it is less than ideal. Plus, with the same amount effort put into generating your API reference, you can create other benefits for your engineering team and organization at large.

Time and accuracy are among the huge advantages to using a documentation generator:

- Quickly create an initial reference to share
- Update documentation easily when the API changes
- Ensure that your API documentation matches the API functionality

A prerequisite to generating any meaningful documentation is an OpenAPI document. This API definition, sometimes called a Swagger file, describes the endpoints, request data, responses, and other details of an API in a machine-readable format. Among the many uses of an OpenAPI document is to generate API reference docs.

![Screenshot of Stoplight Studio](/images/studio-desktop.png)

[Stoplight Studio](https://stoplight.io/studio/) is a visual OpenAPI editor, which can help you produce an initial OpenAPI document for your API. You can also import existing API descriptions and make changes without having to directly edit JSON or YAML.

![Screenshot of Documentation](/images/stoplight-studio.png)

Finally, click the Publish button within Stoplight Studio to generate the documentation for your API reference. You can also add Markdown files to cover other areas of your documentation, such as getting started guides, samples, and tutorials.

## Style and Publish Your Documentation Templates

There’s a single, simple template within Stoplight Studio. You may want to have more control over the navigation, custom CSS, and use your own domain to host your docs. Especially for public documentation, you will want to include templates that match the theme of the rest of your website. In that sort of situation, [Stoplight Hubs](https://stoplight.io/hubs/) can help you create documentation that flows seamlessly with the rest of your online presence.

![Screenshot of Hubs Theming](/images/hubs-theming.gif)

Once you have an OpenAPI definition, you can add it to [Stoplight Hubs](https://stoplight.io/hubs/) for completely customized documentation experience. Change colors, add your own JavaScript and CSS, and even export your documentation as a static site.

Most importantly, when you generate your docs with Stoplight, you’ll cover all the important elements of the API templates checklist. You’ll give the developers consuming your API a great experience. Generate your documentation to save time and ensure your docs remain accurate over the long term.
