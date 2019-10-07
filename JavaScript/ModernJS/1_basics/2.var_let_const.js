
/*
 * Var, Let, Const
 */

// Init and asign var.
let name = 'John Doe';
console.log(name);

// Overwrite the var.
name = 'Steven Smith';
console.log(name);

// Init a empty var.
let greeting;
console.log(greeting);

// Defining the var.
greeting = 'Hello';
console.log(greeting);

// Camel case, Underscore, Pascal Case.
const firstName = 'John';
const first_name = 'sarah';
const FirstName = 'Tom';

/**
 * Let variable
 */

// you can re-assign the let variable.

let name2;
name2 = 'John';
name2 = 'steve';
console.log(name2);

/**
 * Const Variable
 */

// Const variable stands for constant you
// cannt reassign const the variable.
const name3 = 'Johnny';

// Const object
const person = {
  name: 'John',
  age: 32,
};

// modifing the const object name
person.name = 'Sarah';
console.log(person);

// adding entry to a const array.
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);

// We can modify the content of the varaible,
// mutate or add more entries but we cannot
// change the varaible type of a let.

// Again, we cannot reassign the or change
// varaible type of a const.
// numbers = [1,2,3,4,5,6] // error!
