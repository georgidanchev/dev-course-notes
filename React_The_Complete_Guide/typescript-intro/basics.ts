// Primitives: numbers, strings, boolean, null, undefined
// More complex types: arrays, objects
// Functions types, parameters

// --- Primitives ---

// We want the lower cased number, not capital case. As
// capital case points to the object not the primitive

let age: number

age = 12.1

let userName: string

userName = "Max"

let isInstructor: boolean

isInstructor = true

// --- More complex types ---

// Array of strings

let hobbies: string[]

hobbies = ["Sports", "Cooking"]

// --- Type definition aliases ---

type Person = {
  name: string
  age: number
}

// --- Predefined object ---

let person: Person

person = {
  name: "Max",
  age: 32,
}

// --- Array of predefined objects ---

let personArray: Person[]

// ---Type interface ---
// Union type: number or string

let course: string | number = "React - The complete guide"

course = 123

// --- Functions & types ---

function add(a: number, b: number) {
  return a + b
}

function printSomething(value: any) {
  console.log(value)
}

// --- Generics ---

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array]
  return newArray
}

const demoArray = [1, 2, 3]

const updatedArray = insertAtBeginning(demoArray, -1) // [-1, 1 ,2 ,3]

// inferring types
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')


// updatedArray[0].split('') // type error

