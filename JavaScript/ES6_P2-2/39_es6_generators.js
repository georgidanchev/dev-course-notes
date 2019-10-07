// disable eslint rules for file only
/* eslint no-restricted-syntax: 0 */

/*
 * Generetor function
 */

// It's the asterisk symbol that
// makes it generator function.
function* listPeople() {
  let i = 0
  yield i
  i++
  yield i
  i++
  yield i
  i++
}

const people = listPeople()

console.log(people.next())
console.log(people.next())
console.log(people.next())
console.log(people.next())

// example 2

const inventors = [{
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
  },
  {
    first: 'Max',
    last: 'Planck',
    year: 1858,
  },
]

function* loop(arr) {
  for (const item of arr) {
    yield item
  }
}

const inventorsGen = loop(inventors)

inventorsGen.next()


/**
 * example 3
 */

/*
// Looping throught a generators
*/
// We have a generator with bunch of yeilds.
function* lyrics() {
  yield 'But don\'t tell my heart'
  yield 'My achy breaky heart'
  yield 'I just don\'t think he\'d understand'
  yield 'And if you tell my heart'
  yield 'My achy breaky heart'
  yield 'He might blow up and kill this man'
}

// We instantiate the generator.
const achy = lyrics()

// We use for of loop to loop throught
// each yield of the generator.
for (const line of achy) {
  console.log(line)
}