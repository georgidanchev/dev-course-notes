
/**
 * Primitive types
 */

// String
const name = 'Johnny';
console.log(typeof name);

// Number
const age = 45;
console.log(typeof age);

// Boolean
const hasKids = true;
console.log(typeof hasKids);

// Null
const car = null;
console.log(typeof car);

// Undefined
let test;
console.log(typeof test);

// Symbol
const sym = Symbol();
console.log(typeof sym);

console.log('----------------');
console.log('start of reference types');

/**
 * Reference Types
 */

// Array, Object Litral and date
const hobbies = ['movies', 'music'];
const address = {
  city: 'Boston',
  state: 'MA',
};
const today = new Date();

console.log(typeof hobbies);
console.log(typeof address);
console.log(typeof today);
console.log(today);
