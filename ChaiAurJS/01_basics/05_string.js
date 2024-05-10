const name = "rajeev";

const repoCount = 23;

// console.log(name + repoCount);

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Rajeev");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4);
// console.log(newString);

const anotherString = gameName.slice(-8,4)
// console.log(anotherString);


const otherString = "     Rajeev    ";
console.log(otherString);
console.log(otherString.trim());


const url = "https://rajeevranjan.com%20yadav";

console.log(url.replace('%20' , '-'));

console.log(url.includes("rajeev"));

const para = "hello-my-name-is-rajeev-ranjan";

console.log(para.split('-'))