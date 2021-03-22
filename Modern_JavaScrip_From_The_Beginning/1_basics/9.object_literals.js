
/* eslint-disable prefer-destructuring */

const person = {
  firstName: 'Steve',
  lastnName: 'Smith',
  age: 36,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL',
  },
  getBirtYear() {
    return 2017 - this.age;
  },
};

// empty variable.
let val;

// point variable to our object.
val = person;

// get specific value
val = person.firstName;
val = person.lastnName;
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address.city;
val = person.getBirtYear();

console.log(val);

// array of objects.
const people = [
  { name: 'John', age: 30 },
  { name: 'Mike', age: 23 },
  { name: 'Nancy', age: 41 },
];

// looping throught the array.
for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
