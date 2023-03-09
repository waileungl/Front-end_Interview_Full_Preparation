/* Definition
  creates a new array with all elements that pass the test implemented by the provided function.
 */

/* Syntax
  array.filter(callback, <opt>thisArg);
  callback (element, <opt>index, <opt>array);
*/

const fruits = ["apple", "banana", "orange", "grape", "mango"];

const fruitsLengthLessThan6 = (fruit, index, array) => {

  fruits.push("watermelon") // will NOT be affected
  fruits.pop() // will NOT be affected
  fruits[1] = "nut" // will be affected

  return fruit.length < 6
}

const newFruits = fruits.filter(fruitsLengthLessThan6);

console.log(newFruits); // [ 'apple', 'nut', 'grape', 'mango' ]

console.log(fruits); // [ 'apple', 'nut', 'orange', 'grape', 'mango' ]

