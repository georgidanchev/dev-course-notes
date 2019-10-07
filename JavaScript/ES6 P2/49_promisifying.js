// disable eslint rule for file only
/* eslint no-unused-vars: 0 */

/**
 * example 1
 */

//
function go() {
  navigator.geolocation.getCurrentPosition((pos) => {
    console.log('IT WORKED!!')
    console.log(pos)
  }, (err) => {
    console.log('IT FAILED!!')
    console.log(err)
  })
}

// go()

/**
 * example 2
 */

// Promisifing old function
function getCurrentPosition(...args) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(...args, resolve, reject)
  })
}

// Async function with try and catch
async function go2() {
  try {
    console.log('starting')
    // get the current position
    const pos = await getCurrentPosition()
    // console log the position
    console.log(pos)
    console.log('ending')
  } catch (err) {
    console.error(err)
  }
}

go2()