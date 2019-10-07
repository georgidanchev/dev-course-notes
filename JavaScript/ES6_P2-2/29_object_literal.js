const first = 'snickers';
const last = 'bos';
const age = 2;
const breed = 'King Charles Cav';

/**
 * Example 1 - create object from varaibles.
 */

// The obious way of doing this.
const dog1 = {
  firstName: first,
  lastName: last,
  dogAge: age,
  dogBreed: breed,
}

// We can usethe shorthand way if
// both the variables and the  
// values have the same names.
const dog2 = {
  first,
  last,
  age,
  breed,
  // extra undeclared data.
  pals: ['hugo', 'sunny']
}

// console log both objects.
//console.log(dog1);
//console.log(dog2);

/**
 * Example 2 - example of functions object
 */

// we begin with the obvious way 
const modal = {
  create: function (selector) {

  },
  open: function (content) {

  },
  close: function (goodBye) {

  },
}

// There is a better shorthand way
const modal2 = {
  create(selector) {

  },
  open(content) {

  },
  close(goodBye) {

  },
}

/**
 * Example 3 - Build object from variables and functions
 */

// color inverting function, duh.
function invertColor(color) {
  return '#' + ("000000" + (0xFFFFFF ^ parseInt(color.substring(1), 16)).toString(16)).slice(-6);
}

// sample variables.
const key = 'pocketColor';
const value = '#ffc600';

// tShirt object, has color key and value
// and the inverted key and value.
const tShirt = {
  [key]: value,
  [`${key}Opposite`]: invertColor(value)
};

// console log the tShirt object
//console.log(tShirt);

/**
 * Example 4 - Join two arrays into one object.
 */

const keys = ['size', 'color', 'weight'];
const values = ['medium', 'red', 100];

// Here we combine the the arrays. One has 
// the key name and other has the key value.
const shirt = {
  [keys.shift()]: values.shift(),
  [keys.shift()]: values.shift(),
  [keys.shift()]: values.shift(),
}

// Console log the shirt object.
console.log(shirt);