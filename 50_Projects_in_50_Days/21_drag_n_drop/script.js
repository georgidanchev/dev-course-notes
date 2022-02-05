const fill = document.querySelector(".fill")
const empties = document.querySelectorAll(".empty")

let currentElement = null

const dragStart = (e) => {
  e.target.classList.add("hold")
  setTimeout(() => (e.target.className = "invisible"), 10)
  currentElement = e.target
}

const dragEnd = (e) => {
  e.target.classList.remove("invisible")
  e.target.classList.remove("hovered")
  e.target.classList.add("fill")
}

const dragOver = (e) => {
  e.preventDefault()
}

const dragEnter = (e) => {
  e.preventDefault()
  e.target.classList.add("hovered")
}

const dragLeave = (e) => {
  if (e.target !== currentElement) {
    e.target.classList.remove("hovered")
  }
}

const dragDrop = (e) => {
  e.target.classList.remove("hovered")
  e.target.append(fill)
}

fill.addEventListener("dragstart", dragStart)
fill.addEventListener("dragend", dragEnd)

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver)
  empty.addEventListener("dragenter", dragEnter)
  empty.addEventListener("dragleave", dragLeave)
  empty.addEventListener("drop", dragDrop)
}
