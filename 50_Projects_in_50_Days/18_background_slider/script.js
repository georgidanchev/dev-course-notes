const body = document.body
const slides = document.querySelectorAll("div.slide")
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")
let activeSlide = 0

const setBgToBody = () => {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

const setActiveSlide = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active")
  })

  slides[activeSlide].classList.add("active")
}

rightBtn.addEventListener("click", () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener("click", () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setBgToBody()
  setActiveSlide()
})

setBgToBody()
