
/* eslint-disable no-array-constructor, prefer-destructuring, no-unused-vars */

// create some arrays
const numbers = [54, 33, 66, 65, 21, 5];
const numbers2 = new Array(22, 54, 66, 54, 78, 2);
const fruit = ['apple', 'bannana', 'orange', 'pear'];
const mixed = [22, 'hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

// empty array
let val;

// get array length
val = numbers.length;

// check if it is array
val = Array.isArray(numbers);

// get a single value
val = numbers[3];
val = numbers[0];

// Insert into array
numbers[2] = 100;

// find index position
val = numbers.indexOf(100);


/**
 * Mutating arrays
 */

// Add to the end of the array
numbers.push(250);

// Put 120 at the front of the array
numbers.unshift(120);

// Take lat array entry
numbers.pop();

// take off from front
numbers.shift();

// Splice values
numbers.splice(1, 1);

// reverse the array
numbers.reverse();

// add two arrays together
val = numbers.concat(numbers2);

// sort in alphabetical order.
val = fruit.sort();

// sorts numbers - sorts only first digit.
val = numbers.sort();

// sort numbers properly
val = numbers.sort((x, y) => x - y);

// sort numbers in reverse.
val = numbers.sort((x, y) => x + y);

function over50(num) {
  return num > 50;
}

// find first number over 50.
val = numbers.find(over50);

console.log(numbers);
console.log(val);