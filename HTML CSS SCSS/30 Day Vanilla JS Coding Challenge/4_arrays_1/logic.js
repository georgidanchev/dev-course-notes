// Disable few eslint rules for
// this this tutorial only.
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-undef */

//
// Exercises start HERE. :)
//

/* Array.prototype.filter()
 * 1. Filter the list of inventors for
 * those who were born in the 1500's
 */

// // Get people who where born in or after
// // 1500s right up untill 1600.
// const fifteen = inventors.filter((inventor) => {
//   if (inventor.year >= 1500 && inventor.year <= 1600) {
//     return true;
//   }
// });

// Simplify the code. statement after "=>" returns boolen
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1600)

// console table log
console.table(fifteen)


/* Array.prototype.map()
 * 2. Give us an array of the inventors' first and last names
 */

// This will get any array of the full names of each inventor
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`)

console.table(fullNames)

/* Array.prototype.sort()
 * 3. Sort the inventors by birthdate,
 * oldest to youngest
 */

// const ordered = inventors.sort(function (a, b) {
//   if (a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1))

console.table(ordered)

/* Array.prototype.reduce()
 * 4. How many years did all the inventors live?
 */

const totalYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0)

console.log(totalYears)


/*
 * 5. Sort the inventors by years lived
 */

// const oldest = inventors.sort(function (a, b) {
//   const lastGuy = a.passed - a.year;
//   const nextGuy = b.passed - b.year;
//   if (lastGuy > nextGuy) {
//     return -1;
//   } else {
//     return 1;
//   }
// });

const oldest = inventors.sort((a, b) => {
  const lastGuy = a.passed - a.year
  const nextGuy = b.passed - b.year
  return lastGuy > nextGuy ? -1 : 1
})

console.table(oldest)


/* 6. create a list of Boulevards in Paris
 * that contain 'de' anywhere in the name
 * https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
 */

const category = document.querySelector('.mw-category')
if (category != null) {
  const links = Array.from(category.querySelectorAll('a'))
  const de = links
    .map(link => link.textContent)
    .filter(streetName => streetName.includes('de'))
}


/* 7. sort Exercise
 * Sort the people alphabetically
 * by last name
 */

const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ')
  const [bLast, bFirst] = nextOne.split(', ')
  return aLast > bLast ? 1 : -1
})

console.log(alpha)


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car',
  'truck',
]

const transportation = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0
  }
  obj[item]++
  return obj
}, {})

console.log(transportation)