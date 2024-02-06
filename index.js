// ########## XMLHttpRequest

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "./cars.json", true);

// xhr.addEventListener("readystatechange", () => {
//   if (xhr.readyState === 4) {
//     // The request is complete, and the response is available
//     if (xhr.status === 200) {
//       // Successful request
//       console.log(xhr.responseText);
//     } else {
//       // Request failed
//       console.error("Error:", xhr.status);
//     }
//   }
// });

// xhr.send();

// ########## Creating a promise ##########
import cars from "./cars.js";

const customPromise = new Promise((resolve, reject) => {
  // Asynchronous operation, e.g., fetching data from a server
  setTimeout(() => {
    const data = cars;
    // Resolve the Promise with the result
    resolve(data);
    // Or reject the Promise with an error
    // reject(new Error("Something went wrong!"));
  }, 2000);
});

customPromise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
