/**** Definition ****
    Fills the array with specified value
 ******************/

/**** Syntax *****
    array.fill(value, start, end);
******************/

const fruits = ["apple", "banana", "orange", "grape", "mango"];

// Override #1
console.log(fruits.fill("nuts", 1, 3)); // [ 'apple', 'nuts', 'nuts', 'grape', 'mango' ]

// Override #2
console.log(fruits.fill("nuts", 1))  // [ 'apple', 'nuts', 'nuts', 'nuts', 'nuts' ]

// Override #3
console.log(fruits.fill("nuts"))  // [ 'nuts', 'nuts', 'nuts', 'nuts', 'nuts' ]

const arr = Array(3).fill("1") // ["1","1","1"]

console.log(arr);

