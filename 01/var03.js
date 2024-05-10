//getting a number input while guess is not correct
/*
simply means keep getting input until user does not input the correct 
*/
let option = 0;
let nm = 40;
do {

    let guss = parseInt(prompt("Guess a no:"));

    if (guss == nm) {
        alert("winner");
        break;
    } 
    

} while (option != 0 );