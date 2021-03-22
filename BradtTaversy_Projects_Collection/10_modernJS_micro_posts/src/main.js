import './styles/style.scss';

import { http } from './scripts/http';
import { ui } from './scripts/ui';

const posts = document.querySelector('#posts');
const postSubmit = document.querySelector('.post-submit');
const cardForm = document.querySelector('.card-form');
const apiUrl = 'http://localhost:3000/posts';

const getPosts = () => {
  http
    .get(apiUrl)
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
};

const submitPost = () => {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;

  // Validate input.
  if (title === '' || body === '') {
    ui.showAlert('Please fill in all fields.', 'alert alert-danger');
  } else {
    // data container.
    const data = {
      title,
      body,
    };

    // Check the input ID.
    if (id === '') {
      // Submit a new post.
      http
        .post(apiUrl, data)
        .then(() => {
          // Get posts and re-write dom.
          getPosts();
          // Show a success alert.
          ui.showAlert('Post added.', 'alert alert-success');
          // Clear the input fields.
          ui.clearFields();
        })
        .catch(err => console.log(err));
    } else {
      // Update existing post.
      http
        .put(`${apiUrl}/${id}`, data)
        .then(() => {
          ui.showAlert('Post updated.', 'alert alert-success');
          ui.changeFormState('add');
          getPosts();
        })
        .catch(err => console.log(err));
    }
  }
};

const enableEditState = (e) => {
  e.preventDefault();
  if (e.target.parentElement.classList.contains('edit')) {
    const aTag = e.target.parentElement;
    const { id } = aTag.dataset;
    const title = aTag.previousElementSibling.previousElementSibling.textContent;
    const body = aTag.previousElementSibling.textContent;

    const data = {
      id,
      title,
      body,
    };
    // Fill form with current post
    ui.fillFormForEdit(data);
  }
};

// Cancel edit state
const cancelEdit = (e) => {
  e.preventDefault();
  if (e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
  }
};

const deletePost = (e) => {
  e.preventDefault();
  // Does parent element contain delete class?
  if (e.target.parentElement.classList.contains('delete')) {
    // Get post ID from parentElement.
    const { id } = e.target.parentElement.dataset;
    // Get delete confirmation.
    if (confirm('Are you sure?')) {
      // Set API request.
      http
        .delete(`${apiUrl}/${id}`)
        .then(() => {
          // on success - show alert and get posts.
          ui.showAlert('Post Removed', 'alert alert-success');
          getPosts();
        })
        .catch(err => console.log(err));
    }
  }
};

// Listen for edit cancel
cardForm.addEventListener('click', cancelEdit);
// Listen for post edit
posts.addEventListener('click', enableEditState);
// Listen for post delete.
posts.addEventListener('click', deletePost);
// Listen for post submission.
postSubmit.addEventListener('click', submitPost);
// On dom load, get data from API.
document.addEventListener('DOMContentLoaded', getPosts);
