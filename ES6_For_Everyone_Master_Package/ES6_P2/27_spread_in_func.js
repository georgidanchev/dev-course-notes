const inventors = ['Einstein', 'Newton', 'Galileo'];
const newInventors = ['Musk', 'Jobs'];

/**
 *  Example 1 - adding one array to another
 */

// This by itself would not work. Tou
// get an array and array inside it.
//inventors.push(newInventors);

// This function would work but it's a bit 
// cluncky, you push and apply each entry 
// of one of the arrays into the other.
// Pushes every entry on to the other array.
//inventors.push.apply(inventors, newInventors);

// Using Es6 you can spread into a funciton.
// in this way you have neat function which
// push the new entries into the other array.
inventors.push(...inventors);

// Check the results. Really cool!
console.log(inventors);

/**
 *  Example 2 - spread within a function
 */

// Simple array.
const name = ['Wes', 'Bos', 'cool'];

// console log out two param
function sayHI(first, last) {
  console.log(`Hey there ${first} ${last}`);
}

// One way of pushing the variables.
sayHI(name[0], name[1]);

// The better way of pushing the variables.
sayHI(...name);