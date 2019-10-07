const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight
ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 100

let isDrawing = false
let lastX = 0
let lastY = 0
let hue = 0
let direction = true

function draw(e) {
  // If we are not drawing return
  if (!isDrawing) return

  // Control line color
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`

  // Start drawing
  ctx.beginPath()

  // Move line from
  ctx.moveTo(lastX, lastY)

  // Move lane to
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()

  // Set current
  lastX = e.offsetX
  lastY = e.offsetY

  // The hue relates to the color of
  // the line being drwan. If hue
  // reachest 365 reset it back to 0,
  // else add 1 on every draw.
  if (hue >= 365) {
    hue = 0
  } else {
    hue++
  }

  // This controls the line width when you draw.
  // If it reaches max or 0 then swap the direcitons.
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction
  }

  // Add or subract to the line width.
  if (direction) {
    ctx.lineWidth++
  } else {
    ctx.lineWidth--
  }
}

// Event listeners.
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true
  // On mouse down update starting position.
  lastX = e.offsetX
  lastY = e.offsetY
})
canvas.addEventListener('mouseup', () => {
  isDrawing = false
})
canvas.addEventListener('mouseout', () => {
  isDrawing = false
})