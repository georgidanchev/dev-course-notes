const choose_insect_btns = document.querySelectorAll(".choose-insect-btn")
const game_container = document.getElementById("game-container")
const messageEl = document.getElementById("message")
const scoreEl = document.getElementById("score")
const screens = document.querySelectorAll(".screen")
const start_btn = document.getElementById("start-btn")
const timeEl = document.getElementById("time")
let seconds = 0
let score = 0
let selected_insect = {}

start_btn.addEventListener("click", () => screens[0].classList.add("up"))

const increaseScore = () => {
  score++
  scoreEl.innerHTML = `Score: ${score}`
  if (score > 19) {
    messageEl.classList.add("visible")
  }
}

const getRandomLocation = () => {
  const width = window.innerWidth
  const height = window.innerHeight
  const x = Math.random() * (width - 200) + 100
  const y = Math.random() * (height - 200) + 100
  return { x, y }
}

// when you click one two more show up
const addInsects = () => {
  setTimeout(createInsect, 1000)
  setTimeout(createInsect, 1500)
}

const catchInsect = (insect) => {
  increaseScore()
  insect.classList.add("caught")
  setTimeout(() => insect.remove(), 2000)
  addInsects()
}

const createInsect = () => {
  const insect = document.createElement("div")
  insect.classList.add("insect")
  const { x, y } = getRandomLocation()
  insect.style.top = `${y}px`
  insect.style.left = `${x}px`
  insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)">`
  insect.addEventListener("click", () => catchInsect(insect))
  game_container.appendChild(insect)
}

const increaseTime = () => {
  let m = Math.floor(seconds / 60)
  let s = seconds % 60
  m = m < 10 ? `0${m}` : m
  s = s < 10 ? `0${s}` : s
  timeEl.innerHTML = `Time: ${m}:${s}`
  seconds++
}

const startGame = () => {
  setInterval(increaseTime, 1000)
}

choose_insect_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img")
    const src = img.getAttribute("src")
    const alt = img.getAttribute("alt")
    selected_insect = { src, alt }
    screens[1].classList.add("up")
    setTimeout(createInsect, 1000)
    startGame()
  })
})
