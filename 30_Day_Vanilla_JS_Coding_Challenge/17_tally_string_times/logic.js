const timeNodes = Array.from(document.querySelectorAll('[data-time]'))


function secondsToHms(param) {
  const d = Number(param)
  const h = Math.floor(d / 3600)
  const m = Math.floor(d % (3600 / 60))
  const s = Math.floor(d % 3600 % 60)

  const hDisplay = h > 0 ? h + (h === 1 ? ' hour, ' : ' hours, ') : ''
  const mDisplay = m > 0 ? m + (m === 1 ? ' minute, ' : ' minutes, ') : ''
  const sDisplay = s > 0 ? s + (s === 1 ? ' second' : ' seconds') : ''
  return hDisplay + mDisplay + sDisplay
}


const seconds = timeNodes
  // Get all the "dataset.time"
  // out of every timenode div.
  .map(node => node.dataset.time)

  // Deal with the timecode.
  .map((timecode) => {
    // Destruct timecode at ":" as floats.
    const [mins, secs] = timecode.split(':').map(parseFloat)
    // Salculate mins into seconds.
    return (mins * 60) + secs
  })

  // Add all array entries into single variable.
  .reduce((total, vidSeconds) => total + vidSeconds)

// Duplicate total seconds variable.
let secondsLeft = seconds

// Get total hours and round with Math.floor
const hours = Math.floor(secondsLeft / 3600)

// How many seconds are left after. There are 3600
// seconds in hour and we use the modulus operator
// to calculate the leftover.
secondsLeft %= 3600

// we calcualte the minutes the same way.
const mins = Math.floor(secondsLeft / 60)
secondsLeft %= 60

// Export our figures
console.log(hours, mins, secondsLeft)

// Compared to function from stackoverflow
console.log(secondsToHms(seconds))