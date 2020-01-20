---
path: /blog/mock-api-test
tags:
  - blog
  - blog-mocking
relatedTags:
  - blog-mocking
publishedDate: 2019-10-30T14:43:28.876Z
author: Matt Groberg
title: How to Mock API Calls in Test Environments
subtitle: Comparing Jasmine and Jest for Node mock APIs
image: /images/jasmine-jester.jpg
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
  description: Comparing Jasmine and Jest for Node mock APIs
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: How to Mock API Calls in Test Environments | Stoplight API Corner
  image: /images/jasmine-jester.jpg
  twitter:
    description: Comparing Jasmine and Jest for Node mock APIs
    title: How to Mock API Calls in Test Environments | Stoplight API Corner
    image: /images/jasmine-jester.jpg
    username: '@stoplightio'
---
Automated testing is a great way to ensure the quality of your software. It helps you identify what behaviors you expect to see, and gives you an explicit statement about what went wrong if you encounter a bug. These days, APIs are everywhere, but [integrating APIs into unit tests](https://stoplight.io/blog/the-fundamentals-of-http-api-unit-testing-2c55cd0c7634/) can be a little tricky. However, whether your API is still in development, or you are working on new features, testing expected behaviors systematically can save a lot of time and make it easier to identify problems. Developing mock API calls can help you use valuable unit tests, without the problems associated with calling a live API.

Node.js offers several different automated testing environments for behavior-driven JavaScript, including two popular frameworks Jest and Jasmine, which we’ll be comparing in this post. First, we’ll talk about best practices for behavior driven development with an API.  Then we’ll go over how to set up and run tests for your API in Jasmine or Jest. Finally, we’ll compare the two frameworks to help you decide which is best for your needs.

## Why Mock API Calls

Maybe you are reading this thinking: testing is great and everything, but why not test the actual API? You could use a library, like axios, to make HTTP requests from the network. If you are developing an API, it can help you plan locally before deploying. And if your API is already deployed, but you are adding new features, you don’t want to be pushing untested code to the live version. Also, you might want to test an API that charges for overuse, or has a non-deterministic outcome (like dynamic data from a database). Mocking an API call gives you control in these situations, and speeds up development down the line.
The first step to behavior-driven development is making a list of everything your API should do when it is functioning properly. Each item should be specific, measurable, and deterministic. If you have well-written documentation, this could be your starting point. If you are just getting started, this initial planning could turn into your documentation.

For each of these steps, list an example of what the raw data for this request looks like and what the response should look like. For example:

1. Returns a 200 status with a users posts when requested

* Request: {method:'get',body:{user:"Jack"}}
* Response: {status:200,posts:posts:["I just bought some magic beans!"]}

In order to test these behaviors without going to a network, you should have this logic separate from your main routes. This way you can easily import the same functions your API depends on in your tests. You can create a function that processes a request object and returns a promise to simulate an asynchronous API call. It could look something like this:

```javascript

  function simulateAsyncCall(request){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        switch(request.method){
	case 'get':
	  const user=getUser(request)
	  if(user){
                resolve({status:200,posts:user.posts})
	  } else {
	    resolve({status:404, message:"Not Found"})
	  }
	break;
	case 'post':
	  if(passwordIsValid(request)){
	  addToPosts(request)
	  resolve({status:200,message:"Added Post"})
	} else{
	  resolve({status:401,message:"Unauthorized"})
	}
	break;
	default :
	  resolve({status:400, message:'Bad Request'})
        }
    },300)
  })
}
```

<div class="convertful-26074"></div>

## Create a Mock API with Jasmine

Before installing any Node modules, you should make sure you have a package.json file in your root directory. If not, you can set it up with this command: `npm init -y`.

Let's start by installing Jasmine in your project directory:
`npm install jasmine –save-dev`

When that is finished you can configure Jasmine using this command:
`node node_modules/jasmine/bin/jasmine.js init`

This will create a spec-folder with a configuration file with some default settings. It’s important to remember that the test files we write should end in "spec.js"

Finally, we will need to set up the test command in our package.json file.  Open this file and add a `test` key to the `scripts` object with the path to the jasmine module. It should look like this:

```json
"scripts":{
  "test":"jasmine"
}
```

Let's make sure everything is set up right. Create a file in the `spec` folder named `my-first-spec.js` paste this in it:

```javascript
describe("My Jasmine Setup", function(){
  var a=true;

  it("tests if the value of a is true", function(){
    expect(a).toBe(true)
  })
})
```

You can run tests in the terminal by running the test script we put in our package.json:
`npm run test`

Your test should pass! Try changing the value of `a` to false, and running it again to see what it looks like when a test fails. Notice that it gives you a descriptive message when something goes wrong.

Another cool feature of Jasmine test suites is a "beforeEach" and "afterEach" function. This allows you to do something either before or after each "it" block. Let's create a new instance of our MockAPI class before each test.

The following script should work in either Jasmine or Jest:

```javascript
const MockAPI= require('../MockAPI.js');

describe("Mock API",()=>{
  let mockAPI;
  let mockDatabase=
  {
    users:[
    {
      name:"Jack",
      passwordHash:"dasdKDKDJSLASDLASDJSAasdsdc123",
      posts:["I just bought some magic beans!"]
    },
    {
      name:"Jill",
     passwordHash:"dasdKDKDJSLASDLASDJSAasdsdc123"
      posts:["Jack fell down!"]
    },
    ]
  };
  
  beforeEach(()=>{
    mockAPI= new MockAPI(mockDatabase)
  })
  
  it("returns a 400 bad request status if the request is invalid",()=>{
    const mockApiCall=mockAPI.simulateAsyncCall({})
    return mockApiCall.then(response=>{
      expect(response.status).toBe(400)
    })
  })
  
  describe("get requests",()=>{
    const validRequest={method:'get',body:{user:"Jack"}};
    const invalidRequest={method:'get',body:{user:"Tod"}};

    it("returns a 404 status if a user is not found",()=>{
      const mockApiCall=mockAPI.simulateAsyncCall(invalidRequest)
      return mockApiCall.then(response=>{
      expect(response.status).toBe(404)
      })
    });

    it("returns a 200 status with a user's posts",()=>{
      const mockApiCall=mockAPI.simulateAsyncCall(validRequest)
      return mockApiCall.then(response=>{
      expect(response.status).toBe(200)
      expect(response.posts).toEqual(["I just bought some magic beans!"])
      })
    });
  })
  
  describe("post requests",()=>{
    const validRequest={method:'post',body:{user:"Jill",password:'hill',post:"He broke his crown!"}}
    const invalidRequest={method:'post',body:{user:"Jill",password:'beanstock',post:"Jack is cool..."}}
  
    it("returns a 401 unauthorized status if the wrong credentials are sent",()=>{
      const mockApiCall=mockAPI.simulateAsyncCall(invalidRequest)
      return mockApiCall.then(response=>{
        expect(response.status).toBe(401)
        expect(mockAPI.db).toEqual(mockDatabase)
      })
    })

    it("returns a 200 status and adds the post to the database",()=>{
     const newDatabase={
     users:[
      {
        name:"Jack",
        passwordHash:"dasdKDKDJSLASDLASDJSAasdsdc123"
        posts:["I just bought some magic beans!"]
      },
      {
        name:"Jill",
        passwordHash:"dasdKDKDJSLASDLASDJSAasdsdc123"
        posts:["Jack fell down!","He broke his crown!"]
      },
     ]
     }
     const mockApiCall=mockAPI.simulateAsyncCall(validRequest)
     return mockApiCall.then(response=>{
     expect(response.status).toBe(200)
     expect(mockAPI.db).toEqual(newDatabase)
     })
    })
  })
})
```

## Mock API Calls With Jest

To get started with Jest, you only need to install it:
`npm install jest –save-dev`

And include a test command in your package.json file like this:

```json
"scripts":{
  "test":" jest"
}
```

Jest started as a fork of Jasmine, so you can do everything we described above and more. This basic pattern of a "describe" block, and an "it" block which contains one or more "expect" methods works the same in Jest.

So far, we have been testing *deterministic* functions (which always have the same output for a given input). But what if our API depends on something that is outside of our control? For example, what if our API uses a third party login for authentication?

Jest allows you to create mock functions which return predictable outcomes and include extra methods to track how the function is integrating with the API. Using the jest.fn method, we can make assertions like this:

```javascript
describe("AJAX functions with Jest",()=>{
	const mockUrl='/api/users';
	const mockUsers=[{name:'jack',name:'jill'}];
	const getUsers = jest.fn((url)=>mockUsers)
	it("returns returns users from an api call",()=>{
		expect(getUsers(mockUrl)).toBe(mockUsers)
		console.log(getUsers)
	})
	it("called getUser with a mockUrl",()=>{
		expect(getUsers).toHaveBeenCalledWith(mockUrl)
	})
})
```

If you run this test and look at the console.log, you will notice that there are a lot of methods associated this mock function. These allow you to specifically define how the function is called, what it should return, and more.

You can also mock out entire modules (replacing their methods with jest mock functions) using `jest.mock()`. For example, you could import an HTTP library (such as axios) and set the return value of its `.get()` method like this:

```javascript
const axios=require('axios');
jest.mock('axios');

class Users {
  static all() {
    return axios.get('/users.json').then(resp => resp.data);
  }
}
const mockUsers=[{name:'Jack'}]
const mockResponse={data:mockUsers}
axios.get.mockResolvedValue(mockResponse)

return Users.all().then(data => expect(data).toEqual(users));
```

Jasmine also has a plugin ([jasmine-ajax](https://github.com/jasmine/jasmine-ajax)) used to mock AJAX calls, but it isn't as flexible as Jest. It replaces the XMLHttpRequest object in a browser with a custom response. Since the XMLHttpRequest exists in the DOM, you would need to create a fake DOM (using something like [jsdom](https://www.npmjs.com/package/jsdom)) to run this on the backend.

## Jasmine vs Jest vs Other Alternatives

There are plenty of similarities between Jasmine and Jest. If your API is mainly composed of pure functions, both Jest and Jasmine are great options to ensure your API is performing as expected.

Jasmine is more light-weight and faster than Jest, but has less features. Jest is more descriptive when you run tests in the console, but if you are more of a minimalist you may like Jasmine better. We appreciate the flexibility of mock functions in Jest, so for complex APIs we’d recommend Jest over Jasmine.

However, there are also several disadvantages to using test frameworks like Jest and Jasmine. If you have multiple teams working on different parts of an app (for example: front-end vs back-end, or native vs web), you might need to write and update tests for each separate environment. Also, since you are not actually deploying to a network, there could be details you are missing in your test environment.

For these reasons, if you're mocking an API still in development, it can be useful to generate mock servers, either locally or in the cloud. Stoplight has an [open source mock server](https://stoplight.io/mocking/) that generates from OpenAPI documents. Get started now and set up your tests before you even have live data.
