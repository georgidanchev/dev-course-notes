/**
 * Extending classes
 */

// we hae our main Animal class.
class Animal {
  constructor(name) {
    this.name = name
    this.thirst = 100
    this.belly = []
  }

  drink() {
    this.thirst -= 10
    return this.thirst
  }

  eat(food) {
    this.belly.push(food)
    return this.belly
  }
}

// We extend class dog from parent class
class Dog extends Animal {
  constructor(name, breed) {
    // Neccsary function that passes
    // name var to the parent class.
    super(name)

    // Class has its own variables.
    this.breed = breed
  }

  //
  bark() {
    console.log(`${this.name}: Bark Bark, I'm a dog!`)
  }
}

// we insantiate zebra from Animal
const zebra = new Animal('Rhiney')
const snickers = new Dog('Snickers', 'King Charles')

//
snickers.eat('burger')
snickers.eat('meat')

//
zebra.eat('grass')
zebra.eat('apple')