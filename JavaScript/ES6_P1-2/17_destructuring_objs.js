/**
 * Example 1 
 * Destructuring - extrating data from arrays,
 * objects, maps and sets into their own variables. 
 */

// person object
const person = {
  first: 'Wes',
  last: 'Bos',
  country: 'Canada',
  city: 'Hamilton',
  twitter: '@wesbos'
}

// Old ways of making top level variables 
// wich access particlar data from something, 
// like our person object
const first_name = person.first;
const last_name = person.last;

// This is the ES6 way of destructuring
const {
  first,
  last
} = person;

// Loging out the variables with template litrals
console.log(`${first} ${last}`);

/**
 * Example 2
 */

// Example of more sophisticated api like data
const wes = {
  first: 'Wes',
  last: 'Bos',
  links: {
    social: {
      twitter: 'https://twitter.com/wesbos',
      facebook: 'https://facebook.com/wesbos.developer',
    },
    web: {
      blog: 'https://wesbos.com'
    }
  }
};

//
// Varient 1
//

// ES6 way of destructuring from our data 
const {
  twitter,
  facebook
} = wes.links.social;

// Console logging one of the results.
console.log(twitter);

//
// Varient 2
//

// destructuring and re-assigning variables
const {
  // First variable is one coming and 
  // the one after is the one is the one 
  // which we are assigning name to.
  twitter: tweet,
  facebook: fb
} = wes.links.social;

// Console logging one of the results.
console.log(fb);

//
// Varient 3 
//

// Example object which has only partial data which
// we need to add stuff to while destructuring.
const settings = {
  width: 300,
  color: 'Black'
}

// Here we have new varaibles which are assigned default values
// the magic is that if on of the variables matches with our
// object, it will take it's data and not the default one.
const {
  width = 125, height = 100, color = 'blue', fontsize = 25
} = settings;

// console log output: 300.
console.log(width);

//
// Varient 4
//

// We have variable which is setting default values and 
// new variable names while pulling form something that
// we have typed up (second part). 
const {
  // first part is the varaible that's being picked up,
  // the second is the one we are assigning globally,
  // and the final value is the default value.
  w: width2 = 400,
  h: height2 = 500
} = {
  w: 800
}

// console log output: 800.
console.log(width2);