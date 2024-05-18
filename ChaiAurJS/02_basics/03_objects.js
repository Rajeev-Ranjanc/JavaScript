//singleton only constructor se banate hain tabhi banta hai

// Object.create()

//-> this above method is way of creating singleton

// Objects literals

const mysym = Symbol("Mykey1");
// and if we want to use this symbol as the symbol in the objects then I need to write this in
// object like this [mysym]
//

const jsuser={

    name: "Rajeev",
    "fullName" : "Rajeev Ranjan Yadav",
    age : 23,
    Location : "Allhabad",
    email: "rajeevmnnit@gmail.com",
    isLoggedin : false,
    LastLoginDays : ["Monnday" , "Wedenesday"],

    [mysym] : "Mykey1",// syntax

}

// console.log(jsuser.email);

// console.log(jsuser["email"]);

// console.log(jsuser["fullName"]);

// console.log( typeof jsuser.mysym);

// its saying Mykey1 but of string type if we want to use this as symbol in 
//  then we need to write in objects in the [] 

// console.log(jsuser[mysym]);

//now here we can't access fullname by . mehtod although all the key which is not in the 
// double quote variable that also is saved in js in " " so we can also access them in [] 
// this way and when we define the key and values both in the " " then we can access them only one way 
// and that way is of by this big bracket []

//update the value

jsuser.name = "Yadav jee"

// console.log(jsuser["name"]);

//if you want to freeze this then
// Object.freeze(jsuser);

jsuser.name="Mahadev"

// console.log(jsuser);

// in js treat function as variable

jsuser.greetings = function(){
    console.log("Hello js user");
}


jsuser.greetingsTwo = function(){
    console.log(`Hello js user,${this.name}`);
}

console.log(jsuser.greetings());
console.log(jsuser.greetingsTwo());

