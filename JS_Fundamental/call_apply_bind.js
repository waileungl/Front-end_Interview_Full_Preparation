function person(school, address){
    return `${this.name} is ${this.age} old, ${this.name ==="Jane"? "She" : "He"} is studying at ${school} and living at ${address}`
};

const anotherPerson = {
    name: "Jane",
    age: 25
};

//Allow user to access to 'this' within the given function's lexical scope
const JaneCall = person.call(anotherPerson, "Taylor's University", "Newark");
console.log(JaneCall)

//Similar to call, but with different syntax, must passing an array as argument
const JaneApply = person.apply(anotherPerson, ["Taylor's University", "Newark"]);
console.log(JaneApply)

//Similar to call, but the whole function can be stored in a variable and provoked as a function
const JaneBind = person.bind(anotherPerson, "Taylor's University", "Newark");
console.log(JaneBind())


