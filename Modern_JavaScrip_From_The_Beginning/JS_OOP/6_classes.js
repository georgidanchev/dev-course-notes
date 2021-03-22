// ES6 Constructor
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old.`
  }

  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }

  static topBookStore() {
    return 'Barnes & Nobel';
  }
}

// Instantiate the Object
const book1 = new Book('Book One', 'John Doe', '2013');

// Reiving the year of book 1
console.log(book1);
book1.revise('2018');
console.log(book1);

// Static function don't need to be instantiated
console.log(Book.topBookStore());