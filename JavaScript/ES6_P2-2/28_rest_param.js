/**
 * Example 1 - using rest param isnted of argument 
 */

function convertCurrency(rate, tax, tip, ...amounts) {
  // Example of what we might do with the data.
  return amounts.map(amount => amount * rate);

  // Console log the variables. As you will see 
  // the first 3 are as you would expect. Then
  // the amounts takes the rest of the variables
  // in a one neatly pakced array.
  //console.log(rate, tax, tip, amounts);
}

// Push some data to the function.
convertCurrency(2.43, 23, 57, 24, 75, 35);

/**
 * Example 2 - destructuring an array
 */

// First we get name and id, then bunch of data
// about the person which needs to be seprate.
const runner = ['Wes Bos', 123, 5, 3, 4, 7, 20];

// we can destructure the array and use the rest
// parametere to bunch up the rest of the data.
const [name, id, ...runs] = runner;

// We get the name, the id and all the data on 
// run in a nearly packed array.
console.log(name, id, runs);

/**
 * Example 3 - destructuring an array 
 */

// We have bunch of names which the first two are
// most important. We need all others sepretly.
const team = ['Wes', 'Kait', 'Lux', 'Sheen', 'Kelly'];

// We can detructure the array with the two players
// first then we can use the rest paramenter to 
// pack the rest of the players in an array.
const [captian, assistant, ...players] = team;

// Console log to confirm the results.
console.log(captian, assistant, players);