const person = {
  name: 'Wes',
  age: 28
}
// modification of age prop of object 
person.age = 10;
// verify modifcation.
console.log(person.age);

// freeze the object
const wes = Object.freeze(person);

// try tp modify it again
person.age = 15;
// modification has no effect
console.log(person.age);