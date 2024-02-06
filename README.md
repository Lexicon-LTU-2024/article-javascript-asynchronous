# Asynchronous JavaScript

<details>
<summary>Table of content</summary>

- [What is asynchronous JavaScript?](#what-is-asynchronous-javascript)
  - [XMLHttpRequest - Callback-based](#xmlhttprequest---callback-based)
  - [Example with XMLHttpRequest](#example-with-xmlhttprequest)
  - [The XMLHttpRequest Object](#the-xmlhttprequest-object)
    - [Properties](#properties)
    - [Methods](#methods)
    - [Events](#events)
  - [Promises](#promises)
  - [Creating a promise](#creating-a-promise)
  - [Using the results of a Promise](#using-the-results-of-a-promise)
  - [Fetch API - Promise-based](#fetch-api---promise-based)
    - [Breakdown of fetch](#breakdown-of-fetch)
    - [Syntax of fetch](#syntax-of-fetch)
    - [Common options](#common-options)
- [API - Application Programming Interface](#api---application-programming-interface)
  - [Endpoints](#endpoints)
  - [Request and Response](#request-and-response)
  - [Data Formats](#data-formats)
- [JSONPlaceholder API - Free fake API for testing and prototyping](#jsonplaceholder-api---free-fake-api-for-testing-and-prototyping)

</details>

## What is asynchronous JavaScript?

JavaScript is inherently single-threaded, meaning it executes one operation at a time. However, many operations, such as fetching data from a server or reading a file, are time-consuming and can lead to blocking code execution.

Asynchronous programming allows you to execute code out of order, making it possible to perform time-consuming operations without blocking the execution of the rest of your code.

[Back to top](#asynchronous-javascript)

### XMLHttpRequest - Callback-based

`XMLHttpRequest` is a built-in object on JavaScript that provides an easy way to make HTTP requests from the browser. It supports both synchronous and asynchronous requests, but asynchronous usage is more common and recommended to avoid blocking the main thread. It has been available for a long time and was the standard way to perform HTTP requests before the introduction of the `Fetch` API.

While `XMLHttpRequest` is still functional and supported in most browsers, the `Fetch` API is considered more modern, provides a simpler and more flexible interface, and is based on Promises. The `Fetch` API is generally recommended for new projects, but `XMLHttpRequest` may still be encountered in older codebases.

[Back to top](#asynchronous-javascript)

### Example with XMLHttpRequest

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "./cars.json", true);

xhr.addEventListener("readystatechange", () => {
  // The request is complete and the response is available
  if (xhr.readyState === 4) {
    // Succesful request
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      // Request failed
      console.error("Error:", xhr.status);
    }
  }
});

xhr.send();
```

[Back to top](#asynchronous-javascript)

### The XMlHttpRequest Object

Down below is a list of the different properties, methods and event related to the `XMLHttpRequest`.

#### Properties

- **readyState**

Represents the state of the request. It can have values from 0 to 4, indicating different states of the request lifecycle.

    - 0: UNSENT - Request not initialized
    - 1: OPENED - Connection established
    - 2: HEADERS_RECEIVED - Headers received
    - 3: LOADING - Downloading response text
    - 4: DONE - Request completed

- **responseText**

Returns the response as a string. This is the data that has been fetched. In order to convert this string to the underlying data structure _(object, array or whatever it is)_ you need to use the `JSON.parse` method.

- **status**

Returns the HTTP status code of the response _(e.g., 200 for a successful request)_.

- **statusText**

Returns the HTTP status text of the response _(e.g., "OK" for a successful request)_.

[Back to top](#asynchronous-javascript)

#### Methods

- **open( _method, url, async, user, password_ )**

Initializes a request.

`method`: The HTTP method _(e.g., "GET", "POST")_.

`url`: The URL of the resource.

`async`: Whether the request should be asynchronous _(true)_ or synchronous _(false)_.

`user` and `password`: Optional parameters for authentication.

- **send( _data_ )**:

Sends the request.

`data`: Optional data to send with a POST request.

- **setRequestHeader( _header, value_ )**:

Sets a request header. This method must be called after open() and before send().

#### Events

- **readystatechange**

An event that fires whenever the `readyState` property changes. When the `readyState` changes to the value "4", that means that the request is complete.

[Back to top](#asynchronous-javascript)

### Promises

A Promise is an object that represents the eventual completion or failure of an asynchronous operation. It is a way to handle asynchronous code in a more organized and readable manner. A Promise can be in one of three states:

1. **Pending:**

The initial state when a Promise is created.

2. **Fulfilled _( Resolved )_:**

The state when the asynchronous operation is successfully completed, and the Promise has a resulting value.

3. **Rejected:**

The state when the asynchronous operation encounters an error or fails, and the Promise has a reason for the failure.

[Back to top](#asynchronous-javascript)

### Creating a Promise

You can create a Promise using the Promise constructor, which takes a function as its argument. This function, often called the "executor," takes two argument: resolve and reject. These are functions provided by the Promise implementation.

```js
import cars from "./cars.js";

const customPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = cars;

    resolve(data);

    reject(new Error("Something went wrong"));
  }, 2000);
});
```

[Back to top](#asynchronous-javascript)

### Using the results of a Promise

Once you have a Promise, you can use the `.then()` and .`catch()` methods to handle the successful and unsuccessful outcomes, respectively.

```js
customPromise
  .then((data) => {
    console.log("Success:", data);
  })
  .then(() => {})
  .then(() => {})
  .catch((error) => {
    console.error("Error:", error);
  });
```

You could chain multiple `.then()` calls to create a sequence of asynchronous operations. This chaining helps avoid "callback hell" and makes asynchronous code more readable and maintainable.

Promises are a fundamental part of modern JavaScript, and they provide a more structured way to handle asynchronous code compared to traditional callback patterns.

[Back to top](#asynchronous-javascript)

### Fetch API - Promise-based

`fetch` is a modern web API in JavaScript designed for making network requests (HTTP requests) from a web browser. It provides a cleaner and more powerful alternative to the older XMLHttpRequest for handling asynchronous operations.

#### Breakdown of fetch

- **Returns a promise**: it returns a `Promise` and this promise resolves to a `Response` object representing the completion or failure of the request.

- **Promise-Based Asynchronous Pettern**: `fetch` uses ths pattern and allows you to use `.then()` and `.catch()` methods for handling the success and failure of the asynchronous operation.

- **No Callback Hell**: unlike the traditional callback pattern, `fetch` helps avoid "callback hell" by allowing you to chain multiple `.then()` calls, creating a more readable and maintainable code structure.

- **Simplified Syntax**: the syntax of `fetch` is more straightforward and cleaner compared to `XMLHttpRequest`. It uses a simple and consistent API, making it easier to work with.

- **Flexibility with Options Object**: the `fetch` function takes a URL as its first parameter and an optional options object as its second parameter. This `options` object allows you to configure various aspects of the request, such as method, headers, and more.

- **Response Object**: the `Response` object returned by `fetch` represents the response to the request. It provides various properties and methods for inspecting and manipulating the response, such as checking the status code, reading the response body, and handling different data formats.

- **Modern Replacement for `XMLHttpRequest`**: `fetch` is considered a modern replacement for the older XMLHttpRequest due to its simplicity, consistency, and integration with Promises.

- **`async/await` Compatibility**: `fetch` works seamlessly with async/await, allowing you to write asynchronous code in a more synchronous style, making it even more readable.

In summary, fetch is a versatile and efficient API for making HTTP requests in JavaScript. Its Promise-based design simplifies asynchronous code, making it a preferred choice for handling network requests in modern web development.

[Back to top](#asynchronous-javascript)

#### Syntax of fetch

```js
fetch( url, options?)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error))

// or

async function fetchSomething(){
  try {
    const response = await fetch( url, options? );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

The `url` is the URL of the resource you want to fetch. `options` is an optional object that contains settings for the request, such as headers, method and body etc.

The `fetch` returns a Promise that resolves to the `Response` to that request, whether it is successful or not.

[Back to top](#asynchronous-javascript)

#### Common options

- **method**: the HTTP method for the request _( "GET", "POST", "PUT", "DELETE" )_. `GET` is the default value on this property.

  - `GET` is used for fetching resources
  - `POST` is used for creating new resources
  - `PUT` is used for updating existing resources
  - `DELETE` is used to remove resources

```js
fetch("https://api.example.com/data", {
  method: "POST",
});
```

- **headers**: an object containing any headers you want to include in your request. The most common header is the `Content/Type` which specifies the media type of the resource. For example, when sending JSON data in a `POST` request, you would set this property to `application/json`.

```js
fetch("https://api.example.com/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
});
```

- **body**: data to be sent in a request, usually a `POST` or `PUT` request. It is most of the times a JSON string but can have other forms as well.

[Back to top](#asynchronous-javascript)

#### Response Object

The `Response` object represents the response to a request. It has various properties and methods, here is a few of them.

- **ok**: a boolean indicating whether the request was successful _( status code in the range 200-299 )_ or not.

- **status**: the HTTP status code of the response.

- **statusText**: the HTTP status text of the response.

- **headers**: an object representing the headers of the response.

- **json()**: a method that returns a Promise that resolves to the result of parsing the response body as JSON.

[Back to top](#asynchronous-javascript)

## API - Application Programming Interface

An Application Programming Interface (API) is a set of rules and protocols that allows different software applications to communicate with each other. It defines the methods and data formats that applications can use to request and exchange information. APIs are used to enable the integration of different software systems, allowing them to work together and share data seamlessly.

In the context of JavaScript, APIs are commonly used to interact with web services or external resources.

[Back to top](#asynchronous-javascript)

### Endpoints

APIs expose specific endpoints _( URLs )_ that correspond to different functionalities or data. These endpoints are like addresses you can visit to perform specific actions or retrieve specific information.

[Back to top](#asynchronous-javascript)

### Request and Response

When you make a request to an API endpoint, you send a request with specific parameters _( such as query parameters or data in the request body )_. The API processes the request and sends back a response with the requested data or the result of the action.

[Back to top](#asynchronous-javascript)

### Data Formats

APIs often use standard data formats for the exchange of information. JSON _( JavaScript Object Notation )_ is a common format for structuring data in API responses.

[Back to top](#asynchronous-javascript)

## JSONPlaceholder API - Free fake API for testing and prototyping

This is a free fake API that you can use in your application for testing and prototyping your application. It contains different resources that have some relations to each other.

[{ JSON } Placeholder](https://jsonplaceholder.typicode.com/)

Here is the [Guide](https://jsonplaceholder.typicode.com/guide/) to json placeholder.

[Back to top](#asynchronous-javascript)
