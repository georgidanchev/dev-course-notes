const sliderContainer = document.querySelector(".slider-container")
const slideRight = document.querySelector(".right-slide")
const slideLeft = document.querySelector(".left-slide")
const upButton = document.querySelector(".up-button")
const downButton = document.querySelector(".down-button")
let slidesLength = 0
let activeSlideIndex = 0

if (slideRight !== null) {
  slidesLength = slideRight.querySelectorAll("div").length
}

if (slideLeft !== null) {
  slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
}

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight

  if (direction === "up") {
    activeSlideIndex++
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0
    }
  } else if (direction === "down") {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1
    }
  }

  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}

// prevents gallery breaking on screen resize
window.addEventListener("resize", () => {
  const sliderHeight = sliderContainer.clientHeight
  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
})

upButton.addEventListener("click", () => changeSlide("up"))
downButton.addEventListener("click", () => changeSlide("down"))
