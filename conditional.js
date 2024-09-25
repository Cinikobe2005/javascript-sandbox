// CONDITIONAL STATEMENT
// CONTROL

const myBalance = 3000;
const transaction = 2000;

// if statement
// if(condition) {
// lines of code
// }
if (true) {
    console.log("Yes");
}

if (false) {
  console.log("Yes");
}

if (myBalance > transaction) {
  console.log("Transaction successful");
}

// 18+
const age = 25;
if (age >= 18) {
    console.log("You are eligible to vote");
}
// if the lenght of the password is 7 and above and has @ - good password

const password = "e67ehdhud@";

if (password.length >= 7 && password.includes("@")) {
    console.log("Good password");
}

// IF ELSE STATEMENT
// if(condition){
// first action
// }else{
// second actiom
// }

const age2 = 15;
// eligible 18+ or not

if(age2 >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are ineligible to vote, you must be 18+");
}

// youth/underage 0-40 or aged 41+

const age3 = 33;
if(age3 >= 0 && age3 <= 40) {
    console.log("You are in the youth/underage category");
} else {
    console.log("You are in the aged category");
}
const num = 90;
if(num % 2 === 0 ) {
    console.log("even number");
} else {
    console.log("odd number");
}

const savings = 2000;
const transactionAmount = 30000;

if(savings >= transactionAmount) {
    console.log("transaction Successfully");
} else {
    console.log("insufficent Fund");
}

// multiple conditions else if statement

// positive > 0 negative < 0 and zero

let myNum = 98

if (myNum > 0) {
    console.log("This is a positive number");
} else if (myNum < 0) {
    console.log("This is a Negative Number");
} else {
    console.log("This is zero")
}

// underage 0 - 12 teens 13 - 19 adults 20 aged 41
const age4 = -24;

if (age4 >= 0 && age4 <= 12) {
    console.log("underage");
} else if (age4 >= 13 && age4 <= 19){
    console.log("teens");
} else if (age4 >=20 && age4 <= 40) {
    console.log("Adult");
} else if (age4 >= 41) {
    console.log("Aged");
} else {
    console.log("Invalid age, try again");
}




// Switch statement
// they are use to perform action under different conditions

let grade = "c";

switch (grade) {
  case "A":
  case "a":
    console.log("Excellent");
    break;
  case "B":
  case "b":
    console.log("Very Good");
    break;
  case "C":
  case "c":
    console.log("Good");
    break;
  case "D":
  case "d":
    console.log("Fair");
    break;
  case "E":
  case "e":
    console.log("Poor");
    break;
  case "F":
  case "f":
    console.log("Failed");
    break;
  default:
    console.log("ivalid grade");
}