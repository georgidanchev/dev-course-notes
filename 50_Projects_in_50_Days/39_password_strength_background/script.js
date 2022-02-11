const background = document.querySelector("#background")
const passwordField = document.querySelector("#password")

passwordField.addEventListener("input", () => {
  const length = passwordField.value.length
  if (length <= 10) {
    background.style.filter = `blur(${20 - length * 2}px)`
  }
})
