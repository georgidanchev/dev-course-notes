/* eslint-disable no-restricted-properties */

const num1 = 100;
const num2 = 500;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math object
val = Math.PI;
val = Math.E;
val = Math.round(2.4); // outputs 2.
val = Math.ceil(2.4); // outputs 3.
val = Math.floor(2.8); // ouputs 2.
val = Math.sqrt(65); // square root
val = Math.abs(-3); // ouputs 3.
val = Math.pow(8, 2);
val = Math.min(2, 3, 2, 4, 53, 2, 4); // outputs 2.
val = Math.max(2, 3, 6, 4, 53, 8, 4); // outputs 53.
val = Math.random(); // generate random number.
val = Math.floor(Math.random() * 20 + 1); // random number between 0 - 20.

console.log(val);