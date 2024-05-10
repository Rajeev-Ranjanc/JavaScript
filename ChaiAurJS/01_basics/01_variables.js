const accountId = 14453;

let accountEmail = "rajeev@gmail.com";

var accountPassword = "12345";

accountCity = "Allahabad";

let accountState;

// accountId = 2;  //not Allowed

/*

    preferred not to use var because to use issues in block scope and functional scope

*/

accountEmail = "hc@gmail.com";
accountPassword = "212121";
accountCity = "Banglore";


console.log(accountId);

console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);