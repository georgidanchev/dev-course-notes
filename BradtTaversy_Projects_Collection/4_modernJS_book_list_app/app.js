const bookForm = document.getElementById('book-form');
const bookList = document.getElementById('book-list');

// Book Constructor
function Book(_title, _author, _isbn) {
  this.title = _title;
  this.author = _author;
  this.isbn = _isbn;
}

// UI Constructor
function UI() {}

UI.prototype.addBookToList = (_book) => {
  const list = document.getElementById('book-list');
  // Create a tr element.
  const row = document.createElement('tr');
  // Insert cols.
  row.innerHTML = `
    <td>${_book.title}</td>
    <td>${_book.author}</td>
    <td>${_book.isbn}</td>
    <td><a href="#" class="delete">x</a></td>
  `;
  list.appendChild(row);
};

// Show Alert
UI.prototype.showAlert = (_massage, _className) => {
  // Creat div.
  const div = document.createElement('div');
  // Add classes.
  div.className = `alert ${_className}`;
  // Add text.
  div.appendChild(document.createTextNode(_massage));
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
};

// Delete a book
UI.prototype.deleteBook = (target) => {
  if (target.classList.contains('delete')) {
    target.parentElement.parentElement.remove();
  }
};

// Clear Fields
UI.prototype.clearFields = () => {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

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

  // Validate
  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Clear all fields.
    ui.clearFields();

    // Show success alert
    ui.showAlert('Book added!', 'success');

    // Add book to list.
    ui.addBookToList(book);
  }
});

// Event listener for deleting books.
bookList.addEventListener('click', (e) => {
  e.preventDefault();
  // Instantiate the ui.
  const ui = new UI();
  // pass element for deleting.
  ui.deleteBook(e.target);
  // Show success alert.
  ui.showAlert('Book Removed!', 'success');
});
