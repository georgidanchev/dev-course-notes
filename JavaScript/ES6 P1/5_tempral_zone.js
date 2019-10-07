/*
// scenario 1 - var behaviour
*/

console.log(pizza);
// console output: undefined. (it's not an error!) with 
// var you can access the variable before it's defiend but
// you cannot acces the variable data before it's assigned.
var pizza = 'deep dish';
console.log(pizza);
// console output: deep dish.

/*
// scenario 2 - const behaviour
*/

console.log(pizza2);
// console output: code beaking not defined error.
const pizza2 = 'regular dish';
// console output: regular dish.
console.log(pizza2);