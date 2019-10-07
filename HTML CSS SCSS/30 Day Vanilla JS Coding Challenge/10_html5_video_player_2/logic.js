const speed = document.querySelector('.speed')
const bar = speed.querySelector('.speed-bar')
const video = document.querySelector('.flex')
let isMouseDown = false

function handleMove(e) {
  if (!isMouseDown) return
  // Vertical mouse position to bar height.
  const y = e.pageY - e.target.offsetTop
  // Convert that position to procentage.
  const precent = y / e.target.offsetHeight
  // Convert height to proper procentage.
  const height = `${Math.round(precent * 100)}%`
  // Set min and max playback rate.
  const [min, max] = [0.5, 3]
  // Get the lower and upper bounds based on prcentage
  const playbackRate = precent * (max - min) + min
  // Set the precentage to the bar height.
  bar.style.height = height
  // Set bar text content to the procentage.
  bar.textContent = `${playbackRate.toFixed(2)}x`
  // Set video player playbackrate.
  video.playbackRate = playbackRate
}

speed.addEventListener('mousemove', handleMove)
speed.addEventListener('mousedown', () => {
  isMouseDown = !isMouseDown
})
speed.addEventListener('mouseup', () => {
  isMouseDown = !isMouseDown
})