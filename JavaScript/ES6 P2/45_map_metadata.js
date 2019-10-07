// If we want to store metadata about the object and
// not have it be on the object, then we can use a map.

// Instantiate the map.
const clickCount = new Map()

// Look up all the buttons.
const buttons = document.querySelectorAll('button')

// A "for each" loop which goes over all the
// buttons, sets the botton in the map with
// inital count of 0 and adds an even listener.
buttons.forEach((button) => {
  clickCount.set(button, 0)
  button.addEventListener('click', (e) => {
    const clickTarget = e.target

    // Once we get a hit, get the
    // button reference in the map.
    const val = clickCount.get(clickTarget)

    // Using that reference, set the
    // new value by adding on to it.
    clickCount.set(clickTarget, val + 1)

    // Log out the entire table.
    console.log(clickCount)
  })
})