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
 * Use of all for methods from the previous files.
 * It's not pratica example, but it shows  you
 * the possibilities of using this.
 */

const combined = ages
  // Mutiply each by 2.
  .map(age => age * 2)
  // Filter out all under 40.
  .filter(age => age >= 40)
  // Sort from low to high.
  .sort((a, b) => a - b)
  // add it all togheter.
  .reduce((a,b) => a + b, 0)

console.log(combined)
