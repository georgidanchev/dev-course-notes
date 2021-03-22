// Disable eslint rule of this doc only.
/* eslint-disable prefer-rest-params */

const sliderImages = document.querySelectorAll('.slide-in')

// Debounce input to prevent performane
// issues from input overfloz (input spam).
function debounce(func, wait = 20, immediate = true) {
  let timeout
  return () => {
    const context = this
    const args = arguments
    const later = () => {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

function checkSlide() {
  console.log(window.scrollY)
  sliderImages.forEach((sliderImage) => {
    // position of the image when halfway is
    // showing at the bottom of the creen.
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2

    // position of the bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height

    // Bool checking if image is showing on screen.
    const isHalfShown = slideInAt > sliderImage.offsetTop

    // Boool checking image scolled past screen.
    const isNotScrolledPast = window.scrollY < imageBottom

    // If image is half shown and not scrolled past
    // the bottom of the screen, then show it.
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active')
    } else {
      // else hide it.
      sliderImage.classList.remove('active')
    }
  })
}

// Event listener on scroll - with debunce function.
window.addEventListener('scroll', debounce(checkSlide, 10))