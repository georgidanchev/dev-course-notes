const ratings = document.querySelectorAll(".rating")
const ratingsContainer = document.querySelector(".ratings-container")
const sendBtn = document.querySelector("#send")
const panel = document.querySelector("#panel")
let selectedRating = "Satisfied"

const removeActive = () => {
  ratings.forEach((rating) => {
    rating.classList.remove("active")
  })
}

// scenario: imagine there are thousand click boxes, how would we handle it?
ratingsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("rating") || e.target.parentNode.classList.contains("rating")) {
    removeActive()
  }
  if (e.target.classList.contains("rating")) {
    e.target.classList.add("active")
    selectedRating = e.target.querySelector("small").innerText
  }
  if (e.target.parentNode.classList.contains("rating")) {
    e.target.parentNode.classList.add("active")
    selectedRating = e.target.parentNode.querySelector("small").innerText
  }
})

sendBtn.addEventListener("click", (e) => {
  e.preventDefault()

  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
  `
})
