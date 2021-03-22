
/* eslint-disable */

const job = 'Web Developer';
const city = 'Miami';
const name = 'John';
const age = 31;
let html;

// Without template strings (es5)
html = '<ul><li>name: ' + name + '</li><li>age: ' + age + '</li><li>Job: ' + job + '</li><li>city: ' + city + '</li></ul>';

const hello = () => {
  return 'hello';
}

// Width template strings (es6)
html = `
  <ul>
    <li>name: ${name}</li>
    <li>age: ${age}</li>
    <li>job: ${job}</li>
    <li>city: ${city}</li>
    <li>expression: ${2 + 2}</li>
    <li>function: ${hello()}</li>
    <li>conditional: ${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;