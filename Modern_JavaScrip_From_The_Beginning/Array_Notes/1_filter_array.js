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
 * Foreach - synchronous callback (calls are done
 * one after another and not all at the same time)
 */

// This is the standart es5 for loop.
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i].name)
}

// This for loop does exactly the same
// thing as the one above, but looks
// much nicer then the first example.
companies.forEach(function(company) {
  console.log(company)
}) 

// A very interesting note! You can pass each 
// value the array as standart, you can also,
// pass the index of the array and the entire
// array aswell. This is so amazing!
companies.forEach((company, index, array) => {
  console.log(company, index, array)
}) 

/**
 * Filter - filter stuff out from the array.
 * or like in our case, filter-in only ages 
 * which are 21 or higher only.
 */

// This is the old way of doing a filter array
// as you can see it's very clunky and ungly.
let canDrink = []
for(let i=0; i<ages.length; i++) {
  if(ages[i] >= 21) {
    canDrink.push(ages[i])
  }
}
console.log(canDrink)

// Using this filter function we loop throught
// the entire array and if the condition is met
// then return true. This does exactly the same 
// thing as our es5 example but in much more
// elegant way.
const canDrink2 = ages.filter(function(age){
  if(age > 21) {
    return true
  }
})
console.log(canDrink2)

// This is the most elegant way of doing our
// task. We simply have a lone liner with a
// implicit return. It does the exactly the 
// same thing as our previous functions.
const canDrink3 = ages.filter(age => age >= 21)
console.log(canDrink3)

//
// Filter - get reatil companies only  
//

// These function do exactly the same thing as the
// once above, usinga string insted of integer.
const retailCompanies = companies.filter(function(company) {
  if(company.category === 'Retail') {
    return true
  }
})
console.log(retailCompanies)

// Shorthand example.
const retailCompanies2 = companies.filter(company => company.category === 'Retail')
console.log(retailCompanies2)

//
// Filter - get 80s companies only 
//

// My attempt at the challenge, first I got 
// the years totally wrong, logicly the function
// is working just as it should. 
const companies80s = companies.filter(company => {
  if(company.start >= 1980 && company.start <= 1989) {
    return true
  }
})

// This was Brad's way of doing the challenge. 
// It's done in a much more obviously way. 
const companies80s2 = companies.filter(company => (company.start >= 1980 && company.start < 1990))

// The both do the same thing.
console.log(companies80s)
console.log(companies80s2)

//
// Filter - companies that lasted more than 10 years.
//

// We get teh end date and subtract the start date
// to get the lenght, we also check if that number 
// is bigger then or equal to 10 years.
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10))

console.log(lastedTenYears)