
/*
 * number to string
 */

// undefined variable.
let val;

// number to a string.
val = String(777);
// expression to a stirng.
val = String(4 + 4);
// boolean to a string.
val = String(true);
// date to a string.
val = String(new Date());
// array to a string
val = String([1, 2, 3, 4, 5]);

// toString method
val = (5).toString();
val = (true).toString();

// output, type, length.
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log('------------------');

/*
 * string to number
 */

let val2;

val2 = Number('5'); // outputs 5
val2 = Number(true); // outputs 1
val2 = Number(false); // outputs 0
val2 = Number(null); // outputs 0
val2 = Number('Hello'); // outputs Nan
val2 = Number([1, 2, 3]); // outputs '1,2,3'
val2 = parseInt('100', 10); // outputs 100
val2 = parseFloat('100.5151'); // outputs 100.5151

console.log(val2);
console.log(typeof val2);
console.log(val2.toFixed(2));

console.log('------------------');

/**
 * type cohortion
 */

const val3 = String(5);
const val4 = 6;
const sum = Number(val3 + val4);

console.log(sum);
console.log(typeof sum);
