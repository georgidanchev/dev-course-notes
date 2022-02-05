const canvas = document.getElementById("canvas")
const increaseBtn = document.getElementById("increase")
const decreaseBtn = document.getElementById("decrease")
const sizeEL = document.getElementById("size")
const colorEl = document.getElementById("color")
const clearEl = document.getElementById("clear")
const ctx = canvas.getContext("2d")

let color = "black"
let isPressed = false
let size = 10
let x = undefined
let y = undefined

canvas.addEventListener("mousedown", (e) => {
  isPressed = true

  x = e.offsetX
  y = e.offsetY
})

canvas.addEventListener("mouseup", (e) => {
  isPressed = false

  x = undefined
  y = undefined
})

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX
    const y2 = e.offsetY

    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)

    x = x2
    y = y2
  }
})

const drawCircle = (x, y) => {
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI * 2, true)
  ctx.fillStyle = color
  ctx.fill()
}

const drawLine = (x1, y1, x2, y2) => {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}

const updateSizeOnScreen = () => {
  sizeEL.innerText = size
}

// increase drawing size
increaseBtn.addEventListener("click", () => {
  if (size < 50) {
    size += 5
  }
  updateSizeOnScreen()
})

// decrease drawing size
decreaseBtn.addEventListener("click", () => {
  if (size > 5) {
    size -= 5
  }
  updateSizeOnScreen()
})

// clear the entire canvas
clearEl.addEventListener("click", () => ctx.clearRect(0, 0, canvas.width, canvas.height))

// color change events
colorEl.addEventListener("input", () => (color = colorEl.value))

// init colour
color = colorEl.value
