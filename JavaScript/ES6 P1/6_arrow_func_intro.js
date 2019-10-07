/*
// scenario 1 - normal function
*/

const names = ['wes', 'kait', 'lux'];

const fullNames1 = names.map(function (name) {
  return `${name} bos`;
});

// console output: [ 'wes bos', 'kait bos', 'lux bos' ]
//console.log(fullNames1);

/* 
// scenario 2 - A simple example of ES6 arrow function.
*/

const fullNames2 = names.map((name) => {
  return `${name} bos`;
});

// console output: [ 'wes bos', 'kait bos', 'lux bos' ]
//console.log(fullNames2);


/* 
// scenario 3 - es6 function with implicit return
*/

const fullNames3 = names.map(name => `${name} bos`);
// console output: [ 'wes bos', 'kait bos', 'lux bos' ]
//console.log(fullNames3);


/* 
// scenario 4 - es6 function with no args
*/

// arrow function without arguments.
const fullNames4 = names.map(() => `cool bos`);
// console output: [ 'cool bos', 'cool bos', 'cool bos' ]
console.log(fullNames4);


/* 
// scenario 5 - nameing an es6 arrow function
*/

// There isn't really a way to name arrow
// function as we do regular functions, but
// if we put the function in a varaible we
// can now name this varaible and ueit to 
// call the function just as regular one.

const sayMyName = (name) => {
  // output to console result.
  console.log(`Hello ${name}!`);
}

// call function and pass string.
sayMyName("Ben");