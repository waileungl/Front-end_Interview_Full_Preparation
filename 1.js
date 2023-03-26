// string, number, null, undefined ...
// non-primitive
// array, object

// let obj = {x: 1, y: 2}
// let obj2 = obj //shallow copy deep copy
// obj2.x = 2
// console.log(obj)

// let str = "1"
// let str2 = str
// str2 = 2
// console.log(str)

// console.log(1 === "1")
// console.log(typeof (1+"2"))

// let a = 1 

// function x1 () {
//   // let a = 2
//   // console.log(a)
//   return function x3() {
//     console.log(a)
//   }
// }

// function x2 () {
//   let a = 3
//   // console.log(a)
// }

// x1()()
// x2()

// let a = 1
// x = function() {
//   // var a //hoisting
//   console.log(a)
//   var a = 2
//   console.log(a)
// }

// var: for and if wont be a block/scope
// let: for and if -> block

// for(var i=0; i<5; i++) {
//   console.log("imm",i)
//   setTimeout(()=>console.log("wait", i), 1000)
// }

// for(let i = 0; i<5; i++) {
//   let i = 0
//   console.log("imm",i)
//   setTimeout(()=>console.log("wait", i), 1000)
// }

// fn return another fn, returned fn has the parent's scope
// let a = 2
// function x() {
//   let a = 3
//   return function() {
//     console.log(a)
//   }
// }

// x()()

// function fn(x) {
//   const a = function(y) {
//     return function(z) {
//       return x*y*z
//     }
//   }
//   return a
// }
            // x  y  z
// console.log(fn(1)(2)(3) === 1*2*3)

// function x() {
//   let a = 1;
//   return a
// }

// function x() {
//   return 2
// }
// console.log(x())

// declaration hoisting
// x()
// function x() {
//   console.log(1)
// }

// const x = function() {
//   console.log(1)
// }
// this.a = 1
// const x = () => {
//   // console.log(1, this)
//   console.log(1, arguments)
// }

// function y() {
//   // this.a = 2
//   // console.log(2, this)
//   console.log(2, arguments)
//   console.log(arguments["1"])
//   console.log([...arguments])
// }

// x('a','b','c')
// y('a','b','c')

// const fn = function() {
//   const arr = [...arguments]
//   let res = 1
//   for(let i=0; i<arr.length; i++) {
//     res = res* arr[i]
//   }
//   return res
// }

// console.log(fn(1, 2, 3, 4, 6, 7, 8, 9))

// const fn = (...arg) => {
//   let res = 1
//   for(let i=0; i<arg.length; i++) {
//     res = res* arg[i]
//   }
//   return res
// }

const fn2 = arr => (arr.reduce((prev, cur) => prev*cur))

// console.log(fn2([1, 2, 3, 4, 5, 6]))

// let fn3 = () => {return {x: 1, y: 2}}
// // fn3 = () => {x: 1, y: 2} //undefined or error
// fn3 = () => ({x: 1, y: 2})
// console.log(fn3())

//immediately invoked function expressions
// arrow fn, fn declaration not work.
// const x = function(...arg) {
//   let res = 1
//   for(let i=0; i<arg.length; i++) {
//     res = res* arg[i]
//   }
//   console.log(res)
// } (2, 3, 4)
// // x(2,3,4)

// console.log(1=="1")
// console.log(1==="1")
// console.log(1+"1")
// console.log(3/2) // int: 3 / int: 2 => 1 XXX printed 1.5
// console.log(Math.floor(3/2))
// console.log(Math.ceil(3/2))

// console.log(!true)
// console.log(!!null)
// console.log(true && false)
// console.log(true && 1)
// console.log(false || 1)
// console.log(true || 1)
// console.log(undefined || 2)

// console.log(0 == false)
// console.log("" == false)
// console.log([] == true)
// console.log([] && true)
// console.log({} && true)


// call api
// let res = [] // null // [1,2,3]
// if(res && res.length) {
//   console.log(res[0], res[1])
// }
// res && res.length && console.log(res[0], res[1])

//! !! && ||

// 0, "", false, undefined, null, NaN
// {}, [] -> .length, _lodash
// console.log({} ? 1 : 2)

// console.log(!!Object.keys({})?.length)
// console.log(!!{})
// console.log(!!NaN)

// short hand
// let x = 0
// console.log(x?.a)
// console.log(x? x : x.a)
// console.log(x ?? "abc")

// const x = {a: 1, b: 2}
// let y = {
//   ...x,
//   c: 3,
//   b: 1
// }
// console.log("x", x)
// console.log("y", y)

// let z = x
// z.b = 100
// console.log("x", x)
// console.log("z", z)

// console.log([...[1,2,3,4],5])

// spread deep clone ? No
// const x = {
//   a: 1,
//   b: {
//     c: 2
//   }
// }
// const y = {...x}
// y.b.c = 3
// console.log(x)
// console.log(y)

// const y = {...x, b: {...x.b}}
// y.b.c = 3
// console.log(x)
// console.log(y)

// obj deep clone ?
// recursion









