
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input.
taskInput.value = '';

const submitForm = (e) => {
  // Stop form submission/redirection.
  e.preventDefault();
  // Log out event type.
  console.log(`Event Type: ${e.type}`);
  // Get input value.
  console.log(taskInput.value);
};

const runEvent = (e) => {
  // Log out event type.
  console.log(`Event Type: ${e.type}`);
  // Get input value.
  console.log(taskInput.value);
  // set value to heading.
  heading.innerText = e.target.value;
};

// Gets triggered when you submit the form.
form.addEventListener('submit', submitForm);

// Gets triggered when you press the key.
taskInput.addEventListener('keydown', runEvent);
// Gets triggered when you release the key.
taskInput.addEventListener('keyup', runEvent);

// When you click inside a input field.
taskInput.addEventListener('focus', runEvent);
// When you click outside a input field.
taskInput.addEventListener('blur', runEvent);

// When you cut/paste content inside the input.
taskInput.addEventListener('cut', runEvent);
taskInput.addEventListener('paste', runEvent);

// Gets triggered by any input event.
taskInput.addEventListener('input', runEvent);

// When you change select dropdown.
if (select != null) {
  select.addEventListener('change', runEvent);
}
