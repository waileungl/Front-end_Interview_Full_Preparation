var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

function sortByValue() {
  return items.sort((a, b) => a.value - b.value)
};

function sortByName() {
  return items.sort((a, b) => {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  })
};


const result = sortByName()
const result2 = sortByValue()

console.log(result)
console.log(result2)
//output of results2:
/*[
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'Zeros', value: 37 },
  { name: 'And', value: 45 }
]*/