// NUMBER 
const myAge = 87;

// number methods toFixed
const num = 9.25678
console.log(num.toFixed(0));
console.log(num.toFixed(1));
console.log(num.toFixed(3));
// + - * /
const x = 7;
const y = 7;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// ** raised to the power (exponent)
console.log(3 ** 2);
// modulus % (return the remainder of a division)
console.log(3 % 2);
console.log(6 % 2);
console.log(100 % 10);

// order of operation (BODMAS)
// PEMDAS
// 4 + 2 * 3 ** 2;

let likes = 0;
// likes = likes + 1;
// likes = likes + 1;
// likes = likes + 1;
// likes = likes - 1;
likes++;
likes++;
likes++;
likes--;
console.log("Likes ", likes);

// likes++;
// likes--;

let savings = 5000;
// savings = savings + 3000;
savings += 3000
// savings = savings -7000;
savings -= 7000;

console.log(savings);
savings = savings + 10000;


console.log(savings);




const fullName = "Peter Pan";
const accountNumber = 56789054;
let myBalance = 4000;
// jan transaction history
// credited 10000, debited 200 as sms chargers, recieved gift 3000, gift someone 3000
myBalance += 10000;
myBalance -= 200;
myBalance += 3000;
myBalance -= 1200;
console.log("My Balance is ", myBalance);
// Peter Pan with accountNumber has a balance of myBalance 
const accountStatement = `${fullName} with account number ${accountNumber} has a balance of ${myBalance.toFixed(2)}`;

console.log(accountStatement)


// NaN - not a number
console.log("hello" * 6);