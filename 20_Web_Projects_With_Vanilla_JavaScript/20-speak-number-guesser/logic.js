const msgEl = document.getElementById('msg');

const randomNum = getRandomNumber();

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

// Start recognition and game
recognition.start();

// Write what user speaks
const writeMessage = (msg) => {
  msgEl.innerHTML = `
    <div>You said:</div>
    <span class="box">${msg}</span>
  `
}

// Check msg against number
const checkNumber = (msg) => {
  const num = Number(msg);

  // Check if valid number
  if(Number.isNaN(num)) {
    msgEl.innerHTML = '<div>This is not a valid number</div>';
    return;
  }

  // Check in range
  if(num > 100 || num < 1) {
    msgEl.innerHTML = '<div>Number must be between 1 and 100</div>';
    return;
  }

  // Check number
  if(num === randomNum) {
    document.body.innerHTML = `
    <h2>Congrats! You have guessed the number! <br><br>
    it was ${num}</h2>
    <button id="play-again">Play Again</button>
    `
  } else if(num > randomNum) {
    msgEl.innerHTML += '<div>Go lower</div>';
  } else {
    msgEl.innerHTML += '<div>Go higher</div>';
  }
}

const onSpeak = (e) => {
  const msg = e.results[0][0].transcript;
  writeMessage(msg);
  checkNumber(msg);
};

recognition.addEventListener('result', onSpeak);

// End SR service
recognition.addEventListener('end', () => recognition.start());

document.body.addEventListener('click', (e) => {
  if(e.target.id === 'play-again') {
    window.location.reload();
  }
});

console.log('Number: ' + randomNum);
