const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// List of word for game
const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving'
];

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Set difficulty value from local storage or medium
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

// Set difficulty select value
difficultySelect.value = difficulty;

// Focus on text on start
text.focus();

const gameOver = () => {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is: ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `;

  endgameEl.style.display = "flex";
};

// Update time
const updateTime = () => {
    time--;

  timeEl.innerHTML = time + 's';
  if(time <= 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

const updateScore = () => {
  score++;
  scoreEl.innerHTML = score;
}

const addWordToDOM = () => {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

addWordToDOM();

// Typing event listener
text.addEventListener('input', (e) => {
  const insertedText = e.target.value;
  if(insertedText == randomWord) {
    addWordToDOM();
    updateScore();
    text.value = '';
    if(difficulty === "hard") {
      time += 2;
    } else if (difficulty === "medium") {
      time += 3;
    } else if (difficulty === "ease") {
      time += 5;
    }
    updateTime();
  }
});

// Settings btn click
settingsBtn.addEventListener("click",() =>
settings.classList.toggle('hide'));

// Settings select
settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficulty);
});
