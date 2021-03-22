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
 * Sort - It allows you to sort the elements of an array.
 */

// Sort compnaies by the start year
const sortedCompanies = companies.sort((c1, c2) => {
  if(c1.start > c2.start) {
    return 1
  } else {
    return -1
  }
})
console.log(sortedCompanies)

// shorthand way of sorting. We do the same thing
// as above but we  implict return and turnarary
// operator to make everything look really nice!
const sortedCompanies2 = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
console.log(sortedCompanies2)


// Sort ages, from lowest to highest
// this first example sorts only by 
// the first digit.
const sortAges = ages.sort()
console.log(sortAges)


// To sort ages properly we use
// the 'a' and 'b' as arguments.
const sortAges2 = ages.sort((a, b) => a - b)
console.log(sortAges2)

// To reverse the order we use:
const sortAges3 = ages.sort((a, b) => b - a)
console.log(sortAges3)
