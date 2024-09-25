// BOOLEAN VALUES (true or false)
const isMarried = false;

// comparison operator > < <= >=
// == loose equality sign (because it doesn't check the types)
// === strict equlity
// 6 > 9
console.log(6.5 > 9);
console.log(5 == 5);
console.log(5 == "5");
console.log(5 === "5");

console.log(6.0 >= 6);

// LOGICAL OPERATORS and(&&), or(||), not(!)

// and operator the moment one is false everytin becomes false
console.log(7 > 6 && 5 > 4); // t and t
console.log(11 === "11" && 3 >= 2); // f and t
console.log(5 >= 6 && 2 == 2);

// or operator the moment one is true everytin becomes true
console.log(false || false);
console.log(6 > 7 || 5 < 8);

// not is just use for negation

console.log(5 !== 5);
console.log(8 !== 5);
console.log(8 !==8 && 2.0 > 2);

const country = "Nigeria";
const isIsand = false;

// TRUTHY AND FALSY VALUES
// strings "wale" : all strings value are truthy
console.log(Boolean ("wale"));
console.log(Boolean(" "));
console.log(Boolean(""));
// numbers all valid numbers (-ve or +ve)
console.log(Boolean(0));
console.log(Boolean(9));
console.log(Boolean(-3));


// null and undefined are falsy values