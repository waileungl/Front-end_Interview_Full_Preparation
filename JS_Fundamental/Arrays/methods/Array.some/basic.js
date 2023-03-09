/*
This method tests the array with a function passed as a parameter. 
It will return true if at least one element matches the test and false 
for the opposite.

*/

const fruits = ["apple", 1, { name: "will" }];
console.log(fruits.some((f) => typeof f === "string")); //true
console.log(fruits.some((f) => typeof f === "number")); //true
console.log(fruits.some((f) => typeof f === "object")); //true
