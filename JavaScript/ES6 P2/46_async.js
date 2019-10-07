// intresting fact:
// alert, prompt and confirm  are the only
// function which stop the enire javascript
// from running asynchronously.

/*
 * The fetch api
 */

fetch('https://api.github.com/users/wesbos')
  .then(res => res.json()).then((res) => {
    console.log(res)
  }).catch(err => console.log(`Error! ${err}`))

/*
 * Chaning promisese - navigating the callback hell.
 */

// Function which imitates api. We have breathing where
// we need to complate one action before then next.
function breathe(amount) {
  return new Promise((resolve, reject) => {
    if (amount < 500) {
      reject(new Error('Too small value'))
    }
    setTimeout(() => resolve(`Done for ${amount}ms`), amount)
  })
}

// Calling the breathing function
// and chaning a bunch of promises.
breathe(1000).then((res) => {
    console.log(res)
    return breathe(500)
  })
  .then((res) => {
    console.log(res)
    return breathe(600)
  })
  .then((res) => {
    console.log(res)
    return breathe(500)
  })
  .then((res) => {
    console.log(res)
    return breathe(600)
  })
  .then((res) => {
    console.log(res)
    return breathe(300)
  })
  // error handling as a promie catch.
  .catch((err) => {
    console.log(err)
    console.log('ERROR, oh no!')
  })