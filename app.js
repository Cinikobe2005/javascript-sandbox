// ARRAYS ARE COMPLEX DATA TYPE BECAUSE DEY CAN HOLD MORE THAN ON VALUE
// []

// const mixedArr = {9, "str", true, null, [90, false]};

const students = ["Goodness", "Aisha", "Adura"];

console.log(students);

// ARRAY PROPERTIES (length)
console.log(students.length);
// getting element in an array - position arrName[position]
console.log(students[0]);
// chamge element in an array
students[1] = "John Doe";
console.log(students[1]);

// Array methods
// adding and removing element from an array they are (push, pop, shift, and unshift)
// LIFO (last in, first out)
// push method is adding element to an array but at the end
// pop  method removes an element from an array but from the end

students.push("theresa");
students.push("timi");
students.pop();
students.pop();
console.log(students);
console.log(students.pop());

students.unshift("Adedayo");
students.unshift("Timi");
students.shift();

console.log(students);

// converting an array to a string and we have to methods which is (toString, join)
console.log(students.toString());
console.log(students.join(", "));

const onlineStudents = ["John", "peter", "paul"];
const weekdayeStudents = ["Ade", "Susan", "Joy"];
const allStudents = onlineStudents.concat(weekdayeStudents);
const addAllStudents = onlineStudents.concat(weekdayeStudents, ["Ruth, Tobi"]);
console.log(allStudents);
console.log(addAllStudents);

// includes
console.log(onlineStudents.includes("paul"));

// sort, reverse
const carsBrands = ["toyota", "lexus", "bmw", "audi", "tesla"]

// sort method arrange element in an array ins alphabetical order
console.log(carsBrands);
console.log(carsBrands.sort());
console.log(carsBrands.reverse());
// extract portions of an array slice(start, end(not included))
const friends = ["Ola", "Timi", "John", "Jane"];
console.log(friends.slice(0,2));
console.log(friends.slice(1));

// split 
let text = "Hello world is fun";
console.log(text.split(" "));
const text2 = "tadapal";
console.log(text2.split("a"));
console.log(text2.split("t"));

// hello olleh
const reverseStr = (str) => str.split("").reverse().join("");
console.log(reverseStr("hello"));

// higher order array methods (callback fucnctions, iterator methods)

// for of method allows us to iterate over an elements in an array and re

const fruits = ["Oranges", "Mangoes", "Pear", "Grapes"]

for (const fruit of fruits) {
    console.log(fruit);
    console.log(`${fruit} is something i like`)
    if (fruit === "Pear") {
        console.log(`${fruit} is my best fruit`)
    }
}

// find, filter, forEach, map, reduce, every, some
// FOREACH method executes a fuction for each elements in an array
const customers = ["Timi", "Ade", "Pan", "Dizzy", "Dizzy"];
customers.forEach((customer, index) => {
  console.log(customer, index);
});

// MAP method creates a new array with transformed element

const nums = [4, 5, 6 , 7]

const transformedNums = nums.map((num) => {
    return num* 2;
});
console.log(transformedNums);

// find method returns the first matching element in an array

const mySpecialNum = nums.find((num) => {
    return num > 5;
});
console.log(mySpecialNum);

// filter method returns all elements that fits a search condition in an array

const allMySpecialNums = nums.filter((num) => num > 5);
console.log(allMySpecialNums);

let myBalance = 8000
const transactions = [4000, -125, 10000, -5000, -2000, 1500];

transactions.map((transaction) => {
    if (transaction > 0) {
        console.log(`You have been credited with ${transaction} Naira`)
    } else {
        console.log(`You have been credited with ${transaction} Naira`)
    }
})

transactions.map((transaction) => {
    myBalance += transaction;
});
console.log(myBalance);

const myCreditTranscations = transactions.filter((transaction) => transaction > 0);
console.log(myCreditTranscations);

const myDebitTransactions = transactions.filter((transaction) => transaction < 0);
console.log(myDebitTransactions);

const maxTransaction =  50000;
// find if there is any transaction close to that maxTranscation
transactions.push(1000000);

const specialTransactions = transactions.find((transaction) => transaction >= maxTransaction);
console.log(specialTransactions);

// every and some
// every = check of all elements satisfy a condition
const myAges = [20, 42, 61, 81];
const allAdults = myAges.every((age) => age >=18);
console.log(allAdults);
// some = checks if at least one satisfy the condition
const someChildren = myAges.some((age) => age < 18);
console.log(someChildren);

// Reduce method is mostly for accumlating numbers 
const cartPrices = [25000, 32000, 15000, 4000, -2500];
const cartTotal = cartPrices.reduce((prev, curr) => {
    return prev + curr;
}, 300);
console.log(cartTotal)

// sort
const peoplesName = ["Zigi", "Samson", "Niyi", "Ademola"];
// const atoZ = peoplesName.sort();
// console.log(atoZ);
const ztoA = peoplesName.sort((a, b) => b - a);
console.log(ztoA);


// console.log(peoplesName.sort());

const prices = [80000, 67000, 767, 5600];
// const highestToLowest = prices.sort((a, b) => b - a);
// console.log(highestToLowest);

const LowestTohighest = prices.sort((a, b) => a - b);
console.log(LowestTohighest);

