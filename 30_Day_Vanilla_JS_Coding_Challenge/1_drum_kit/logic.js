function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

  if (!audio) {
    // If we don't have audio, stop the
    // function from running forwad
    return
  }

  // Reset the audio back to the begning.
  audio.currentTime = 0

  // Play the audio file.
  audio.play()

  // add class playing to key div
  key.classList.add('playing')
}

// Get references to all keys
const keys = document.querySelectorAll('.key')

function removeTransition(e) {
  // Only listen for transitionend of transform
  if (e.propertyName !== 'transform') return
  // this refers to e.target in this scenario
  this.classList.remove('playing')
}

// add event listners
window.addEventListener('keydown', playSound)
keys.forEach(key => key.addEventListener('transitionend', removeTransition))