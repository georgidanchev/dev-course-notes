// Alternative way of creating objects.
//
const personPrototypes = {
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried(newLastName) {
    this.lastName = newLastName;
  },
};

const marry = Object.create(personPrototypes);

marry.firstName = 'Mary';
marry.lastName = 'Williams';
marry.age = 30;

marry.getsMarried('Thompson');

console.log(marry.greeting());

const brad = Object.create(personPrototypes, {
  firstName: { value: 'Brad' },
  lastName: { value: 'Traversy' },
  age: { value: 36 },
});

console.log(brad);

console.log(brad.greeting());
