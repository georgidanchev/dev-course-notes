// Person constructor
function Person(_name, _dob) {
  this.name = _name;
  this.birthday = new Date(_dob);
  this.calcAge = () => {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// Instantiate the Person constructor
const brad = new Person('Brad', '9-10-1994');
// Logout the new person.
console.log(brad);
// Get the age of the new person.
console.log(brad.calcAge());
