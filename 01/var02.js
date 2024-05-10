//function accepting more than declred variables
function addNumbers() {
    let ans = 0;
    for (let i = 0; i < arguments.length; i++) {
        ans += arguments[i];
    }
    return ans;
}

let sum = addNumbers(1, 2, 3, 4, 5);

console.log(sum);

//second way to do this is by spread operator
function addNumbers2(...numbers) {
    let ans = 0;
    for (let index = 0; index < numbers.length; index++) {
        ans += numbers[index];
    }
    return ans;
}

let ans = addNumbers2(100, 200, 300, 400, 500);
console.log(ans);