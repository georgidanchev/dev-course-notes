// Select all inputs on the page
const inputs = document.querySelectorAll('.controls input');

// Input change handling function
function handleUpdate() {
  // If we have sizing units, pass them, else pass nothing.
  const suffix = this.dataset.sizing || '';
  // Change the variables directly on the root property
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Event listener
inputs.forEach(input => input.addEventListener('input', handleUpdate));