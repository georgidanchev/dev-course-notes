const holes = document.querySelectorAll('.hole')
const scoreBoard = document.querySelector('.score')
const moles = document.querySelectorAll('.mole')
let lastHole
let timeUp = false
let score = 0

function randomTime(min, max) {
  // Generate random time between min and max
  return Math.round(Math.random() * (max - min) + min)
}

// Take a hole at tandome
function randomHole(_holes) {
  // Generate random num based on our holes array lenght.
  const idx = Math.floor(Math.random() * holes.length)
  // Reference a random hole from the array of
  // holes with the randome hole.
  const hole = _holes[idx]
  // If new hole is == prev hole.
  if (hole === lastHole) {
    // Re-run the function.
    return randomHole(holes)
  }
  // Reference the new hole as last hole.
  lastHole = hole
  // Return hole.
  return hole
}

// Make a mole to show up.
function peep() {
  // Generate random time between min and max.
  const time = randomTime(300, 1000)
  // Generate and reference randome hole.
  const hole = randomHole(holes)
  // Add class up to the hole.
  hole.classList.add('up')
  // Countdown.
  setTimeout(() => {
    // once time is up, remove class.
    hole.classList.remove('up')
    // If time is not up, call this function again.
    if (!timeUp) peep()
  }, time)
}

// Mole hit logic.
function bonk(e) {
  // If hit is trusted the continue.
  if (!e.isTrusted) return
  // Add score.
  score++
  // Remove class up on hit.
  this.classList.remove('up')
  // Update the score.
  scoreBoard.textContent = score
}

// Click event listener on each mole.
moles.forEach(mole => mole.addEventListener('click', bonk))

// Start game logic.
function startGame() {
  // Set score ref and page text to 0.
  scoreBoard.textContent = 0
  score = 0
  // Set time up to false.
  timeUp = false
  // Call mole peep function.
  peep()
  // Set game timeout.
  setTimeout(() => {
    // Once time is up change bool.
    timeUp = true
  }, 10000)
}