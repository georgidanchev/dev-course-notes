const gallery = document.querySelector('.gallery');
const mainOverlay = document.querySelector('.overlay');

const overlayImage = mainOverlay.querySelector('img');
const overlayClose = mainOverlay.querySelector('.close');

const generateHTML = ([h, v]) => {
  return `
    <div class="item h${h} v${v}">
      <img src="images/${randomNumber(12)}.jpg">
      <div class="item__overlay">
        <button>View -></button>
      </div>
    </div>
  `;
}

const randomNumber = (limit) => {
  return Math.floor(Math.random() * limit) + 1;
}

const digits = Array.from({ length: 50 }, () => [randomNumber(4), randomNumber(4)]).concat([[1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1]]);

const html = digits.map(generateHTML).join('');

if (gallery !== null) {
  gallery.innerHTML = html;
}

const items = document.querySelectorAll('.item');

const overlayToggle = (bool) => {
  if(bool) {
    mainOverlay.classList.add('open');
  } else {
    mainOverlay.classList.remove('open');
  }
}

const handleClick = (e) => {
  const newSrc = e.currentTarget.querySelector('img').src;
  overlayImage.src = newSrc;
  overlayToggle(true);
}

items.forEach(item => item.addEventListener('click', handleClick));

overlayClose.addEventListener('click', () => {
  overlayToggle(false);
});