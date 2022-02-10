const imgs = document.getElementById("imgs")
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")
const img = document.querySelectorAll("#imgs img")
let interval
let timeout
let idx = 0

const changeImage = () => {
  if (idx > img.length - 1) {
    idx = 0
  } else if (idx < 0) {
    idx = img.length - 1
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`
}

const run = () => {
  idx++
  changeImage()
}

const resetInterval = () => {
  if (interval !== undefined) {
    clearInterval(interval)
  }
  if (timeout !== undefined) {
    clearTimeout(timeout)
  }
  timeout = setTimeout(() => {
    interval = setInterval(run, 2000)
  }, 2000)
}

rightBtn.addEventListener("click", () => {
  idx++
  changeImage()
  resetInterval()
})

leftBtn.addEventListener("click", () => {
  idx--
  changeImage()
  resetInterval()
})

resetInterval()
