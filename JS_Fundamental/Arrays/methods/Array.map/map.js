const fruits = ["apple", "banana", "orange"];

// Example 1
const juices = fruits.map((fruit, index) => {
  return (fruit + " juice in cup " + index)
})

console.log(juices);
//output:
// [
//   'apple juice in cup 0',
//   'banana juice in cup 1',
//   'orange juice in cup 2'
// ]


// Example 2

