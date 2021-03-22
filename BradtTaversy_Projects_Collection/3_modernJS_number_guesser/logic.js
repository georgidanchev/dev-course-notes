/*
Game Functions:
- Player must guess a number between a min and max.
- Player gets a certain amount of guesses.
- Notify player of guesses remaining.
- Notify the player of the correct answer if he loses.
- Let player choose to play again.
*/

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Game values
const min = 1;
const max = 5;
const winningNum = getRandomNum(min, max);
let guessesLeft = 3;

// UL Element
const gameWrapper = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');
const guessMsg = document.querySelector('.message');

// Assign UI main and max
minNum.textContent = min;
maxNum.textContent = max;

const setMessage = (msg, color) => {
  guessMsg.textContent = msg;
  guessMsg.style.color = color;
};

const gameOver = (won, msg) => {
  const color = won ? 'lightgreen' : 'red';
  // Disable input
  guessInput.disabled = true;
  // Set border color
  guessInput.style.borderColor = color;
  guessInput.style.color = color;
  // Let user know
  setMessage(msg, color);

  if (won) {
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
  }
};

// Listen for guess
guessBtn.addEventListener('click', () => {
  const guess = parseInt(guessInput.value, 10);
  let gameMsg;
  // Validate the input
  if (Number.isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if player won
  if (guess === winningNum) {
    // GAME OVER - player won. :)
    gameMsg = `${winningNum} is correct, you win! :)`;
    gameOver(true, gameMsg);
  } else {
    // Wrong number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // GAME OVER - player lost.
      gameMsg = `Game over. The correct number was ${winningNum}.`;
      gameOver(false, gameMsg);
    } else {
      // GAME CONTINUES - wrong answer.
      // User entered the wrong number.
      gameMsg = `${guess} is not correct. ${guessesLeft} guesses left.`;
      gameOver(false, gameMsg);
      guessInput.disabled = false;
      guessInput.value = '';
    }
  }
});

// Play again event listener.
gameWrapper.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('play-again')) {
    window.location.reload();
  }
});
