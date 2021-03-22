/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

// FOR LOOP - Use when you know
// how many times it will run.

for (let i = 0; i <= 10; i++) {
  if (i === 2) {
    console.log('2 is my number');
  }
  console.log(`Number ${i}`);
  if (i === 4) {
    // breaks out of the loop
    break;
  }
}

// WHILE LOOP - Use when you don't
// lnow how many times it will run.

let i = 0;
while (i < 10) {
  console.log(`number ${i}`);
  i++;
}

// DO WHILE LOOP - This aways runs.

let b = 0;
do {
  console.log(`number ${i}`);
  b++;
}

while (b < 10);

// FOR LOOP Example.

const cars = ['Ford', 'Chevy', 'Honda', 'Toyta'];

for (let x = 0; x < cars.length; x++) {
  console.log(`${cars[x]} - ${x}`);
}

// FOR EACH - array loop.

cars.forEach((car, index, array) => {
  console.log(car, index);
  console.log(array);
});


// MAP - array loop

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Sarah' },
  { id: 3, name: 'Karen' },
  { id: 3, name: 'Steve' },
];

const userIDs = users.map(user => user.id);

console.log(userIDs);

// FOR IN LOOP

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40,
};

for (const x in user) {
  console.log(`${x} : ${user[x]}`);
}
