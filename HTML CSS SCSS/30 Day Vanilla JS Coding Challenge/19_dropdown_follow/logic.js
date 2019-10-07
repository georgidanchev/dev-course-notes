const triggers = document.querySelectorAll('.cool > li')
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top')


function handleEnter() {
  // Activate dropdown content.
  this.classList.add('trigger-enter')

  // Activate the dropdown background.
  background.classList.add('open')

  // Add class after 150ms
  setTimeout(() => {
    // but if have already moved away don't do it.
    if (this.classList.contains('trigger-enter')) {
      this.classList.add('trigger-enter-active')
    }
  }, 150)

  // Get the dropdown based on the selected nav
  const dropdown = this.querySelector('.dropdown')
  // Get dropdown bounding rects.
  const dropdownCoords = dropdown.getBoundingClientRect()
  const navCoords = nav.getBoundingClientRect()

  // Get dropdown height and width.
  // and get correction if we add any
  // extra objects in the future.
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  }

  // Set background box height and width.
  background.style.setProperty('width', `${coords.width}px`)
  background.style.setProperty('height', `${coords.height}px`)
  // Add correction which corrects for
  // downmovement due objects above.
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`)
}

// Once mouse leaves the nav, remove bunch of classes eh.
function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active')
  background.classList.remove('open')
}

// Event listeners for mouse enter and leave.
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))