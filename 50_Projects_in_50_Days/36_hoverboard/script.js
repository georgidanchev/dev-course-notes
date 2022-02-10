const container = document.getElementById("container")
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"]
const SQUARES = 500

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)]
}

const setColor = (target) => {
  const color = getRandomColor()
  target.style.background = color
  target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

const removeColor = (target) => {
  target.style.background = "#1d1d1d"
  target.style.boxShadow = "0 0 2px #000"
}

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div")
  square.classList.add("square")
  square.addEventListener("mouseover", () => setColor(square))
  square.addEventListener("mouseout", () => removeColor(square))
  container.appendChild(square)
}
