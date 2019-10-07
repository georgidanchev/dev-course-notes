// disable few eslint rules for file only
/* eslint no-restricted-syntax: 0 */
/* eslint prefer-const: 0 */

/**
 * WeakSet
 */

let dog1 = {
  name: 'Snickers',
  age: 3,
}

let dog2 = {
  name: 'Sunny',
  age: 1,
}

const weakSouce = new WeakSet([dog1, dog2])

// You cannot iterate over a weak set.
// The below loop will cuase error!
//
// for (const dog of weakSouce) {
//   console.log(dog)
// }

// Console log weakSouce weakset.
console.log(weakSouce)

// Set dog1 to null/delete.
dog1 = null

// After setting dog1 to null
// we still get it referenced.
console.log(weakSouce)

// Garbage collection takes few seconds
// after which the set has been deleted.
setTimeout(() => {
  console.log(weakSouce)
}, 1000)

/**
 * WeakMap
 */

// Example objects.
let dog3 = {
  name: 'Snickers',
}
let dog4 = {
  name: 'Sunny',
}

// Create the strong and the weak sets.
const strong = new Map()
const weak = new WeakMap()

// Set the strong and the weak sets.
strong.set(dog3, 'Snickers is the best!')
weak.set(dog4, 'Sunny is the 2nd best!')

console.log('-------------')

// The first has accessible Has size property.
// The second doesn't have size property.
console.log(strong)
console.log(weak)

// Set both strong and weak to null.
dog3 = null
dog4 = null

// The results: After a second the strongmap
// still holds a reference to the deleted
// varaible where the weak one does not.
setTimeout(() => {
  console.log('strongMap:')
  console.log(strong)
  console.log(dog3)
  console.log('weakMap:')
  console.log(weak)
  console.log(dog4)
}, 1000)