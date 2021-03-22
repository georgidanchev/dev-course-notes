
/* eslint-disable */

const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there, my name is Brad';
const tags = 'web design,web development,programming';

let val;

// concatenation
val = firstName + lastName;
val = firstName + ' ' + lastName;

// appending
val = 'Brad ';
val += 'Traversy';

// string bulding
val = 'Hello, my name is ' + firstName 
+ ' and I am ' + age;

// escaping
val = 'That\'s awesome, I can\'t wait';
val = firstName.length;

// concat method
val = firstName.concat(' ', lastName);

// change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];
// indexOf() -> find index by letter.
val = firstName.indexOf('l'); // output: 2
// find the last leter and what index it is.
val = firstName.lastIndexOf('l'); // output: 3

// charAt() -> get letter using index.
val = firstName.charAt('2'); // output: l
// get the last charecter.
val = firstName.charAt(firstName.length - 1);

// subString() -> pull out part of a string.
val = firstName.substring(0, 4); // output: Will

// slice() -> does very similar to subString()
val = firstName.slice(0,4); // output: Will
val = firstName.slice(-3); // output: iam

// split() -> turn string into array.
val = str.split(' ');
val = tags.split(',');

// replace() -> replace a string.
val = str.replace('Brad', 'Jack');

// includes() -> check if string includes a sub-string.
val = str.includes('Hello'); // output: true
val = str.includes('foo'); // output: flase
 
console.log(val);