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


console.log(deepClone(obj))