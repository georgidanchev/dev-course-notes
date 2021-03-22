// disable eslint rules for file only
/* eslint no-restricted-syntax: 0 */

/*
 * object entries and object keys
 */

const inventors = {
  backpacks: 10,
  jeans: 23,
  hoodie: 4,
  shoes: 11,
}

// make a nav for the inventroy
const nav = Object.keys(inventors)
  .map(item => `<li>${item}</li>`).join('')
console.log(nav)

// tell us how many values we have
const totalInventory = Object.values(inventors)
  .reduce((a, b) => a + b)
console.log(totalInventory)

console.log('---------------')


// print an invetory list with numbers
Object.entries(inventors).forEach(([key, val]) => {
  console.log(key, val)
})

console.log('---------------')

// print an inventors list which numbers
for (const [key, val] of Object.entries(inventors)) {
  console.log(key, val)
  if (key === 'jeans') break
}