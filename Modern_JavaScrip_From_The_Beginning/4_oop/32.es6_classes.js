class Person {
  constructor(_firstName, _lastName, _dob) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.birthday = new Date(_dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calcAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person('Mary', 'Williams', '11-13-1980');

console.log(mary);

console.log(mary.greeting());

mary.getsMarried('Thompson');

console.log(mary.greeting());

console.log(mary.calcAge());

console.log();

console.log(Person.addNumbers(1, 2));
