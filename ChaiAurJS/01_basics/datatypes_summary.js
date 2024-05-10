// helpful in interview

// Primitives

// Symbol => to make unique somehting

// 7 types ( call by refernce ): String , Number , Boolean , null , undefined , Symbol , BingInt

const score = 100;

const scoreValue = 100.098;

const isLoggedIn = true;

const outSidetemp = null;

let userEmail;

const id = Symbol("123");

// used to specify nuiqueness

const bigNumber = 345365476567455745674324342342542253n;
// console.log(bigNumber);

const anotherId = Symbol("234");

// console.log(id == anotherId);

// Reference Type (Non Primitive )

//javascript mastery => Objects and Browser

//

// Arrays , Object , Functions

//arrays is reference type in javascript

// const heroes = ["shaktimaan" , "little krishna" , "aagraaj" , "doga"]
// console.log(heroes);

// heroes[0] = "Iron man"

// console.log(heroes);

//object whatebery is in curly barces is an object

// let myObj = {
//   name: "Rajeev",
//   age: 22,
//   address: "Allahabad",
// };

// console.log(myObj);

//function

const myfunction = function () {
  console.log("Hello World");
};

//a lot of question asked in interview from "typeof " see

// console.log(typeof outSidetemp);

// console.log(typeof null);

// console.log(typeof myfunction);

//link to study
// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack( Primitives ) and heap(Non - Primitives )
// stack copy of variable
// heap (we get reference of a variable if we change something originoanl will change)

let myYoutubeName = "rajeevranjan";

let anotherName = myYoutubeName;

anotherName = "yadavrajeev";

// console.log(anotherName);
// console.log(myYoutubeName);

let userOne = {
  name: "rajeev ranjan",
  age: 22,
  email: "user@gmail.com",
};

let userTwo = userOne

userTwo.email = "yadav1@gmail.com"

// console.log(userOne);

console.log(userOne.email);
console.log(userTwo.email);
