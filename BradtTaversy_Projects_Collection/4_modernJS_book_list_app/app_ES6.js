/* eslint-disable class-methods-use-this */
// ^^^ All of these methods that are getting
// warnings can be made into static methods
// and can be called without instantiating
// them using the class name directly.

class Book {
  constructor(_title, _author, _isbn) {
    this.title = _title;
    this.author = _author;
    this.isbn = _isbn;
  }
}

class UI {
  addBookToList(_book) {
    // Get book list inject target.
    const list = document.getElementById('book-list');
    // Create a new tr element.
    const row = document.createElement('tr');
    // Insert cols html.
    row.innerHTML = `
    <td>${_book.title}</td>
    <td>${_book.author}</td>
    <td>${_book.isbn}</td>
    <td><a href="#" class="delete">x</a></td>
    `;
    // Append new element.
    list.appendChild(row);
  }

  showAlert(_message, _className) {
    // Creat div.
    const div = document.createElement('div');
    // Add classes.
    div.className = `alert ${_className}`;
    // Add text.
    div.appendChild(document.createTextNode(_message));
    // Get parent.
    const container = document.querySelector('.container');
    //  get form.
    const form = document.querySelector('#book-form');
    // Inset alert
    container.insertBefore(div, form);
    // Timeout, to make it disappear.
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteBook(target) {
    // If we have pressed delete button.
    if (target.classList.contains('delete')) {
      // Go up the parent of the parent and delete.
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    // Clear out all inputs.
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// Reference book form and book list.
const bookForm = document.getElementById('book-form');
const bookList = document.getElementById('book-list');

// Local storage class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static saveBooks(data) {
    localStorage.setItem('books', JSON.stringify(data));
  }

  static displayBooks() {
    // Get current data.
    const books = Store.getBooks();
    // Loop through every entry
    // and instantiate new books.
    books.forEach((book) => {
      // Instantiate ui
      const ui = new UI();
      // Add book to ui.
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    // Get current data.
    const books = Store.getBooks();
    // Push new book to the
    // end of the array.
    books.push(book);
    // Save the new array.
    Store.saveBooks(books);
  }

  static removeBook(isbn) {
    // Get current data.
    const books = Store.getBooks();
    // Filter out the one we don't want.
    const newArr = books.filter(book => book.isbn !== isbn);
    // Save the new array.
    Store.saveBooks(newArr);
  }
}

// Dom Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// Event Listeners for adding books.
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Get form values.
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  console.log(ui);

  // Validate
  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list.
    ui.addBookToList(book);

    // Add to local storage
    Store.addBook(book);

    // Show success alert
    ui.showAlert('Book added!', 'success');

    // Clear all fields.
    ui.clearFields();
  }
});

// Event listener for deleting books.
bookList.addEventListener('click', (e) => {
  e.preventDefault();
  // Instantiate the ui.
  const ui = new UI();

  // Pass element for deleting.
  ui.deleteBook(e.target);

  // Remove from local storage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show success alert.
  ui.showAlert('Book Removed!', 'success');
});
