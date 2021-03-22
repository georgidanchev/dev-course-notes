/* eslint-disable func-names, no-undef */

// Instantiate our lib.
const http = new EasyHTTP();

// Sample data.
const data = {
  title: 'Custom Post',
  body: 'This is a custom post',
};

const requestWrap = document.querySelector('[data-req-wrap]');
const alertBox = requestWrap.querySelector('[data-alert]');
const apiLink = 'https://jsonplaceholder.typicode.com/posts';

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
  http.get(`${apiLink}/1`, (err, post) => {
    reqManager(err, post);
  });
};

// Push a new post to the API.
const postSomeDate = () => {
  http.post(`${apiLink}`, data, (err, post) => {
    reqManager(err, post);
  });
};

// Mutate/modify a entry on the API.
const putSomeDate = () => {
  http.put(`${apiLink}/1`, data, (err, post) => {
    reqManager(err, post);
  });
};

// Delete an entry from the API.
const deleteSomeData = () => {
  http.delete(`${apiLink}/1`, (err, post) => {
    reqManager(err, post);
  });
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
