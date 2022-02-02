const panels = document.querySelectorAll(".panel")

const removeActiveClasses = (currentPanel) => {
  panels.forEach((panel) => {
    if (panel !== currentPanel) {
      panel.classList.remove("active")
    }
  })
}

panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    e.preventDefault()
    panel.classList.toggle("active")
    removeActiveClasses(panel)
  })
})
