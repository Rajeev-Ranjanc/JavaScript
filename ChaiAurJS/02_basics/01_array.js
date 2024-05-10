// "Array"

const arr = [0,1,2,3,4,5];

const myheroes = ["Shaktimaan" , "Iron Man"];

const myarr = new Array(0,1,2,3,4,5);

// console.log(arr[0]);

//Array methods

arr.push(6);

arr.push(7);

// console.log(arr);

arr.pop();

// console.log(arr);

arr.unshift(99);

arr.shift();

// console.log(arr);

// console.log(arr.includes(9));
// console.log(arr.indexOf(3));


const newArr = arr.join();

// console.log(arr);

// console.log(newArr);

// console.log(typeof newArr);


// slice & splice

console.log("A ",myarr);

const myn1 = myarr.slice(1,3);

console.log(myn1);

console.log("B ",myarr);

const myn2 = myarr.splice(1,3);

console.log(myn2);

console.log("C ",myarr);

console.log(myn2);

// slice gives the array eleements from given string excluding last index(0 , 3) here 3 will exclude
// & splice extracts the element from the array and that element not present in the origioanl array after 
// performing splice operation