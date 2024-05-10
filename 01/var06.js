//Arrays in javascript
const Students=["Rajeev","Rahul","Manish","Himanshu","Ravi","Payal"];
// console.log(Students)

// console.log(Students.reverse())
Students.push("Alexa");
// Students.push("Alexa");
// Students.pop();
Students.push(12);
// Students.push(122);


// console.log(Students)

//for each loop in javascript
function printArray(n){
    console.log(n);
}

// Students.forEach(printArray)


// .map function in javascript
///map function return a new array while for each dosen't do it
const NumberArray = [1,2,3,4,5,6,7,8,9];

function NumberAr(n){
   return 2*n;

}

let newarr = NumberArray.map(NumberAr);
console.log(newarr)

NumberArray


