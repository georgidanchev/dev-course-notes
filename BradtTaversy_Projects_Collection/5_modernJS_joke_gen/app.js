// xhr object is old technology for making
// AJAX request but, I might need to deal
// with it at some point in the future.

// It's interesting that every browser
// seems to supports this API.

const getJokesBtn = document.querySelector('.get-jokes');
const jokeNum = document.querySelector('[data-num-input]');
const jokesOutPut = document.querySelector('.jokes');

const getJokes = (e) => {
  // Stop page refresh.
  e.preventDefault();

  // References & new xhr object.
  let num = parseInt(jokeNum.value, 10);
  const xhr = new XMLHttpRequest();

  if (num === 0) {
    num = 1;
  }

  // Defining the request.
  xhr.open('GET', `http://api.icndb.com/jokes/random/${num}`, true);

  // When we get response.
  xhr.onload = () => {
    if (xhr.status === 200) {
      const res = JSON.parse(xhr.responseText);
      let output = '';
      if (res.type === 'success') {
        res.value.forEach((joke) => {
          output += `
            <li>${joke.joke}</li>
          `;
        });
      } else {
        output += '<li>something went wrong... :(</li>';
      }
      jokesOutPut.innerHTML = output;
    }
  };

  // Send the request.
  xhr.send();
};

getJokesBtn.addEventListener('click', getJokes);
