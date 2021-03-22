class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.forState = 'add';
  }

  clearIdInput() {
    this.idInput.value = '';
  }

  changeFormState(type) {
    if (type === 'edit') {
      this.postSubmit.textContent = 'Update Post';
      this.postSubmit.className = 'post-submit btn btn-warning btn-block';
      // Create cancel button.
      const button = document.createElement('button');
      button.className = 'post-cancel btn btn-light btn-block';
      button.appendChild(document.createTextNode('Cancel Edit'));
      // Get parent element.
      const cardForm = document.querySelector('.card-form');
      // Get element to insert before.
      const formEnd = document.querySelector('.form-end');
      // inset the cancel button.
      cardForm.insertBefore(button, formEnd);
    } else {
      this.postSubmit.textContent = 'POST IT';
      this.postSubmit.className = 'post-submit btn btn-primary btn-block';
      // Remove cancel button, if it's there.
      if (document.querySelector('.post-cancel')) {
        document.querySelector('.post-cancel').remove();
      }
      // Clear ID from the hidden input field.
      this.clearIdInput();
      // Clear the input fields.
      this.clearFields();
    }
  }

  showPosts(posts) {
    let output = '';
    posts.forEach((post) => {
      output += `
        <div class="card mb-3">
          <div class="card-body">
            <h4 class="card-title">${post.title}</h4>
            <p class="card-text">${post.body}</p>
            <a href="#" class="edit card-link" data-id="${post.id}">
            <i class="fa fa-pencil"></i>
            </a>
            <a href="#" class="delete card-link" data-id="${post.id}">
            <i class="fa fa-remove"></i>
            </a>
          </div>
        </div>
      `;
    });
    this.post.innerHTML = output;
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  showAlert(message, className) {
    this.clearAlert();
    // Create a new div.
    const div = document.createElement('div');
    // Set the div classes.
    div.className = className;
    // Add text node with text.
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.postsContainer');
    // Get post div
    const posts = document.querySelector('#posts');
    // Insert alert div.
    container.insertBefore(div, posts);

    // Timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearFields() {
    // Clear out form fields.
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }

  fillFormForEdit(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;
    this.changeFormState('edit');
  }
}

export const ui = new UI();
