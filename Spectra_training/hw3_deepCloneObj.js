const obj = {
    key1: [1,2,3,4,{
        key2:5,
        key3:[6,{
            key6:[10,11]
        }]
    }],
    key4:{
        key5:[7,8,9]
    },
    key7:12
}

//flatten
const arr = [1,2,3,[4,5,[6,[7]]]];


const flatten = (arr) => {
    let res = new Array();
    for(let i in arr){
        if(Array.isArray(arr[i])){
            res = [...res, ...flatten(arr[i])]
        } else{
            res.push(arr[i])
        }
    }
    return res
}

console.log(flatten(arr))
// console.log(res)


//deep clone Object

const newObj = {};

const cloneObj = (item) => {
    let newObj = {};
    for(let i in item){
        if(typeof item[i] === "Object"){
            newObj = cloneObj(item[i])
        }else{
            newObj[i] = obj[i]
        }
    }
    return newObj
}

// console.log(cloneObj(obj))
// console.log(newObj)






const deepClone = (obj) => {
    let res = Array.isArray(obj)? [] : {};
    for(let item in obj){
        if(typeof obj[item] === "object" && obj[item] !== null){
            res[item] = deepClone(obj[item])
        }else {
            res[item] = obj[item]
        }
    }
    return res
}


// console.log(deepClone(obj))