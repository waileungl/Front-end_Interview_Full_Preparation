// Create an object with empty array

console.log([].fill.call({ length: 4 }, "nuts"));
// { '0': 'nuts', '1': 'nuts', '2': 'nuts', '3': 'nuts', length: 4 }
console.log([].fill.call({ width: 4 }, "nuts"));
// { width: 4 }

//we use .call() to call the .fill() method of an empty array with a specific this value. In this case, the this value is an object with a single property length set to 4. This tells the .fill() method to fill an array with a length of 4 with the value "nuts".