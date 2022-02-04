const faq_boxes = document.querySelectorAll(".faq")

faq_boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.classList.toggle("active")
  })
})
