// Destructuring assignment

let a;
let b;

// Array Destructuring
[a, b] = [100, 200];
// Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];

// Object Destructuring
({a, b} = {
  a: 100,
  b: 200,
  c: 300,
  d: 400,
  e: 500
});

({a, b, ...rest} = {
  a: 100,
  b: 200,
  c: 300,
  d: 400,
  e: 500
});

console.log(a, b, rest);

// Array Destructuring

const people = ['John', 'Beth', 'Mike'];

const [person1, person2, person3] = people;

console.log(person1, person2, person3);

// Parse array return from function

const getPeople = () => {
  return ['John', 'Beth', 'Mike'];
};

const [person4, person5, person6] = getPeople();

console.log(person4, person5, person6);

// Object Destructuring

const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: () => {
    console.log('hello');
  }
};

// Old es5 way.

const name_o = person.name,
  age_o = person.age,
  city_o = person.city;

// New es6 way.
const {name, age, city, sayHello} = person;

console.log(name, age, city);

sayHello();
