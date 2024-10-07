//Functions
//functions are used to run snippets of code
//functions are containers that hold blocks of code that we can call on at all times
//it is declared by the function variable
//for a function to work it needs to be invoked
function greeting() {
  console.log("welcome to our App");
}
//calling
greeting();
greeting();

function speak() {
  console.log("hello class");
}
speak();

//functions can take parameters
function specialGreeting(name = "user") {
  console.log(`${name}, welcome to our app`);
}
specialGreeting("Timi");
specialGreeting("Goodness");
//default parameters
specialGreeting();

//  write a function that logs the addition of three numbers
function addTwoNums(num1, num2, num3) {
  const result = num1 + num2 + num3;
  console.log(result);
}
addTwoNums(9, 5, 7);
addTwoNums(-10, 7, 3);

// checks if a number is either positive negative or zerp

function checkNum(num) {
  if (num > 0) {
    console.log(`$[num] is Positive`);
  } else if (num < 0) {
    console.log(`$[num] is Negative`);
  } else {
    console.log("This is Zero");
  }
}

checkNum(89);
checkNum(-54);
checkNum(0);

// Function expression
myFunction1();
function myFunction1() {
  console.log("This is func declaration");
}

const myFunction2 = function (parameter1, parameter2) {
  console.log("This is a function expression");
};
myFunction2();

// hoisting - moves all of the func declaration up the script

// return key word

// write a function that calculates the product of two nums

const productOfTwoNums = function (num1, num2) {
  return num1 * num2;
};

const result = productOfTwoNums(9, 2) + 2;
console.log(result);

// write a function that converts km to meter
// 7KG - 7 * 1000

const kmToMeters = function (value) {
  const meter = value * 1000;
  return `${value}km is equal to ${meter}m`;
  // anytin that comes after a return of code will be inaccesible
};

console.log(kmToMeters(6));
console.log(kmToMeters(100));
console.log(kmToMeters(5.5));
console.log(kmToMeters(11));

const calcAverage = function (n1, n2, n3) {
  const average = (n1 + n2 + n3) / 3;
  return average;
};
console.log(calcAverage(9, 7, 6));

const userAge = function (currentyear, yob) {
  const calcAge = currentyear - yob;
  return calcAge;
};
console.log(userAge(2024, 2005));

const numbers = function (num) {
  if (num % 2 === 0) {
    return "This is an even Number";
  } else {
    return "This is an odd Number";
  }
};

console.log(numbers(405));
console.log(numbers(4050));

let savings = 8900;

function checkWithdrawal(amount) {
  if (amount < savings) {
    savings -= amount;
    return `withdrawal of ${amount} is successful and my balance is ${savings}`;
  } else {
    return `Insufficient funds`;
  }
}

// console.log(checkWithdrawal(70000));
console.log(checkWithdrawal(6500));
console.log(checkWithdrawal(2000));

console.log(`my current saving is ${savings}`);

function deposit(amount) {
  savings += amount;
  return `Deposit of ${amount} is successful and my balance is ${savings}`;
}

console.log(deposit(200));
console.log(deposit(2000));

// build a simple atm machine
let usersPin = 1234;
let savings = 40000;

// write a function that checks the enteredPin

const checkPin = function (enteredPin) {
  if (enteredPin === usersPin) {
    return true;
  } else {
    return false;
  }
};

console.log(checkPin(2345));
console.log(checkPin(1234));

const withdraw = function (amount) {
  if (checkPin(1234)) {
    // withdrawal
    if (savings > amount) {
      savings -= amount;
      console.log(
        `The withdrawal of ${amount} is successful and balance is ${savings}`
      );
    } else {
      console.log("Insufficent funds");
    }
  } else {
    console.log("Incorrect pin try again");
  }
};

withdraw(2000);
withdraw(5000);

const deposit = function (amount) {
  if (checkPin(1234)) {
    savings += amount;
    console.log(`Deposit successful. your current balance is ${savings}`);
  } else {
    console.log("Incorrect Pin. Try again");
  }
};
deposit(9000);

const balance = function (amount) {
  if (checkPin(1234)) {
    console.log(`Your balance is ${savings}`);
  } else {
    console.log(`Incorrect Pin`);
  }
};
balance();

// write a function that checks number of attempt on the pin max attempt is 3

let attempt = 0;
let blocked = false;
// const checkCardAttempt = function () {
//     if (checkPin(1239)) {
//         console.log("perform transaction")
//     } else {
//         if (!blocked) {
//             attempt++;
//             console.log(`Incorrect Pin, ${3 - attempt} attempt left`);
//         }
//         if (attempt === 3) {
//             console.log("your card is blocked");
//             blocked = true
//         }
//     }
// };
// checkCardAttempt();
// checkCardAttempt();
// checkCardAttempt();
// checkCardAttempt();

const checkCardAttempt2 = function () {
  if (blocked) {
    console.log("Your Card is Blocked");
    return;
  }
  if (checkPin(3737)) {
    console.log("performa Transaction");
    attempt = 0;
  } else {
    attempt++;
    if (attempt === 3) {
      console.log("Your card is Blocked");
      blocked = true;
    } else {
      console.log(`Incorrect Pin, ${3 - attempt} attempts left`);
    }
  }
};
checkCardAttempt2();
checkCardAttempt2();
checkCardAttempt2();
checkCardAttempt2();







//arrow function

const myFunction = (p1, p2) => {};

//write an arrow function thatchecks if password is long enough
//min password length is 7

const passwordCheck = (value) => {
  if (value.length >= 7) {
    console.log("password is long enough");
  } else {
    console.log("short password");
  }
};
passwordCheck("password");
//can be written in short with ternary operator as
const passwordCheck2 = (value) =>
  value.length >= 7 ? "password is long enough" : "short password";
console.log(passwordCheck2("gram"));

// const calcAverage = (num1 , num2) => {
//     return (num1 + num2) / 2
// }
// console.log(calcAverage(8,5));

// in case of writing just one of code it can be shorten as
const calcAverage = (num1, num2) => (num1 + num2) / 2;
console.log(calcAverage(8, 5));

const kmToMeter = (value) => `${value} km is equal to ${value * 1000} meters`;
console.log(kmToMeter(89));

//scoping
//there are two types of scoping and they are global scoping and local scoping
//global scoped variable are accessible everywhere because they arent in a calling bracket (block of code)
const globalVar = "EXAMPLE";
const num = 95;

//locally based scope variable can only be used inside a block of code
const example = () => {
  console.log(globalVar);

  const myValue = 90;
  console.log(myValue);
};

//write the function that takes in a string as a parameter and returns is in all caps
const toAllCap = (word) => word.toUpperCase();
console.log(toAllCap("parameter"));

//write a javascript function that accepts a string as a parameter and converts the first letter of the word to uppercase
const firstLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1);
console.log(firstLetter("parameter"));

//write a js function that accepts an argument and returns the data type
const dataType = (value) => typeof value;
console.log(dataType(90));

//write a function that returns whether a number is even or odd
const evenOrOdd = (value) =>
  value % 2 === 0 ? "this is an even number" : "this is an odd number";
console.log(evenOrOdd(9));

//write a function named minutestoHours that receives a number of minutes as a parameter and returns a number representing the same amount of time but in hours
const minutestoHours = (value) => value / 60;
console.log(minutestoHours(1240));

//write a function that receives two strings as parameters and returns the longest of the two strings

const longestString = (word1, word2) =>
  word1.length > word2.length ? word1 : word2;
console.log(longestString("pollination grain", "agriculture"));

//write a function named concat3 that receives 3 strings as parameter
//(string1, string2, string3) and an additional string named separator
//the function should concatenate the three strings
//using the provided separator and return the result

const concat3 = (string1, string2, string3, separator) =>
  string1 + separator + string2 + separator + string3;
console.log(concat3("hello", "world", "as", "-"));

//write a function that returns the square of a number
const squareOfANumber = (value) => value ** 2
console.log(squareOfANumber(9));

//write a function called checkloaneligibility which receives an amount as a parameter
//and returns whether a user is eligible or not based on the following conditions
//the loan amount can not be more than twice the amount of savings
//let the savings be 60000 naira
//45000, 200000, 70000
let savings = 60000
const checkLoanEligibility = (amount) => amount > savings * 2 ? "Ineligible" : "Eligible"
console.log(checkLoanEligibility(45000));
console.log(checkLoanEligibility(200000));
console.log(checkLoanEligibility(70000));

//write a function that logs hello world to the console
const logs = () => console.log("hello world");
logs()
//write a function that returns 34
const loggs = () => 34
console.log(loggs());
//write a function that returns the number of vowels in a string
const countNumberOfVowels = (str) => {
  let vowels = "aeiou";
  let numOfVowels = 0;
  const lowerCaseStr = str.toLowerCase();
  // loop over the lowerCaseStr
  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (vowels.includes(lowerCaseStr[i])) {
      numOfVowels++;
    }
  }
  return numOfVowels;
};

console.log(countNumberOfVowels("hello world"));