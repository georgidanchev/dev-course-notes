const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textArea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [
  {
    image: './img/drink.jpg',
    text: "I'm Thirsty"
  },
  {
    image: './img/food.jpg',
    text: "I'm Hungry"
  },
  {
    image: './img/tired.jpg',
    text: "I'm Tired"
  },
  {
    image: './img/hurt.jpg',
    text: "I'm Hurt"
  },
  {
    image: './img/happy.jpg',
    text: "I'm Happy"
  },
  {
    image: './img/angry.jpg',
    text: "I'm Angry"
  },
  {
    image: './img/sad.jpg',
    text: "I'm Sad"
  },
  {
    image: './img/scared.jpg',
    text: "I'm Scared"
  },
  {
    image: './img/outside.jpg',
    text: 'I Want To Go Outside'
  },
  {
    image: './img/home.jpg',
    text: 'I Want To Go Home'
  },
  {
    image: './img/school.jpg',
    text: 'I Want To Go To School'
  },
  {
    image: './img/grandma.jpg',
    text: 'I Want To Go To Grandmas'
  }
];

// Init speech synth
const message = new SpeechSynthesisUtterance();

const setTextMessage = (text) => {
  message.text = text;
}

const speakText = () => {
  speechSynthesis.speak(message);
}

// Create speech boxes
const createBox = (item) => {
  const box = document.createElement('div');

  const { image, text } = item;

  box.classList.add('box');

  box.innerHTML =  `
    <img src="${image}" alt="${text}">
    <p class="info">${text}</p>
  `;

  box.addEventListener('click', () => {
    setTextMessage(text);
    speakText(text);

    box.classList.add('active');

    setTimeout(() => {
      box.classList.remove('active');
    }, 1000)
  });

  // @todo - speak event
  main.appendChild(box);
}

// Store voices
let voices = [];

const getVoices = () => {
  voices = speechSynthesis.getVoices();
  voices.forEach(voice => {
    const option = document.createElement('option');
    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;
    voicesSelect.appendChild(option)
  });
};

const setSelectedVoice = (e) => {
  message.voice = voices.find(voice => voice.name === e.target.value);
}

data.forEach(createBox);

// Voices change
speechSynthesis.addEventListener('voiceschanged', getVoices);

// Show/hide text-box
toggleBtn.addEventListener('click', () => document.getElementById('text-box').classList.add('show'));
closeBtn.addEventListener('click', () => document.getElementById('text-box').classList.remove('show'));

// Change selected voice
voicesSelect.addEventListener('change', setSelectedVoice);

// Read text button
readBtn.addEventListener('click', () => {
  setTextMessage(textArea.value);
  speakText();
});

getVoices();
