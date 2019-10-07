// disable eslint rules for file only
/* eslint no-restricted-syntax: 0 */

const dogs = new Map()

dogs.set('Snickers', 3)
dogs.set('Sunny', 2)
dogs.set('Hugo', 10)

// Check if map contains a set
console.log(dogs.has('Snickers'))

// Gets the content value of a set
console.log(dogs.get('Snickers'))

// Delete the set
dogs.delete('Hugo')

// confirm map contents.
console.log(dogs)

// Looping over a map of sets

console.log('--- Foreach\' loop ---')

// 'Foreach' loop
dogs.forEach((val, key) => console.log(val, key))

console.log('--- For of\' loop ---')

// 'For of' loop
for (const dog of dogs) {
  console.log(dog)
}

console.log('---For of\' loop---')

// get the key(name) and value(number)
for (const [key, val] of dogs) {
  console.log(key, val)
}

// clear the whole map
dogs.clear()

// verify
console.log(dogs)