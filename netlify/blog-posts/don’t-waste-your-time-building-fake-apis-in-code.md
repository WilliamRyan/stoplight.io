---
path: /blog/dont-code-fake-apis/
tags:
  - blog
  - blog-mocking
relatedTags:
  - blog-mocking
publishedDate: 2019-06-20T15:51:39.239Z
author: Kyle Lange
title: Don’t Waste Your Time Building Fake APIs in Code
subtitle: 'Compare OpenAPI mock servers to writing Java, PHP, and C#'
listSubtitle: ''
image: /images/countdown-clock.jpg
color: black
tabs:
  - {}
includeToc: true
disqus: {}
actionBar:
  ctas:
    - color: purple
  enabled: false
meta:
  description: 'Compare OpenAPI mock servers to writing Java, PHP, and C#'
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Don’t Waste Your Time Building Fake APIs in Code | Stoplight API Corner
  image: /images/countdown-clock.jpg
  twitter:
    description: 'Compare OpenAPI mock servers to writing Java, PHP, and C#'
    title: Don’t Waste Your Time Building Fake APIs in Code | Stoplight API Corner
    image: /images/countdown-clock.jpg
    username: '@stoplightio'
---

There are many good reasons to create a fake API, but writing code to generate them is probably just wasting your time. With the industry moving toward the OpenAPI format to describe APIs, it makes more sense to generate your mock APIs from these descriptions instead.

We’ve compiled a few examples of what it takes to build fake APIs for testing in some popular languages--Java. PHP, and C#. Then we’ll show how it works using OpenAPI mock servers.

But first, here are a few brief reasons mocking saves you time and keeps your work efficient:

1. **A Mock API is Flexible.**
   Whether you work on the front-end or the back-end or your API is internal or external, you can set a mock API to return the data you want. Responses can be static or flexible. It should return all the same data types, arrays and object you would expect of a real API. Your mock data can be dynamic, randomly generated, and can even allow for different results based on input.\
   \
   They are also customizable to be locally run on your computer (for moments when you might need low latency), for your whole team to use publicly, and/or to keep your mock servers updated for the next cycle of improvement to your project.
2. **It gives you feedback sooner.**\
   The quicker you can get feedback on a project, the less your team builds out features that felt good in the abstract but turn out to be ineffective. With a mock API, you can gather feedback from devs as they use it. For example, if your front-end developers have built out the framework, but are waiting for a back-end team to complete the API for production, a mock API can let front-end devs utilize something that has the same parameters as your under-construction API .\
   \
   This is a big advantage for both development teams because they can discover where the mock API doesn’t meet their combined needs. This fast feedback loop can make engineering teams much more efficient as they improve their processes and outcomes together.
3. **You can also use a mock API for testing.**\
   [API unit testing](https://stoplight.io/blog/the-fundamentals-of-http-api-unit-testing-2c55cd0c7634/) is a must for your production API. But it is also useful during development. Mock APIs are perfect for initial unit testing because they can get the ball rolling in helping developers think about:

   - breaking larger sets of logic into testable “units” right from the start
   - covering initially anticipated use cases
   - narrowly scoped tests that are quick to write that will provide useful feedback for developers as they cycle through iterations to production

   A mock API will let you set and change your parameters, expected outcomes, and tests without having to rewrite and maintain large blocks of code. If you want to learn more about methods of generating data using open API Specifications in real time, this is [a great place to start](https://stoplight.io/mocking/).

## Your Mock API Won’t Go to Production

Can’t I use my fake API code to create the production version of the API? That may be possible if you have your workflow dialed in, but in practice it’s rare. APIs change as they’re designed. That’s a good thing, because it helps you create better software.

To give you a taste of what we mean, we’ll compare the effort required in a few popular languages with using an OpenAPI description.

First, let's establish the effort and decision making required to even get to a line of code of a fake API in any of the three languages presented: Java, PHP, and C#. With your team you will need to:

- Select your preferred dependencies, which may require updates, or buffing up on a few new features in their documentation
- You will need to import those dependencies to your project with your package manager
- You will have to write and programmatically select some mock data and how/when it may be used
- Write all the getters, setters, errors, and status codes
- Write unit tests and maintain them along the way

As you can see, even before a line of code happens, you have already sunk considerable hours into a fake API that is to be replaced or fundamentally changed. You may have some plug-and-play code, but that typically has to be modified for each particular situation. Very quickly you are now locked into and testing code that is only for test purposes and no longer working the actual code anymore.

Let’s look at some code from each language to dive further.

## Build a Fake API in Java

In Java, you might start with a domain model of orders, some REST endpoints and error messages if they are not reached, and a repository to store objects of data. Lots of code creation is needed to get this API off the ground. Here is an example of the code required when generating a new project:

```
package com.example;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("myresource")
public class MyResource {
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getIt() {
        return "Response!";
    }
}
```

In this example, which you can see the full [details from here](https://jersey.github.io/documentation/latest/getting-started.html#new-project-structure), the API will return plain text. Want to return JSON? Well, unfortunately, even more setup is required.

<div class="convertful-26074"></div>

## Build a Fake API in PHP

PHP typically requires less writing as a language to set up a fake API, but the work is still significant. Generally, the process is as follows: set up a SQL database and table to store and change information, perhaps some connection variables in an .env file, create a class to hold your database connections, create a seed file to insert some mock data for testing, and connect your endpoints.

[Here is some set-up code](https://www.slimframework.com/docs/v3/tutorial/first-app.html) from a Create Routes section to connect to GET and POST HTTP requests:

```
$app->get('/tickets', function (Request $request, Response $response) {
    $this->logger->addInfo("Ticket list");
    $mapper = new TicketMapper($this->db);
    $tickets = $mapper->getTickets();

    $response->getBody()->write(var_export($tickets, true));
    return $response;
});
```

This example is less complex than the Java example, but still requires lots of code and, perhaps, more importantly, restricts your testing and experimentation to a set foundation of code. What happens when the architecture idea for your production API changes or grows to include more features? Your fake API may no longer be foundationally current enough to test for these new changes and features.

## Build a Fake API in C

Perhaps you’re sensing the pattern here. There’s a lot of boilerplate code that you may not use in your production API. In C#, the setup is as follows:

With Microsoft’s proprietary text editor, the initial file structure is taken care of for you, as there are templates to use. Then, you need to configure a routing table, add a User Model, a controller for the HTTP requests, seed data into your User class, and prepare a testing cycle.

[Here is a link](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-2.2&tabs=visual-studio#add-get-methods) for the code required for just the Get methods in a C# API build

```
[HttpGet]
public async Task<ActionResult<IEnumerable<TodoItem>>> GetTodoItems()
{
    return await _context.TodoItems.ToListAsync();
}

// GET: api/Todo/5
[HttpGet("{id}")]
public async Task<ActionResult<TodoItem>> GetTodoItem(long id)
{
    var todoItem = await _context.TodoItems.FindAsync(id);

    if (todoItem == null)
    {
        return NotFound();
    }

    return todoItem;
}
```

If you want to use a mock API, writing out all that C# code is not required. Or Java, or PHP. No matter the language, a mock API in code will have to be kept current like any other API code you have in production, or neglected to the detriment of all teams involved.

But you want to make endpoints available as soon as possible. They let you simulate and test your API architecture and get feedback. When you’re able to do this without code, it’s like having the ability to make a structural engineering model of the steel in a skyscraper before you ever have to weld two pieces together.

## Generate a Fake API from an OpenAPI Document

There will always be edge cases where writing your own code for a fake API will be an effective practice. For one, it is a great way for junior developers to learn fundamental skills in a low-risk platform. But when a light and fast CI/CD loop is required, or your team has decided on an [API-first approach](https://stoplight.io/api-design-guide/basics/) for development, generating a mock API server will likely be your preference.

Once you have an OpenAPI document, you can generate a quick mock API using [Prism API server](https://github.com/stoplightio/prism). Prism is an open source command line utility. Using the OpenAPI industry standard, you can declare parameters on endpoints, methods, and what data to support.

![](/images/dynamic-mocking.png)

With that information, you can connect to Spotlight’s [hosted servers](https://stoplight.io/mocking/) and your mock API is ready for you to use over and over. You can now easily change the endpoints, methods, and data without having to write fake code and Prism will give you all the mock data you need to test and validate your API architecture.

You can [set up a mock API server](https://docs.stoplight.io/mocking/setup-mock-server) to run locally, or have it automatically hosted. Hosting makes it easy to share the mock server with your front-end team, so they can use it to progress on their side of the build.

Your team will move faster and you can focus on writing the code that will make it to production.
