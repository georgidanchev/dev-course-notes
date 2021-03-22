// Disable eslint rule of this doc only.
/* eslint-disable no-undef */

const pressed = []
const secretCode = 'george'

window.addEventListener('keyup', (e) => {
  // Add each key to array of keys
  pressed.push(e.key)

  // Trim the array based on seacret code length.
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)

  // Join the array into single string and compare
  // against the seacret word variable.
  if (pressed.join('').includes(secretCode)) {
    // We we get a match.
    console.warn('YYYYEEEAAAHHHH! YOU DID IT!')
    // add silly pictures on the webpage.
    cornify_add()
  }
})