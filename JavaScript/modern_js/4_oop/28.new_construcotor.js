// String
console.log('');
console.log('//String//');

const name1 = 'Jeff';
const name2 = new String('Jeff');
name2.foo = 'bar';

console.log(typeof name1);
console.log(typeof name2);

// Name1 will be true.
// Name2 will be false.
// This is because the type
// will be different.
if (name2 === 'Jeff') {
  console.log('yes');
} else {
  console.log('no');
}

// Number
console.log('');
console.log('//Number//');

const num1 = 5;
const num2 = new Number(5);

console.log(typeof num1);
console.log(typeof num2);

// Boolean
console.log('');
console.log('//Boolean//');

const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool1);
console.log(typeof bool2);

// Function
console.log('');
console.log('//Function//');

const getSum1 = (x, y) => x + y;
const getSum2 = new Function('x', 'y', 'return 1+1');

console.log(getSum1(1, 1));
console.log(getSum2(1, 1));

// Objects
const john1 = { name: 'john' };
const john2 = new Object({ name: 'John' });

// Both cases give the same result.
console.log(john1);
console.log(john2);

// Arrays
console.log('');
console.log('//Arrays//');
const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4, 5);

// Both cases give the same result.
console.log(arr1);
console.log(arr2);

// Regular Expressions
console.log('');
console.log('//Regular Expressions//');

const re1 = /\w+/;
// You have to escape character
const re2 = new RegExp('\\w+');

console.log(re1);
console.log(re2);

// Advise

/*
 Avoid using 'new' as makes execution much slower.
*/
