// var is the standart variable delcaration.
// var variables are global scoped.
var width_v = 100;
/*
// The new ES6 variables. 
// They Are block scoped variables.
// Anything inside {} is a block.
*/
// let can be reassigned. 
let width_l = 100;
let height = 200;

// const cannot be reasigned. 
const key = 'abc123';

// var is global scoped variable.
var age = 10;
// if statement block.
if (age > 5) {
  let dogyears = age * 2;
  // outputs the variable above.
  console.log("let_" + dogyears);
  // outputs the dog years setance.
  console.log(`You are ${dogyears} dog years old!`);
}
// output = error(not defined). 
console.log("let_" + dogyears);