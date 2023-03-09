const fruits = ["apple", "banana", "orange"];

const nuts = {
  name: "cashew",
  color: "white"
}

console.log(Array.isArray(fruits)); // true
console.log(Array.isArray(nuts)); // false
console.log(Array.isArray(Array.prototype)); //true 
//Array.prototype is an array of object : [constructor: f, concat: f, copyWithin: f, fill: f, find: f, ...]


