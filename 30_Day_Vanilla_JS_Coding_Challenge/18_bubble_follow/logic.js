const triggers = document.querySelectorAll('a')
const highlight = document.createElement('span')
highlight.classList.add('highlight')
document.body.append(highlight)

function highlightLink() {
  const linkCoords = this.getBoundingClientRect()

  // Object which stores pill background coordinates.
  // Also, compensate for page scroll.
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  }

  // Set dimension and position of pill background.
  highlight.style.width = `${coords.width}px`
  highlight.style.height = `${coords.height}px`
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
}

// Add event listeners on each anchor link.
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink))