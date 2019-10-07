/**
 * Examples - spread operator
 */

// Spread operator takes every iterable item that
// can be looped over and applies it to the array.

const featured = ['deep dish', 'peperoni', 'hawaiian'];
const specialty = ['Meatzza', 'spicy mama', 'margherita'];

// The old way of making a copy of an array was
// to simple make a blank array and concat the 
// new array to the back of the empty array.
const fridayPizzas = [].concat(pizzas);

// With es6 we can simply spread the
// array inside the empty array.
const fridayPizzas2 = [...pizzas];

// We can concat two arrays into a single arrray 
// using the spread operator for each and we can
// even add another entry between the two.
const pizzas = [...featured, "veg", ...specialty];

// console log the result.
console.log(fridayPizzas2);
console.log(pizzas);