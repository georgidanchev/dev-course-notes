const search = document.querySelector(".search")
const btn = document.querySelector(".btn")
const input = document.querySelector(".input")

btn.addEventListener("click", (e) => {
  e.preventDefault()
  search.classList.toggle("active")
  // focuses from the button to the actual input
  input.focus()
})
