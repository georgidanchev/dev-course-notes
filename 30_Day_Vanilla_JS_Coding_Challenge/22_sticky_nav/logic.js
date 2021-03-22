const nav = document.querySelector('#main')
const topOfNav = nav.offsetTop

function fixNav() {
  // If the window has scrolled to the top of
  // the nav then add fixed class to the nav.
  if (window.scrollY >= topOfNav) {
    nav.classList.add('fixed-nav')
    // Also add padding top to the body as
    // otherwise the page will jump up as
    // result of the nav position changing.
    document.body.style.paddingTop = `${nav.offsetHeight}px`
  } else {
    // Otherwise remove class and reset padding.
    nav.classList.remove('fixed-nav')
    document.body.style.paddingTop = 0
  }
}

window.addEventListener('scroll', fixNav)