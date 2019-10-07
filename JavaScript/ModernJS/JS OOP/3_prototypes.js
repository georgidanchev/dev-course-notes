/*
// ES5 Constructors + prototype
*/

// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// Prototype method - get book summary
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
}

// Prototype method - get book age
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old.`
}

// Prototype method - revise book year
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
}

// Instatiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

// Console log the result
console.log(book2);
book2.revise('2018');
console.log(book2);