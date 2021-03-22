// Our constructor function 
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

// We add prototype functions after the constructor.
Dog.prototype.bark = function () {
  console.log(`Bark Bark! My name is ${this.name}`);
}

// We instantiate dogs form the constructor
const snickers = new Dog('Snickers', 'King Charles');
const sunny = new Dog('Sunny', 'Golden Doodle');

// we poverwrite the prototype
Dog.prototype.bark = function () {
  console.log(`Bark Bark Bark! My name is ${this.name}
  and I'm a ${this.breed}`);
}

// we create a new prototype method
Dog.prototype.cuddle = function () {
  console.log(`I love you owner!`);
}

// we call the prototype methods.
snickers.bark();
snickers.cuddle();
sunny.bark();