var menuBtn = document.querySelector('.menu-btn');
var mainMenu = document.querySelector('.main-menu');

menuBtn.addEventListener('click', () => {
  mainMenu.classList.toggle('show');
});