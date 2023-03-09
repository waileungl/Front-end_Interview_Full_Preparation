var inputArray = [1, 2, [3, 4, [5, [6, [7, 8]]]], 9];

//* Method 1
let result = inputArray.flat(2);
console.log(result); // [ 1, 2, 3, 4, 5, [ 6, [ 7, 8 ] ], 9 ]

//* Method 2 | Recursion
let result2 = [];
function flattenArray(inputArray) {
  inputArray.forEach((element) => {
    if (Array.isArray(element)) {
      flattenArray(element);
    } else {
      result2.push(element);
    }
  });
  return result2;
}

console.log(flattenArray(inputArray));  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
