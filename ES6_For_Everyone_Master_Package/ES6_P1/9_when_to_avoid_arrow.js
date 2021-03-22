/*
 * scenario 1 - 'this' and normal arrow functions.
 */

// control which example runs.
const runExample = 8;

// Get the button object.
const button = document.querySelector('#pushy');

// Event listener with es6 arrow function using 'this' keyword.
button.addEventListener('click', () => {
  if (runExample == 1) {
    // In this case this will refer to the window object.
    this.classList.toggle('on');
    // This will cuase a breaking error.
  }
});

// Event listener with the standart js function using 'this'.
button.addEventListener('click', function () {
  if (runExample == 2) {
    this.classList.toggle('on');
    // This will work as intended. 
  }
});

// If you stil want to use arrow function in our 
// scenario to do what it did, we acutally can.
button.addEventListener('click', (e) => {
  if (runExample == 3) {
    // The limitation to using e.target is when you
    // have nested items inside your object. e.target 
    // will bring back what ever you clicked, and in 
    // this other case this function might not do 
    // what you intended.
    e.target.classList.toggle('on');
  }
});

/*
 * scenario 2 - using keyword 'this' in objects.
 */

if (runExample == 4) {
  const person = {
    points: 23,
    score: () => {
      this.points++;
    }
  }

  person.score();
  // This is a method which is suppose to add
  // 1 to the points of the person object.
  console.log(person);
  // console output: 23. (no change)
}

if (runExample == 5) {
  const person = {
    points: 23,
    score: function () {
      this.points++;
    }
  }
  person.score();
  // add 1 to the points of the person object.
  console.log(person);
  // console output: 24. works as expected.
}

if (runExample == 6) {
  const person = {
    points: 23,
    score() {
      // The above expression is equal to
      //  a regular typed out function.
      this.points++;
    }
  }
  person.score();
  // add 1 to the points of the person object.
  console.log(person);
  // console output: 24. works as expected.
}

/*
 * scenario 3 - arrow functios and class prototypes.
 */

if (runExample == 7) {
  class Car {
    constructor(make, color) {
      this.make = make;
      this.color = color;
    }
  }

  const beemer = new Car('bmw', 'blue');
  // we added the beemer to the car object.
  console.log(beemer);

  // We are try to use fancy arrow function to
  // add prototype method to the Car class.
  Car.prototype.summarize = () => {
    return `This car is a ${this.make} in the colour ${this.color}`;
  };

  // We try to use this method and we have a suprise.
  console.log(beemer.summarize());
  // This works but it's pulling *undefied* variables. 

  // In this nother prototype method we use regualrd
  // function to do the same thing again.
  Car.prototype.summarize2 = function () {
    return `This car is a ${this.make} in the colour ${this.color}`;
  };

  // This time everything works as expected.
  console.log(beemer.summarize2());
}

/*
 * scenario 4 - non working example.
 */

if (runExample == 8) {
  const orderChildren = function () {
    const children = array.from("arguments");
    return children.map((child, i) => {
      return `${child} was child #${i + 1}`;
    })
    console.log(arguments);
  }
}