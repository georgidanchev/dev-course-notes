/*
// Exercise 1
*/

const items = Array.from(document.querySelectorAll('[data-time]'))

const filtered = items
  // Get vids that only contain flexbox as title
  .filter(item => item.textContent.includes('Flexbox'))

  // Map time to a list of strings.
  .map(item => item.dataset.time)

  // Map time to array of seconds
  .map((timecode) => {
    const parts = timecode.split(':').map(part => parseFloat(part))
    return (parts[0] * 60) + parts[1]
  })

  // reduce to get total
  .reduce((runningTotal, seconds) => runningTotal + seconds, 0)

// we carete new date and convert seconds to (HH-MM-SS)
const totalTime = new Date(filtered * 1000).toISOString().substr(11, 8)

// console log the result.
console.log(`Total time: ${totalTime}`)

/*
// Exercise 2
*/

// This is an array of bunch of test numbers.
const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92]

// one line filter function. check if number
// is bigger then 70 and pass it on.
const large = numbers.filter(num => num > 70)

// console log the result.
console.log(large)