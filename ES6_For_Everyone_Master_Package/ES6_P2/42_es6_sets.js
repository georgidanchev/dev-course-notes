// disable eslint rules for file only
/* eslint no-restricted-syntax: 0 */

/*
 * Basics of using sets.
 */

// Instantiate a new set.
const people = new Set()

// Add entries to the set.
people.add('wes')
people.add('Snickers')
people.add('Kait')

// See the current set.
console.log(people)

// Delete entry from the set.
people.delete('wes')

// See the reuslts.
console.log(people)

// Clear the entire array.
people.clear()

// Verify the results.
console.log(people)

console.log('-------------')

// ".values" is a set iterator
const it = people.values()

// Console logs the set of people as an array.
console.log(it)

// On this iterator you can either use
// ".next()" or feed it into a loop.

// We loop over every single entry in the
// sent and we print out the person name.
for (const person of people) {
  console.log(person)
}

// Both of these do the same thing.
console.log(people.keys())
console.log(people.entries())

console.log('------------')

/*
 * Example 2
 */

// Instantiate a new array set.
const students = new Set(['Wes', 'Kara', 'Tony'])

// Here we have an array of dog names.
const dogs = ['Snickers', 'Sunny']

// We can instantiate a new
// set with the dog array.
const dogSet = new Set(dogs)

console.log(dogSet)

console.log(students.has('Tony'))

/*
 * Example 3 - loging people coming for a brunch.
 */

// We instantiate the set.
const brunch = new Set()

// log people as they come in.
brunch.add('Wes')
brunch.add('Sarah')
brunch.add('Simone')

// Ready to open, move values.
const line = brunch.values()

// Serve awating customers.
console.log(line.next().value)
console.log(line.next().value)

// register the late customers.
brunch.add('Heather')
brunch.add('Snickers')

// They will still be registered and
// moved to the line variable.
console.log(line.next().value)
console.log(line.next().value)