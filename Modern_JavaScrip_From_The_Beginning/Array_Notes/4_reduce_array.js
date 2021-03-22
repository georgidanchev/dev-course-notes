/* eslint-disable */

const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/**
 * Reduce - you can reduce the array. E.g. add evetything
 * togheter or take away all numbers from each other etc.
 */

// The es5 way of doing reduce, by having
// variable that we can add data onto
// with each iteration of the foor loop.
let ageSum = 0;
for(let i = 0; i < ages.length; i++) {
  ageSum += ages[i]
}
console.log(ageSum)

// Arrow function, which looks just
// as intimidating to the es5 one.
const ageSum2 = ages.reduce((total, age) => {
  // Add age to total and return
  // on every loop to get total.
  return total + age
  // we start from 0.
}, 0)
console.log(ageSum2)

// The shorthand way of doing reduce.
const ageSum3 = ages.reduce((total, age) => total + age, 0)
console.log(ageSum)

//
// Get the total years for all the companies
//

// This takes the lenght of time of each 
// company and adds it all togheter.
const totalYears = companies.reduce((total, company) => {
  return total + (company.end - company.start)
}, 0)
console.log(totalYears)

// The shorthand way of doing this with implicit return.
const totalYears2 = companies.reduce((total, company) => total + (company.end - company.start), 0)
console.log(totalYears2)

