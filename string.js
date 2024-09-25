// javaScript is 0 based

// DATA TYPES 1. primitive 2. complex
// primitive strings '' "", number, boolean true and false, null, undefined
// complex object, arrays
// STRINGS - are text characters the are usually in a quotation mark '' ""
const firstName = "John";
const lastName = "Doe";
console.log(firstName);
console.log(lastName);

// String Properties length, concatenation(joining)
// string.length
console.log(firstName.length);
console.log(lastName.length);
// const myPassword = "typo98"
const fullName = firstName + " " + lastName;
console.log(fullName);
console.log(fullName.length);

// STRING METHODS - functions that can be performed on strings
// toUpperCase, toLowerCase,
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
// replace, replaceAll
console.log(fullName.replace("o", "*"));
console.log(fullName.replace("John", "*"));
console.log(fullName.replaceAll("o", "@"));
// includes
console.log(fullName.includes("h"));
// startsWith, endsWith
console.log(fullName.startsWith("j"));
console.log(fullName.endsWith("e"));

const myEmail = "adedayoabdulqadri@gmail.com";
console.log(myEmail);
console.log(myEmail.length);
console.log(myEmail.toUpperCase());
console.log(myEmail.includes("e"));
console.log(myEmail.endsWith("google.com"));

// indexOf, lastIndexOf
console.log(myEmail.indexOf("a"));
console.log(myEmail.indexOf("f"));
console.log(fullName.indexOf("o"));
console.log(myEmail.lastIndexOf("o"));

// 
console.log(myEmail.charAt(0));
// concat
console.log(myEmail.concat("example"));
// triming

const userName = "      user001      ";
console.log(userName.length);
console.log(userName.trim());
// trimStart trimEnd
console.log(userName.trimStart());
console.log(userName.trimEnd());

// extract portions of a string
// slice, substring, substr (start, num of characters we want)
// slice(start, end(non-inclusive))
// substr(0, 4)
const surname = "Sandler";
console.log(surname.slice(0, 4));
console.log(surname.substring(1, 4));
console.log(surname.substr(0,5));

const author = "Ngozi Adichie";
const bookTitle = "Americanah";
const yearPublished = "2016";

// The book Americanah written by
// Ngozi adichie was published in the year 2016



// template literals - allows us to format variable into strings

// backticks `the Book $[bookTitle]`

const description2 = `The book ${bookTitle} written by ${author} was published in the ${yearPublished}`;
console.log(description2);

const name1 = "Ade";
const name2 = "Wale";
// Ade is a boy
const sentence = `${name1} is a boy`;
// His name is Wale
const sentence2 = `His name is ${name2}`;

// Tinubu go die nii ajeh na `foolish man
const quote = `Tinubu go die nii ajeh na "foolish man"`;
console.log(quote);