// Copying a primitive: bool, integer, string

let number = 1

const num2 = number;

number = 9000

console.log(num2)


// Copying reference type: objects, arrays

const person = {
  name: 'Max'
}

const secondPerson = {
  ...person
}

person.name = "Manu"

console.log(secondPerson);