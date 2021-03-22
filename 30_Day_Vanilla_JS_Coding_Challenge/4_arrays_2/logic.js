// Disable few eslint rules for
// this this tutorial only.
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-undef */

/*
 * Some and Every Checks
 * Array.prototype.some() // is at least one person 19 or older?
 */

// const isAdult = people.some(function(person) {
//   const currentYear = (new Date()).getFullYear()
//   if (currentYear - person.year >= 19) {
//     return true
//   }
// })

// Simplification #1
// const isAdult = people.some((person) => {
//   const currentYear = (new Date()).getFullYear()
//   return currentYear - person.year >= 19
// })

// Simplification #2
// In this Example we check if any of the
// array entires meets our cratieria.
const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19)

// You can console log something as object by adding
// curly brackets around it to get extra info.
console.log({
  isAdult,
})

/*
 * is everyone 19 or older?
 * Array.prototype.every()
 */

// Check if every entry in the array meets our criteria
const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19)

// Console output: false.
console.log(allAdults)


/*
 * Array.prototype.find()
 */

// const comment = comments.find(function (comment) {
//   if (comment.id === 823423) {
//     return true
//   }
// })

// Simplification #1
// This code finds a entry in an array based on id.
const targetComment = comments.find(comment => comment.id === 823423)

console.log(targetComment)

/*
 * Array.prototype.findIndex()
 */

const index = comments.findIndex(comment => comment.id === 823423)

console.log(index)
comments.splice(index, 1)
console.table(comments)

const newComments = [
  ...comments.splice(0, index),
  ...comments.splice(index + 1),
]

console.table(newComments)