const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// input error message

const showError = (input, message) => {
  const formControl = input.parentElement;
  const smallText = formControl.querySelector('small');
  smallText.innerText = message;

  if(formControl.classList.contains('success')) {
    formControl.classList.remove('success');
  }
  if(!formControl.classList.contains('error')) {
    formControl.classList.add('error');
  }
}


// input validation success

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';

  if(!formControl.classList.contains('success')) {
    formControl.classList.add('success');
  }
  if(formControl.classList.contains('error')) {
    formControl.classList.remove('error');
  }
}


// check if email is valid

function validateEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(re.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, 'Email is not valid');
  }
}

// check password match

const checkPasswordMatch = (input1, input2) => {
  if(input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}

// get field name

const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// check required fields

const checkRequired = (inputArray) => {
  inputArray.forEach(input => {
    if(input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`)
    } else {
      showSuccess(input);
    }
  });
}


// check input length

const checkInputLength = (input, min, max) => {
  if(input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}


// event listener

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkInputLength(username, 3, 15);
  checkInputLength(password, 6, 25);
  validateEmail(email);
  checkPasswordMatch(password, password2);
});