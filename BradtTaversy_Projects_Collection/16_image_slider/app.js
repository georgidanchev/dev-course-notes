const sliderImages = document.querySelectorAll('.slide');
let currentSlide = 0;

const sliderInit = () => {
  sliderImages.forEach((slide, index) => {
    if (index !== 0) {
      slide.style.display = 'none';
    }
  });
};

const slideToggle = (bool) => {
  sliderImages[currentSlide].style.display = bool ? 'none' : 'block';
};

const sliderLogic = (e) => {
  slideToggle(true);
  if (e.target.id === 'arrow-right') {
    if (currentSlide === sliderImages.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
  }
  if (e.target.id === 'arrow-left') {
    if (currentSlide === 0) {
      currentSlide = sliderImages.length - 1;
    } else {
      currentSlide--;
    }
  }
  slideToggle(false);
};

document.body.addEventListener('click', sliderLogic);
window.addEventListener('DOMContentLoaded', sliderInit);
