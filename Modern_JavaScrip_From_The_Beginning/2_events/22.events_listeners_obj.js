const clearBtn = document.querySelector('.clear-tasks');

// You can prevent default with
// using # in the hmtl href.

// Event listener with anonymous function.

// clearBtn.addEventListener('click', (e) => {
//   console.log('hello world...');
//   // e.preventDefault();
// });

// Event listener with named function.

// const onClick = () => {
//   console.log('Hello World!');
// };

// clearBtn.addEventListener('click', onClick);

// Exploring the Event object.

const onClick2 = (e) => {
  let val;
  val = e;

  // Event target element.
  val = e.target;

  // String of all classes.
  val = e.target.className;

  // Collection of all classes.
  val = e.target.classList;

  // Change the text on click.
  // e.target.innerText = 'Hello';

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // press pos relative to the window.
  val = e.clientY;
  val = e.clientX;

  // press pos relative to the button.
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
};

clearBtn.addEventListener('click', onClick2);
