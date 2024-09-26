const myCountry = "Canada";
let myAge = 19;
const firstName = "Adeniyi";
const lastName = "Adedayo";
const fullName = firstName + " " + lastName;
console.log(myCountry.length);
console.log(fullName);
console.log(fullName.toUpperCase());
console.log(fullName.slice(0,7));
const description = `${fullName} is a citizen of ${myCountry}`;
console.log(description);
myAge++
console.log(myAge);
console.log(100 % 7)

console.log(myCountry.startsWith("h"));


const marksMass = 95;
const marksHeigth = 1.88;
const johnsMass = 85;
const johnsHeight = 1.76;

const marksBmi = marksMass / marksHeigth ** 2;
const johnsBmi = johnsMass / johnsHeight ** 2;
const marksHigherBMI = marksBmi > johnsBmi;

console.log(marksBmi, johnsBmi);

console.log(marksHigherBMI);

// if (marksHigherBMI) {
//     console.log("Mark's BMI is higher than John's");
// } else {
//     console.log("John's BMI is higher than Mark's");
// }

if (marksBmi > johnsBmi) {
  console.log("Mark's BMI is higher than John's BMI!");
} else if (johnsBmi > marksBmi) {
  console.log("John's BMI is higher than Mark's BMI!");
}






// nested if statement

let userChoice = "scissors";
let computerChoice = "paper";
// paper rock scissors

if (userChoice === computerChoice) {
  console.log("This is a tie");
} else if (userChoice === "rock") {
  if (computerChoice === "scissors") {
    console.log("User wins, Rock smashes scissors");
  } else {
    console.log("Computer Wins, Paper covers rock");
  }
} else if (userChoice === "paper") {
  if (computerChoice === "rock") {
    console.log("User wins, paper covers rock");
  } else {
    console.log("computer wins, scissors cuts paper");
  }
} else if (userChoice === "scissors") {
  if (computerChoice === "rock") {
    console.log("Computer wins, rock smashes scissors");
  } else {
    console.log("User wins, scissors ccuts paper");
  }
} else {
  console.log("Invalid entry, try again");
}


// Fucntions
// function are used to run snippets of code



let dolphinsScore1 = 97;
let dolphinsScore2 = 112;
let dolphinsScore3 = 101;

let pandasScore1 = 109;
let pandasScore2 = 95;
let pandasScore3 = 123;

let AverageDolphinScore =
  (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;

console.log(AverageDolphinScore);

let AveragePandalScore = (pandasScore1 + pandasScore2 + pandasScore3) / 3;

console.log(AveragePandalScore);

if (AverageDolphinScore > AveragePandalScore) {
  console.log("Dolphin wins");
} else if (AverageDolphinScore < AveragePandalScore) {
  console.log("Pandal wins");
} else {
  console.log("Its a Draw");
}

let minScore = 100;

if (
  AverageDolphinScore > AveragePandalScore &&
  AverageDolphinScore >= minScore
) {
  console.log("Dolphin wins");
} else if (
  AverageDolphinScore < AveragePandalScore &&
  AveragePandalScore >= minScore
) {
  console.log("Pandal wins");
} else {
  console.log("Nobody wins");
}

if (
  AverageDolphinScore === AveragePandalScore &&
  AverageDolphinScore >= minScore &&
  AveragePandalScore >= minScore
) {
  console.log("its a Draw");
} else {
  console.log("No team wins the trophy");
}