//Dates

let myDates = new Date();

// console.log(myDates);

// console.log(myDates.toString());

// console.log(myDates.toDateString());

// console.log(myDates.toLocaleDateString());

//interview type of date
// console.log(typeof myDates);

// console.log(myDates.toISOString());

// let myCreatedDate = new Date(2023 , 0 , 23 , 5, 3);

// let myCreatedDate = new Date("2024-01-14");

let myCreatedDate = new Date("01-14-2024");


// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());


//inteerview comman question
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();

// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday :"long"
    // timeZone:''
})