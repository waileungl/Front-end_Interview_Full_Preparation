//static method:

// 1. A class is a blueprint for creating objects. It defines the properties and methods that an object will have.

// 2. When you create an instance of a class, you're creating an object that has all the properties and methods defined by the class.

// 3. A static method is a method that is defined on the class itself, rather than on an instance of the class. This means that you can call the method without first creating an instance of the class.

// 4. Because static methods belong to the class, rather than an instance of the class, they can't access any instance-specific properties or methods.


class StaticClass {
    static myStaticMethod() {
        console.log("This is a static method.");
    }
}
const myInstance2 = new StaticClass();

StaticClass.myStaticMethod(); //This is a static method.


//prototype method:
// 1. A static method is a method that is defined on the class itself, while a prototype method is a method that is added to the prototype object of a constructor function.

// 2. Because a prototype method is added to the prototype object of a constructor function, it can be called on any instance of the constructor function.

// 3. Prototype methods have access to instance-specific properties and methods through the "this" keyword, while static methods do not.

// 4.To define a prototype method in JavaScript, you add it to the prototype object of a constructor function, like this:

function PrototypeClass() { }

PrototypeClass.prototype.myPrototypeMethod = function () {
    console.log("This is a prototype method.");
};

const myInstance = new PrototypeClass();
myInstance.myPrototypeMethod(); //This is a prototype method.
PrototypeClass.prototype.myPrototypeMethod(); //This is a prototype method.

//The differences:
// So, while both static and prototype methods are ways to add methods to a class in JavaScript, they have different use cases.

// Use a static method when you need a method that belongs to the class itself and doesn't depend on any instance-specific properties or methods.

// Use a prototype method when you need a method that can be called on any instance of a constructor function and has access to instance-specific properties and methods.