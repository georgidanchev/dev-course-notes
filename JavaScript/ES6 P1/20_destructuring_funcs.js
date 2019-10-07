/**
 * Example 1
 */

// We have a currency converting
// function which can convert in
// seeveral different currencies.
function convertCurrency(amount) {
  const convereted = {
    USD: amount * 0.76,
    GPB: amount * 0.53,
    AUD: amount * 1.01,
    MEX: amount * 13.30
  };
  return convereted;
}

// Here we convert 100 units to GPB and USD.
// As you can see the order doesn't matter.
// You can pick an choose which currency,
// and the function will pull the correct.
const {
  GPB,
  USD
} = convertCurrency(100);

// console log the reuslt to verify.
console.log(USD, GPB);

/**
 * Example 2
 */
// Here is our old tip calucalting function but
// with few improvmenets to make it better. As
// you can see it takes object and has defaults
// set for all of the varaibles in case. 
function tipCalc({
  total = 100,
  tip = 0.15,
  tax = 0.13
  // if we get no object, pass empty one.
} = {}) {
  return total + (tip * total) + (tax * total)
}

// Here we use the function and we pass all of  
// the the needed varaibles.Notice that the  
// order of passed vars can be irrelivant.
const bill = tipCalc({
  tax: 0.13,
  tip: .20,
  total: 200,
});

// cosnole log the bill.
console.log(bill);