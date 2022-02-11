const images = document.querySelectorAll(".phone img")
const buttons = document.querySelectorAll("nav li")
let lastClick

const changeImage = (current, idx) => {
  if (lastClick !== current) {
    images.forEach((image) => {
      image.classList.remove("show")
    })
    images[idx].classList.add("show")
  }
}

const clearAllButtons = (current) => {
  buttons.forEach((button) => {
    if (button !== current) {
      button.classList.remove("active")
    }
  })
}

const setActiveButton = (current, idx) => {
  if (lastClick !== current) {
    current.classList.add("active")
  }
}

buttons.forEach((button, idx) => {
  button.addEventListener("click", () => {
    clearAllButtons(button)
    setActiveButton(button, idx)
    changeImage(button, idx)
    lastClick = button
  })
})
