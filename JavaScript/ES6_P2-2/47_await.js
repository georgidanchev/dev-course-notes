// disable eslint rule for file only
/* eslint no-unused-vars: 0 */

// Simulate API

function breathe(amount) {
  return new Promise((resolve, reject) => {
    if (amount < 500) {
      reject(new Error('Value too small'))
    }
    setTimeout(() => resolve(`Done for ${amount}ms`), amount)
  })
}

// you must put keyword async
// to use async inside a function
// and you cannot use async outsode
// of a fundtion.

async function go() {
  // Error handling in await can
  // be done using try and catch.
  try {
    console.log('start')
    const res = await breathe(1000)
    console.log(res)
    const res2 = await breathe(400)
    console.log(res2)
    const res3 = await breathe(1000)
    console.log(res3)
  } catch (err) {
    console.error('Error!!!!')
    console.log(err)
  }
}

// go()

/**
 * high order function which catches error
 */

// function which takes a function
// as a argument.
function catchErrors(fn) {
  return function (...args) {
    return fn(...args).catch((err) => {
      console.error('ERROR!!!!')
      console.log(err)
    })
  }
}

async function go2(name) {
  // Error handling in await can
  // be done using try and catch.
  console.log('start')
  const res = await breathe(1000)
  console.log(res)
  const res2 = await breathe(400)
  console.log(res2)
  const res3 = await breathe(1000)
  console.log(res3)
}

const wrappedFunction = catchErrors(go2)

wrappedFunction('Wes', 'Bos')