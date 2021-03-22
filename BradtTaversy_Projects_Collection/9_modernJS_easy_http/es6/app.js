/* eslint-disable func-names, no-undef */

const http = new EasyHTTP();
const apiLink = 'https://jsonplaceholder.typicode.com/users';
const requestWrap = document.querySelector('[data-req-wrap]');
const alertBox = requestWrap.querySelector('[data-alert]');

// Sample user Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com',
};

const reqManager = (bool, res) => {
  // If we get a error or not.
  if (bool) {
    // Push error to console.
    console.log(bool);

    // Alert the user.
    alertBox.innerHTML += `
      <div class="alert error">Request was unsuccessful, please check the dev console.</div>
    `;
  } else {
    // Push response to console.
    console.log(res);

    // Alert the user.
    alertBox.innerHTML += `
      <div class="alert success">Request was successful, please check the dev console.</div>
    `;
  }

  // After 3 seconds remove the alert.
  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 3000);
};

// Get some data from the API.
const getSomeData = () => {
  http
    .get(apiLink)
    .then(res => reqManager(false, res))
    .catch(err => reqManager(true, err));
};

// Push a new post to the API.
const postSomeDate = () => {
  http
    .post(apiLink, data)
    .then(res => reqManager(false, res))
    .catch(err => reqManager(true, err));
};

// Mutate/modify a entry on the API.
const putSomeDate = () => {
  http
    .put(`${apiLink}/2`, data)
    .then(res => reqManager(false, res))
    .catch(err => reqManager(true, err));
};

// Delete an entry from the API.
const deleteSomeData = () => {
  http
    .delete(`${apiLink}/2`, data)
    .then(res => reqManager(false, res))
    .catch(err => reqManager(true, err));
};

const clickProcessor = (e) => {
  // Event delegation, capturing which
  // button was pressed, and calling func.
  if (e.target.hasAttribute('data-ajax')) {
    switch (e.target.dataset.ajax) {
      case 'get':
        getSomeData();
        break;

      case 'post':
        postSomeDate();
        break;

      case 'put':
        putSomeDate();
        break;

      case 'delete':
        deleteSomeData();
        break;

      default:
        // In case someone added a new button and the
        // logic is not setup right. This wil fire up,
        // and help them debug the logic.
        console.error('Error: wrong attribute passed.');
    }
  }
};

// Event listener on the parent of the buttons.
requestWrap.addEventListener('click', clickProcessor);
