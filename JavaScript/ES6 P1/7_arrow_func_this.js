/* 
// In here you will find why sometimes
// we might use the regular fundctions 
// insted of the fancy arrow functions.
*/

const box = document.querySelector('.box');

/*
// scenario 1
// using regular function insted of arrow function.
*/

// this is the nromal way of adding way 
// an event listener to an ojbect. 

box.addEventListener('click', function () {
  // the keyword this will point the to object
  // box, if anything inside the box is pressed 
  // output referenced box. This is very useful.
  console.log(this);
  // console output: box.

  let first = 'opening';
  let second = 'open';

  if (this.classList.contains(first)) {
    // es6 way of swapping data of two variable.
    [first, second] = [second, first];
  }

  // first func action.
  this.classList.toggle(first);

  // timeout function 1.
  setTimeout(function () {
    // we are looking to add the class open 500ms after
    // the class opening. I know it's a really stupid way 
    // to do this, but please bare with this example.
    console.log(this);
    // The output of 'this' is now the window object.
    // whis is not what we need.
  }, 500);

  // timeout function 2.
  setTimeout(() => {
    // second func action.
    this.classList.toggle(second);
  }, 500);
});


/*
// scenario 2
// If we were to use arrow function with the keyword 'this'.
*/

/*box.addEventListener('click', () => {
  // compared to our first example, this will output 
  // the window object. In arrow function doesn't bind
  // the keyword 'this' to this particlar block of code. 
  console.log(this);
});*/