/*
// Basic Literal
*/

// const s1 = 'Hello';
// console.log(typeof s1);
// output: Hello

// const s2 = new String('Hello');
// console.log(typeof s2);
// output: string

// console.log(window);
// console.log(navigator.appVersion);
// output - browser info

/*
// Bbject literal
*/
const book1 = {
  title: 'Book One',
  author: 'john Doe',
  year: '2013',
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

const book2 = {
  title: 'Book Two',
  author: 'Jane Doe',
  year: '2016',
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

console.log(Object.values(book2));
console.log(Object.keys(book2));
console.log(book2.getSummary());