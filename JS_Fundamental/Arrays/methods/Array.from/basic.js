
const fruits = ["apple", "banana", "orange"];
const freshFruits = Array.from(fruits); // Creates a new shallow copy (copy only the first level of array)

console.log(freshFruits); //[ 'apple', 'banana', 'orange' ]
console.log(fruits === freshFruits); // False

