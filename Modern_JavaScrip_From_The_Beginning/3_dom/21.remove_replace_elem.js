/* eslint-disable prefer-destructuring, no-multi-assign */

// CREATE A ELEMENT
const newHeading = document.createElement('h2');

// Add heading id
newHeading.id = 'task-title';

// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the heading we want to replace
const oldHeading = document.getElementById('task-title');

// Parent
const cardAction = document.querySelector('.card-action');

// REPLACE ELEMENT
cardAction.replaceChild(newHeading, oldHeading);

// Verify.
// console.log(newHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove a node
lis[0].remove();

// Remove a child element
list.removeChild(lis[3]);

// CLASSES & ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// A string of all the classes.
val = link.className;
// A node list of all the classes.
val = link.classList;
// Get the first class.
val = link.classList[0];

// Add/remove class.
link.classList.add('test');
link.classList.remove('test');

// Set link to val.
val = link;

// Get the href attribute
val = link.getAttribute('href');

// Set the href attribute.
val = link.setAttribute('href', 'http://google.com');

// Set title attribute.
link.setAttribute('title', 'Google');

// Check if element has href.
val = link.hasAttribute('href');

// Remove antribute.
link.removeAttribute('title');

console.log(val);
