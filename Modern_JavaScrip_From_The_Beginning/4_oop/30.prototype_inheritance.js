//
// Person constructor
//
function Person(firstName, LastName) {
  this.firstName = firstName;
  this.LastName = LastName;
}

// Greeting
Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.LastName}`;
};
// Instantiate a new person.
const person1 = new Person('John', 'Doe');

// log greeting proto method.
console.log(person1.greeting());

//
// Customer constructor.
//
function Customer(firstName, lastName, phone, memberShip) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.memberShip = memberShip;
}

// Inherit the Person prototype methods.
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create a customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.LastName} welcome to our company`;
};

console.log(customer1.greeting());
