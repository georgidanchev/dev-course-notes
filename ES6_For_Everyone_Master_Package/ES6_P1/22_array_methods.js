/**
 * Example 1 - when we need propery array
 */

// on this page you will see different ways of
// converting nodes list or objects list to 
// a true array.

// This will be a node list, not a true array.
const people = document.querySelectorAll('.people p');

// crate a new array variable from people.
const peopleArray = Array.from(people);

// confirm the array.
//console.log(peopleArray);

// Having converted this node list to an array
// we can use array method like .map on it.
const names = peopleArray.map(person => person.textContent);


// Vairent 2 - shorter way of doing this conversion.
const people2 = Array.from(document.querySelectorAll('.people p'));
//console.log(people2);


/**
 * Example 2 - Array from loop function
 */

const peopleArray2 = Array.from(people, person => {
  // we pass the people nodelist. Then
  // loop over each of people and we 
  // extract the person text content
  // and pass it into the array.
  return person.textContent;
});

// verify the result.
//console.log(peopleArray2);


/**
 * Example 2 - "Array.from" in a sum all function
 */

function sumAll() {
  const nums = Array.from(arguments);
  return nums.reduce((prev, next) => prev + next, 0);
}

// verify the function.
//console.log(sumAll(2, 43, 58, 45, 51, 62, 13, 44, 235));


/**
 * Example 3 - simple way of creatine an array.
 */

// This creates an array of the stuff you pass.
const ages = Array.of(23, 19, 21, 41, 34);

// we have an array of thse numbers.
//console.log(ages);


/**
 * Example 4 - Shopping list array
 */

// we have the ingredients for the pizza.
const deepDish = {
  pizzaName: 'DeepDish',
  size: 'Medium',
  ingredients: ['Marinara', 'Italian Sausage', 'Dough', 'Cheese']
};

// we want to build shopping list that includes it. we have an array
// with our items, plus pread of the deepDish pizza ingredients.
const shoppingList = ['milk', 'flour', ...deepDish.ingredients];

// Console log the list.
console.log(shoppingList);

/**
 * Example 5 - Removing mean a comment
 */

const comments = [{
    id: 209384,
    text: 'I love your dog!'
  },
  {
    id: 523423,
    text: 'Cutte!!'
  },
  {
    id: 632429,
    text: 'You are so dumb'
  },
  {
    id: 192834,
    text: 'Nice work on this wes!'
  }
];

// We have an idea of a comment.
const id = 632429;

// First we find that particlar comment.
const commentIndex = comments.findIndex(comment => comment.id === id);

// Then we spraed a splice of the array before and 
// after the comment removing it in the process.
const newComment = [...comments.slice(0, commentIndex), ...comments.slice(commentIndex + 1)];

//console.log(newComment);