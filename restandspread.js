// 
// rest and spread operator...

//rest operator
//in an array
const countries = ["Cuba", "Algeria", "Mexico", "USA"]
const [one,two, ...others] = countries
console.log(one);
console.log(others);
//in an object
const country = {
  name : "Nigeria",
  yearOfIndependence : 1960,
  officialLanguage : "English",
  isIsland : false,
}
const {name, ...remaining} = country
console.log(remaining);

//spread operator
const africanCountries = ["Mali", "Togo", "Kenya", "Uganda"]
const asianCountries = ["China", "Japan", "Bangladesh","Vietnam"]
const allCountries = [...africanCountries, ...asianCountries]
console.log(allCountries);




// optional chaining
const user = {
    name: "John Doe",
    age: 45,
    gender: "Male",
    previousJobs: {
        one: "Jumia",
        two: "Paystack",
        three: "Meta",
    },
};
console.log(user.name);
console.log(user?.car);
console.log(user?.previousJobs.three);
// console.log(user.car ?? "benz");

// nullish coalescence
// lefExpression (null || undefined) ?? defautValue
const username = null

console.log(username ?? "Fuck off")