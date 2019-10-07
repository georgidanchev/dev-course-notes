const slider = document.querySelector('.items')
let isDown = false
let startX
let scrollLeft

slider.addEventListener('mousedown', (e) => {
  // Mouse is down.
  isDown = true
  slider.classList.add('active')

  // Get x coordinate inside in the scorll area
  // and also offset it by the external padding.
  startX = e.pageX - slider.offsetLeft

  // Store the intial clickdown positon.
  const [_scrollLeft] = [slider.scrollLeft]
  scrollLeft = _scrollLeft
})

slider.addEventListener('mouseleave', () => {
  // Slider visual feedback remove
  slider.classList.remove('active')

  // Mouse is up
  isDown = false
})

slider.addEventListener('mouseup', () => {
  // Slider visual feedback add
  slider.classList.remove('active')

  // Mouse is up
  isDown = false
})

slider.addEventListener('mousemove', (e) => {
  // If we mouse is not down
  // do not go forward.
  if (!isDown) return

  // Prevent default behaviour like selecting
  // of text, or any wired browser stuff.
  e.preventDefault()

  // Calculate where the cursor has moved.
  const x = e.pageX - slider.offsetLeft

  // How far we have moved, with multiplication.
  const walk = (x - startX) * 3

  // Scroll by taking away the walk from
  // the intial scrollLeft value.
  slider.scrollLeft = scrollLeft - walk
})