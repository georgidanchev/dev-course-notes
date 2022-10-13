// Copying a primitive: bool, integer, string

let number = 1

const num2 = number

number = 9000

console.log(num2)

// Copying reference type: objects

const person = {
  name: "Max",
}

const secondPerson = {
  ...person,
}

person.name = "Manu"

console.log(secondPerson)

// Copying reference type: Arrays

const numbersArray = [1, 2, 3]

const numbersArrayClone = [...numbersArray]

const doubleNumArray = numbersArray.map((num) => {
  return num * 2
})

console.log(numbersArray)

console.log(numbersArrayClone)

console.log(doubleNumArray)
