class Person {
  constructor(_firstName, _lastName) {
    this.firstName = _firstName;
    this.lastName = _lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(_firstName, _lastName, _phone, _memberType) {
    super(_firstName, _lastName);
    this.phone = _phone;
    this.memberType = _memberType;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'standard');

console.log(john);

console.log(john.greeting());

console.log(Customer.getMembershipCost());
