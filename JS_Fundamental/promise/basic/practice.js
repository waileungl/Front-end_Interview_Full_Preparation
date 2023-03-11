//Practice
let toggle = false

let test = new Promise((res, err) => {
    setTimeout(() => { toggle ? res('true') : err('false') }, 1000)
})

test.then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log("End!")) 