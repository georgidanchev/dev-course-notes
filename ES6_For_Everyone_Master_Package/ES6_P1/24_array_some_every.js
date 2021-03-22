const ages = [32, 18, 23, 31];

/**
 * example 1 - array.some
 */

// are some of the numbers euqal or bigger than 18?
const adultPresent = ages.some(age => age >= 18);

// returns true
console.log(adultPresent);

/**
 * example 2 - array.every
 */

// are all the numbers bigger than 19? 
const areAllOldEnought = ages.every(age => age >= 19);

// returns false
console.log(areAllOldEnought);