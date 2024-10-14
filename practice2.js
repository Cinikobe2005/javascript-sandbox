// write the function that takes in string and converts the first letter of everyword to upppercase

const everywordToUpperCase  = (str) => {
    const result = str.split(" ").map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return result.join(" ");
};
console.log(everywordToUpperCase("testing is fun and stressful"));

// write a function that checks if the parameter is a number or not return true or false

const checkNum = (arg) => typeof arg === 'number';

console.log(checkNum(2));

const currencyData = [
  { from: "GBP", to: "NGN", rate: 2200 },
  { from: "USD", to: "NGN", rate: 1700 },
  { from: "EUR", to: "NGN", rate: 1900 },
  { from: "YEN", to: "NGN", rate: 400 },
];

// iterate over the currencydata and log a message 
// The Exchange rate for USD to NGN is 1700

const currData = currencyData.map((currency) => {
    console.log(`The Exchange rate for ${currency.from} to ${currency.to} is ${currency.rate}`);
});

// write a func that returns the exchange rate for that currency pair
//or an appropriate message if the pair is not found
const findCurrencyPair = (baseCurrency, toCurrency) => {
  //search through the currencyData to find a match
  const pair = currencyData.find((currency) => {
    return (
      currency.from.toUpperCase() === baseCurrency.toUpperCase() &&
      currency.to.toUpperCase() === toCurrency.toUpperCase()
    );
  });

  if (pair) {
    console.log(
      `The Exchange Rate for ${pair.from} to ${pair.to} is ${pair.rate}`
    );
  } else {
    console.log("The currency pair cannot be found");
  }
};

findCurrencyPair("gbp", "NGN");

// write a conversion function
// 2usd
const convertCurrency = (baseCurrency, toCurrency, amount) => {
     const pair = currencyData.find((currency) => {
       return (
         currency.from.toUpperCase() === baseCurrency.toUpperCase() &&
         currency.to.toUpperCase() === toCurrency.toUpperCase()
       );
     });

     if (pair) {
        // conversion
        console.log(`${amount} ${pair.from} is equalivalent to ${amount * pair.rate} ${pair.to}`)

     } else {
        console.log("Currency pair not found")
     }
};

convertCurrency("usd", "ngn", 500);

// write a funct to add to the currency data list 
// AUS NGN 300

//write a function  tat adds to the currency data list
//AUS NGN 300
// const addNew = (base, to, rate) => {
//   const newCurrency = { from: base, to: to, rate: rate };
//   currencyData.push(newCurrency);
//   console.log(currencyData);
// };
// addNew("AUS","NGN", 1040)
//for lesser lines of code
const addNewCurrency =(from,to,rate)=>{
    currencyData.push({from,to,rate})
    console.log(currencyData);
}
addNewCurrency("AUS", "NGN", 1040);