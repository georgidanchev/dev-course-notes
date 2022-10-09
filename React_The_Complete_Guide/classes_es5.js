class Human {
  constructor() {
    this.gender = 'male';
  }

  printGender() {
    console.log(this.gender)
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "max";


  }

  printerName() {
    console.log(this.name)
  }
}

const person = new Person()

person.printerName()

person.printGender()