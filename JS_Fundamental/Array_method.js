// Array.length
const fruits = ["apple", "banana", "durian"] // length = 3
fruits.length = 5;
console.log(fruits) //[ 'apple', 'banana', 'durian', <2 empty items> ] ; length = 5
// *Note: The extra items added are non-iterable empty slots

//forEach()
fruits.forEach(item => {
    console.log(item)
})

//concat()
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(arr2.concat(arr1)) //[3, 4, 1, 2]

//every() - returns a boolean, to test whether all elements in the array pass the test implemented by function provided(as argument)
//Note： For an empty array, result is always true
//Note: Iteration stops right away after a falsy expression return ( with or w/o array modification )
const fruits2 = ["apple", "banana", "durian"]
const isFruitString = (fruit, index, arr) => {
    console.log(toCheck.fruit) // dragonfruit x 3
    console.log(index) // 0 1 2
    console.log(arr) // [ 'apple', 'banana', 'durian' ] x 3
    console.log(fruit) //apple banana durian
    return typeof fruit === 'string'
}
const toCheck = {
    fruit: "dragonfruit"
}

console.log(fruits2.every(isFruitString, toCheck)) //final output: true
