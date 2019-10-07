const msg = new SpeechSynthesisUtterance()
let voices = []
const voicesDropdown = document.querySelector('[name="voice"]')
const options = document.querySelectorAll('[type="range"], [name="text"]')
const speakButton = document.querySelector('#speak')
const stopButton = document.querySelector('#stop')

// Get text input area value and set as synthesis text.
msg.text = document.querySelector('[name="text"]').value

// Populated voices dropdown.
function populateVoices() {
  voices = this.getVoices()
  voicesDropdown.innerHTML = voices
    .filter(voice => voice.lang.includes('en'))
    .map(voice => `
      <option value="${voice.name}">${voice.name} (${voice.lang})</option>
    `).join('')
}

function toggle(startOver = true) {
  // Cancel current speach.
  speechSynthesis.cancel()
  // If default play speach.
  if (startOver) {
    speechSynthesis.speak(msg)
  }
}

function setVoice() {
  // Set synthesis voice based
  // on voices array selection.
  msg.voice = voices.find(voice => voice.name === this.value)
  // Stop current voice and play current one.
  toggle()
}

function setOption() {
  // Set message to the text input.
  msg[this.name] = this.value
  // Stop current voice playback
  // and play current one.
  toggle()
}

speechSynthesis.addEventListener('voiceschanged', populateVoices)
voicesDropdown.addEventListener('change', setVoice)
options.forEach(option => option.addEventListener('change', setOption))
speakButton.addEventListener('click', toggle)
stopButton.addEventListener('click', () => toggle(false))