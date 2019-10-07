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
 * Map - Creates new array with results of 
 * the function with arguments we provide.
 */

// Loop over the array of objects and create
// an array of the company names.
const companyNames = companies.map(function(company){
  return company.name
})
console.log(companyNames)


// An intresting example when is that we can
// return 1 for every entry of the array and
// have another array full of 1s. This simply
// shows that you can return any data.
const testMap = companies.map((company)=> 1)
console.log(testMap)


// Get array of the company name, and in
// square brakets the start and end year.
const testMap2 = companies.map((company) => {
  return `${company.name} [${company.start} - ${company.end}]`
})
console.log(testMap2)


// This does the same thing as above, but
// in a short hand way w/t implicit return.
const testMap3 = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
console.log(testMap3)


// Simple math functions that return our
// age with some sort of a augmentation.
const agesSqr = ages.map(age => Math.sqrt(age))
const agesTimesTwo = ages.map(age => age * 2)
console.log(agesSqr)
console.log(agesTimesTwo)


// We can also chain these functions
// to get deepr into the data. or in
// our case just play around with it.
const agesSqrTimesTwo = ages 
  .map(age => Math.sqrt(age))
  .map(age => age * 2)
console.log(agesSqrTimesTwo)
