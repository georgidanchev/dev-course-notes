const form = document.querySelector('form');

// Set local storage item.
localStorage.setItem('name', 'John');
localStorage.setItem('age', '30');

// Set session storage item.
sessionStorage.setItem('name', 'Beth');

// Get from storage.
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

console.log(name, age);

// Remove from storage.
localStorage.removeItem('name');

// Remove all entries from the storage.
// localStorage.clear();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let tasks;
  const task = document.getElementById('task').value;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  console.log('task saved');
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach((task) => {
  console.log(task);
});
