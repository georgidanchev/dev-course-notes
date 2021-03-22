// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Create a task.
const createTask = (taskName) => {
  // Create li element.
  const li = document.createElement('li');
  // Add class name.
  li.className = 'collection-item';
  // Create a new text node for the li.
  li.appendChild(document.createTextNode(taskName));
  // Create a new link element.
  const link = document.createElement('a');
  // add class to it.
  link.className = 'delete-item secondary-content';
  // add icon html.
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append link to li.
  li.appendChild(link);
  // Append li to ul.
  taskList.appendChild(li);
};

// Onload check if we have saved tasks.
const initTasksCheck = () => {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  return tasks;
};

// Get tasks from local storage.
const getTasks = () => {
  const tasks = initTasksCheck();
  tasks.forEach((task) => {
    createTask(task);
  });
};

const saveTaskInLocalStorage = (task) => {
  const tasks = initTasksCheck();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const removeTaskFromLocalStorage = (taskItem) => {
  const tasks = initTasksCheck();
  tasks.forEach((task, index) => {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const clearAllTaskFromLocalStorage = () => {
  localStorage.removeItem('tasks');
};

const addTask = (e) => {
  e.preventDefault();
  if (taskInput.value === '') {
    alert('add a task');
  }
  // Create the task.
  createTask(taskInput.value);
  // Store in Local Storage.
  saveTaskInLocalStorage(taskInput.value);
  // Clear the input
  taskInput.value = '';
};

const removeTask = (e) => {
  if (e.target.parentElement.classList.contains('delete-item')) {
    const taskItem = e.target.parentElement.parentElement;
    removeTaskFromLocalStorage(taskItem);
    taskItem.remove();
  }
};

const clearAllTasks = () => {
  // The easy way.
  // taskList.innerHTML = '';

  // The better way.
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // According to: https://jsperf.com/innerhtml-vs-removechild/47
  clearAllTaskFromLocalStorage();
};

const filterTasks = (e) => {
  const text = e.target.value.toLowerCase();
  // loop through all tasks.
  document.querySelectorAll('.collection-item').forEach((task) => {
    const [item, thisTask] = [task.firstChild.textContent, task];
    if (item.toLowerCase().indexOf(text) !== -1) {
      thisTask.style.display = 'block';
    } else {
      thisTask.style.display = 'none';
    }
  });
};

// Load all event listeners.
const loadEventListeners = () => {
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add a task event.
  form.addEventListener('submit', addTask);
  // Remove a task event.
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearBtn.addEventListener('click', clearAllTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
};

// Load all event listeners.
loadEventListeners();
