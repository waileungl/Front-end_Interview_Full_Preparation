/*
* Definition

A closure is a combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

*/

// Example
function outerFunc(outerVar) {
  return function innerFunc(innerVar) {
    console.log(outerVar);
    console.log(innerVar);
  };
}

const innerFn = outerFunc("outer");
innerFn("inner");

//* Output
/* 
    outer
    inner
*/

//* Practical application
//? Closures are used when using ajax callbacks to access outer scoped variables
const axios = require('axios/dist/node/axios.cjs');

let response = null;
let error = null;

axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    //access to outside variable
    response = response.data;
  })
  .catch((error) => {
    error = error.message;
  });
