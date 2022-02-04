const toggleEl = document.getElementById("toggle")
const nav = document.getElementById("nav")

toggleEl.addEventListener("click", (e) => {
  e.preventDefault()
  nav.classList.toggle("active")
})
