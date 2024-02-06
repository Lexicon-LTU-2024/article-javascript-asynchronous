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

[Back to top](#asynchronous-javascript)

### Creating a Promise

[Back to top](#asynchronous-javascript)

### Using the results of a Promise

[Back to top](#asynchronous-javascript)

### Fetch API - Promise-based

#### Breakdown of fetch

[Back to top](#asynchronous-javascript)

#### Syntax of fetch

[Back to top](#asynchronous-javascript)

#### Common options

[Back to top](#asynchronous-javascript)

#### Response Object

[Back to top](#asynchronous-javascript)

## API - Application Programming Interface

[Back to top](#asynchronous-javascript)

### Endpoints

[Back to top](#asynchronous-javascript)

### Request and Response

[Back to top](#asynchronous-javascript)

### Data Formats

[Back to top](#asynchronous-javascript)

## JSONPlaceholder API - Free fake API for testing and prototyping

[Back to top](#asynchronous-javascript)
