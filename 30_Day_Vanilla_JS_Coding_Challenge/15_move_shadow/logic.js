const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')
const walk = 30

function shadow(e) {
  // Destructure width and height
  const {
    offsetWidth: width,
    offsetHeight: height,
  } = hero

  // Destructure x and y
  let {
    offsetX: x,
    offsetY: y,
  } = e

  // If "this" keyword is no longer
  // pointing at the hero object,
  // correct the x and y values.
  if (this !== e.target) {
    x += e.target.offsetLeft
    y += e.target.offsetTop
  }

  // Caluclate how much to move the shawdow
  const xWalk = Math.round((x / width * walk)) - (walk / 2)
  const yWalk = Math.round((y / height * walk)) - (walk / 2)

  // Set the text shadows based on the
  // xWalk and yWalk  variables.
  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
  ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
  ${xWalk}px ${yWalk * -1}px 0 rgba(0,255,0,0.7),
  ${xWalk * -1}px ${yWalk}px 0 rgba(0,0,255,0.7)
  `
}

// Listen on the text parent/background element.
hero.addEventListener('mousemove', shadow)