// Normal way of doing arrow functions.
const sayHello1 = () => {
  console.log('hello');
};

// Shorthand way of doing the function.
const sayHello2 = () => console.log('hello');

// Shorthand, return a simple string.
const sayHello3 = () => 'Hello';

// It can be confusing with object literal.
const sayHello4 = () => ({
  msg: 'Hello',
});

// Console logging hello with params.
const sayHello5 = name => console.log(`Hello ${name}`);

// Console logging with multiple params.
const sayHello6 = (firstName, lastName) => {
  console.log(`Hello ${firstName} ${lastName}`);
};

// Call all funcs.
sayHello1();
sayHello2();
console.log(sayHello3());
console.log(sayHello4());
sayHello5('Brad');
sayHello6('Brad', 'Traversy');

// Example arrow function.

const users = ['Nathan', 'John', 'William', 'Alex'];

const nameLenghts = users.map(name => name.length);

console.log(nameLenghts);
