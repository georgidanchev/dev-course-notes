/* eslint-disable func-names */
// WE are using a lot of old functions
// where we have to bind this to the
// function.

// References
const button = document.getElementById('button');

//
const loadData = () => {
  // Create an XHR object
  const xhr = new XMLHttpRequest();

  // OPEN - Specify the request type.
  xhr.open('GET', 'data.txt', true);

  // Log out current state.
  console.log(`readyState, ${xhr.readyState}`);

  /*
  // When you sen the request and wait for
  // a response you can use this state to
  // update users with some sort of a UI.
  */
  xhr.onprogress = function () {
    console.log(`readyState, ${xhr.readyState}`);
    // Optional - used for spinners/loaders
  };

  // Deal with the response.
  xhr.onload = function () {
    // If we have successful request.
    if (this.status === 200) {
      // console log the response.
      console.log(`success: ${this.responseText}`);
      // Set response text to h1 html.
      document.getElementById('output').innerHTML = `
      <h1>${this.responseText}</h1>`;
    }
  };

  // This below is how it used to be done.
  // xhr.onreadystatechange = function () {
  //   console.log(`readyState, ${xhr.readyState}`);
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(`success: ${this.responseText}`);
  //   }
  // };

  // If we get an error.
  xhr.onerror = function () {
    console.log('error');
  };

  // Send the request.
  xhr.send();

  /*
    readyState Values
    0: request not initialized.
    1: server connection established.
    2: request received.
    3: processing request.
    4: request finished.

    HTTP Statuses
    202: 'OK'
    403: 'Forbidden'
    404: 'Not Found'
  */
};

// Event Listener
button.addEventListener('click', loadData);
