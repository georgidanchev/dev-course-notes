/* eslint-disable */

// There are two ways to make a class in es6.

// class expression
const Dog2 = class {
  constructor() {

  }
}


// class declaration
class Dog {
  // the only madatory function inside a
  // class is a constructor. It' called 
  // everytime a new instance.
  constructor(name, breed) {
    this.name = name
    this.breed = breed
  }
  // our functions are expresed as follow
  bark() {
    // They have acess to the constructor varaibles.
    console.log(`Bark bark! My name is ${this.name}`)
  }
  cudle() {
    console.log(`I love you owner!`)
  }

  // Static method - you cab only call directly on to
  // the class. For example sunny.info() wont work as 
  // it's isntatied. But Dog.info() will work.
  static info() {
    console.log('A dog is better then a cat!')
  }

  get description() {
    return `${this.name} is a ${this.breed} type of dog`
  }

  // set a nickname value to a dog
  set nicknames(value) {
    this.nick = value.trim();
  }
  // get the nick name value for a dog
  get nicknames() {
    return this.nick.toUpperCase();
  }
}

// We instantiate dogs form the constructor
const snickers = new Dog('Snickers', 'King Charles')
const sunny = new Dog('Sunny', 'Golden Doodle')