//every() - returns a boolean, to test whether all elements in the array pass the test implemented by function provided(as argument)

//Note： For an empty array, result is always true

//Note: Iteration stops right away after a falsy expression return ( with or w/o array modification )

const fruits = ["apple", "banana", "durian"]
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

console.log(fruits.every(isFruitString, toCheck)) //final output: true