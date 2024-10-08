// MATH OBJECT
console.log(Math.PI);

// MATH METHODS
// round, ceil, floor, trunc, random, max, min, pow, squrt

console.log(Math.pow(4, 4));
// 4 ** 4
console.log(Math.sqrt(4));

console.log(Math.max(10, 23, 900));
// maximum number

console.log(Math.min(10, 23, 900));
// minimum number

console.log(Math.round(19.99));
// nearest ten number

console.log(Math.ceil(9.2));
// round up regardless

console.log(Math.floor(9.9));
// round down regardless

console.log(Math.trunc(10.3));
// removes the decimal part

// random -0-1
console.log(Math.random());

// 0-5
const randomNumber = Math.trunc(Math.random() * 6);
console.log(randomNumber);

const customers = ["Timi", "Eniola", "Aisha", "Olumide", "Sesan"];
const numOfCustomers = customers.length;
const randomCustomerPosition =  Math.floor(Math.random() * numOfCustomers);

console.log(customers[randomCustomerPosition]);
