// Person.prototype
function Person(_firstName, _lastName, _dob) {
  this.firstName = _firstName;
  this.lastName = _lastName;
  this.birthday = new Date(_dob);
}

// Calculate age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get full name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Gets Married
Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
};

const john = new Person('John', 'Doe', '8-12-90');
const marry = new Person('Marry', 'Johnson', 'March 20 1978');

console.log(marry);
console.log(john.calculateAge());
console.log(marry.getFullName());
marry.getsMarried('Smith');
console.log(marry.getFullName());

console.log(marry.hasOwnProperty('firstName'));
console.log(marry.hasOwnProperty('getFullName'));
