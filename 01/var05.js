// High Order Function and CallBacks
///cb : callbacks

function add(a,b,cb){
let result = a*b;
cb(result);
}

// function showresult(result){
//     console.log(result);
// }

// add(10,20 , showresult);
///this complete code be write as
add(10,29,val=>console.log(val))

//here we can also return a function from a function
function add(a,b,cb){
    let result = a+b;
    cb(result);
    return()=>console.log(result);
}

let resultFunction = add(1,22,()=>{})
resultFunction();

