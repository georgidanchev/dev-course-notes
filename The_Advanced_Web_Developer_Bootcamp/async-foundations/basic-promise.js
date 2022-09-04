/* Example 1 - shows how promises work with dot then syntax */

// Storing a promise within a variable
const p1 = new Promise(function (resolve, reject) {
  resolve([1, 2, 3, 4, 5])
  reject("ERROR")
})

// Once promise is resolved we console log it
p1.then((arr) => {
  console.log("promise p1 resolved with data: ", arr)
}).catch((err) => {
  console.error(err)
})

/* Example 2 - with 50% chance of resolving with error */

const p2 = new Promise((resolve, reject) => {
  const num = Math.random()
  if (num < 0.5) {
    resolve(num)
  } else {
    reject(num)
  }
})

p2.then((result) => {
  console.log("Success: ", result)
}).catch((error) => {
  console.error("Error: ", error)
})

/* Example 3 - resolve int with a time out */

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomInt = Math.floor(Math.random() * 10)
    resolve(randomInt)
  }, 3333)
})

promise.then((data) => {
  console.log("Random int passed to resolve: ", data)
})
