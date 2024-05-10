//arrow function scope -> global

//most frequently used function in javascript

//1. Syntax
const Hello = () => {
    console.log("hello from arrow function")
}
Hello();

const addv2 = (a, b) => {
    return a + b;
}
console.log(addv2(5, 4));

///oneliner arrow function
const add = (a, b) => a * b;

console.log(add(3, 8));

// 2. 'arguments' keyword
//     arguments keyword are not avaliable in the arrow function we can
//     do this same thing by spread operator

function numbersb(...nums) {
    console.log(nums);
}

numbersb(1, 2, 3, 4, 5);

// 3. Hoisting
//calling a function before its definition is known as the hoisting and we 
//can do this in 
sayGood();

function sayGood() {
    console.log("Good Morning");
}


// 4. This keyword
const Person = {
    fname: "Rajeev",
    lname: "Ranjan",
    age: 22,
    homwtown: "Bihar"
}
console.log(Person)


//object
const obj = {
    value : 20,
    myfunction : function(){
        console.log(this)
    }
}

obj.myfunction();


// function sayHello() {
//     console.log("Hello")
// }

// function nm() {
//     console.log(arguments);
// }
// nm(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// sayHello();

