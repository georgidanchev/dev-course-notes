const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');
const output = document.getElementById('output');

// Get local text file data.
const getText = () => {
  fetch('test.txt')
    .then(res => res.text())
    .then((data) => {
      console.log(data);
      // Output the text content.
      output.innerHTML = data;
    })
    .catch(err => console.error(err));
};

// Get local json data.
const getJson = () => {
  fetch('test.json')
    .then(res => res.json())
    .then((data) => {
      console.log(data);

      // Loop through each entry.
      let outputData = '';
      data.forEach((post) => {
        outputData += `<li>${post.title}</li>`;
      });
      output.innerHTML = outputData;
    })
    .catch(err => console.error(err));
};

// Get external api data.
const getExternal = () => {
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then((data) => {
      console.log(data);

      // Loop through each entry.
      let outputData = '';
      data.forEach((user) => {
        outputData += `<li>${user.login}</li>`;
      });
      output.innerHTML = outputData;
    })
    .catch(err => console.error(err));
};

btn1.addEventListener('click', getText);
btn2.addEventListener('click', getJson);
btn3.addEventListener('click', getExternal);
