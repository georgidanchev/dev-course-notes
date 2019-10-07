
// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe') {
  // setting default values in es5.
  // if (typeof firstName === 'undefined') {
  //   firstName = 'John';
  // }
  // if (typeof lastName === 'undefined') {
  //   lastName = 'Doe';
  // }
  return `Hello ${firstName} ${lastName}`;
}

// console.log('Hello John Doe');
console.log(greet('John', 'Doe'));
console.log(greet());

// FUNCTION EXPRESSION

const square = function (a) {
  return a * a;
};

console.log(square(2));

// IFFES

(function (name) {
  console.log(`IFFE RAN. Hello ${name}`);
}('Brad'));


// PROPERTY METHODS

const todo = {
  add() {
    console.log('Add todo...');
  },
  edit(id) {
    console.log(`edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log('Delete todo..');
};

todo.add();
todo.edit(11);
todo.delete();
