const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButton = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')
let mousedown = false

function togglePlay() {
  // Directly check if the video state and with ternary
  // operator "?" and call the oppsite action.
  video[video.paused ? 'play' : 'pause']()

  // Example of what we would do if we did not
  // use the ternary operator for our logic.
  // if (video.paused) {
  //   video.play()
  // } else {
  //   video.pause()
  // }
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  video[this.name] = this.value
}

function updateButton() {
  // update video play icon to poused and playing
  // based on the video is playing or not
  const icon = this.paused ? '►' : '❚ ❚'
  toggle.textContent = icon
}

function handleProgress() {
  // update the progress based on the video time. To
  // do that we get the current video time and divide
  // it by the duration and multiply it by 100 to get
  // a precentage.
  const precent = (video.currentTime / video.duration) * 100
  // we set the progress bar flexbasis to that procentage.
  progressBar.style.flexBasis = `${precent}%`
}

// function which handles video scrubing.
function scrub(e) {
  // "e.ofsetX" is the position of the mouse on the progres
  // bar based on it's  width whic we dividate by it's total
  // width and multiple by the video duration too get procantege.
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  // Set the scrub time procentage.
  video.currentTime = scrubTime
}

// When you click on the video, toggle play.
video.addEventListener('click', togglePlay)
// When on the play icon, toggle play.
toggle.addEventListener('click', togglePlay)
// You click play or pouse, update icon.
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)

// When timeupdates, update progress bar
video.addEventListener('timeupdate', handleProgress)

// handle skip buttons on click.
skipButton.forEach(button => button.addEventListener('click', skip))

// When you click progress bar, scrub video to click.
progress.addEventListener('click', scrub)

// When you mousedown and scrub, update scrub continuously.
progress.addEventListener('mousemove', e => mousedown && scrub(e))

// when you mose up or down on progress bar, update variable.
progress.addEventListener('mousedown', () => {
  mousedown = true
})
progress.addEventListener('mouseup', () => {
  mousedown = false
})

// update player volume and play rate on
// mouse click and when you mouse drag.
ranges.forEach(range => range.addEventListener('click', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))