const divs = document.querySelectorAll('div')
const button = document.querySelector('button')

function logText(e) {
  console.log(this.classList.value)
  // Can be used to stop event propagation
  // so in this cenrario where we have event
  // linsteners on all the divs, you can stop
  // the other divs from firing up aswell.
  // e.stopPropagation()
}

// With the caputre preopty you can select where
// you want the event listenr to be triggered
// in the capturing or bubling phase of event
// propagation. AKA, on the way down or up.
divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: true,
}))

// With once optional propety the event
// listner gets removed after you click
// once on it.
button.addEventListener('click', () => {
  console.log('Click!!!')
}, {
  once: true,
})