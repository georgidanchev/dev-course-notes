// Disable eslint rule of this doc only.
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */


/*
 * Example 1 - integers and string
 */

let age = 100
let age2 = age
console.log(age, age2)
age = 200
console.log(age, age2)

let name = 'Wes'
let name2 = name
console.log(name, name2)
name = 'wesley'
console.log(name, name2)

// Here what happens when we copy
// on variable into another. We
// get the behoivour we expect.

// But we will get the a super wired behaviour
// when we try to do this very same thing
// with arrays and objects.

/*
 * example 2 - Duplicating arrays
 */

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy']

// this will make reference of the
// array and not a copy of it.
const team = players

// So making this change.
team[3] = 'Lux'

// Affects both arrays.
console.log(players, team)


// HERE are some solutions:

// When you slice with no perameters
// you get the fully array.
const team2 = players.slice()

// Another option is to concat the array to
// the end of an empty array to make a copy.
const team3 = [].concat(players)

// es6 spread to spread one array into another
const team4 = [...players]

// The best non es6 solution
const team5 = Array.from(players)


/*
 * example 3 - Objects duplication
 */

const person = {
  name: 'Wes Bos',
  age: 80,
}

// This makes a reference, and
// not a copy of the object.
const capitan = person

// Making a copy copy of object
// we use Object.assign, at the
// end we can also pass params.
const cap2 = Object.assign({}, person, {
  number: 99,
})

// You can use also spread operator.
// But eslint thinks of this as a
// parsing error. which is not cool. :D
const cap3 = {
  // ...person
}


/*
 * Object duplicating - more
 */

const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.dev',
  },
}

// This creates a shallow copy
const dev = Object.assign({}, wes)

dev.social.twitter = '@asdasdas'
console.log(dev.social.twitter)

// On this example, we changed
// twiter for dev and not wes
// but the cahnges are reflacted
// in the wes object aswell.
console.log(wes.social.twitter)

// To combat this we either have to get
// function which clones the object or
// use this handy hack to do it.
const dev2 = JSON.parse(JSON.stringify(wes))

// Verify the new object
console.log(dev2)