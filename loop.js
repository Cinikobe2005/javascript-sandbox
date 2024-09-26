// LOOPS for, while, do-while
// FOR LOOP

// for (initializer; condition; increment){line of code}
// infiniteloop means it can't stop

for (let i = 0; i < 10; i++) {
    console.log("loop");
}

// write a loop (iteration, recursion) that return the sum of the natural numbers between 0 and 3

let sum = 0;

for (let i = 0; i <= 3; i++) {
    sum += i;
}
console.log(sum);

// while (initializer; (condition){
//  increment
// }
// continue and break
let y = 0;
while (y <= 5) {
    // perform action
    console.log("In the loop");


    y++;
}

let num = 1;
while (num <= 10) {
    console.log("Current Value of Num is " + num);


    num++;
}

// do while loop-
// performs the action once at least whether condition is t or f

let x = 5;
do {
  console.log("I am in the loop");
  x++;
} while (x <= 2);

// type conversion and type coercion
// functions