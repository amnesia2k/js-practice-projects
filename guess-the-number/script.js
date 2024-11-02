'use strict';

// setting constants for all variables
const message = document.querySelector('.message');
const finalNumber = document.querySelector('.number');
const finalScore = document.querySelector('.score');
let score = 20;
const highScore = document.querySelector('.highscore');
let high_score = 0;
const submit = document.querySelector('.check');
const guess = document.querySelector('.guess');

// setting our secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

// setting event listener
submit.addEventListener('click', () => {
  const guessedNumber = Number(document.querySelector('.guess').value);

  // checking our application if the numbers are numbers, greater than or less than the guessed number
  if (!guessedNumber) {
    message.textContent = '⛔ No number inputted!';
    document.body.style.backgroundColor = 'red';
  } else if (guessedNumber === secretNumber) {
    // when the guess is correct
    finalNumber.textContent = guessedNumber;
    message.textContent = '🎉 You guessed the right number';
    message.style.color = '#ffffff';
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    guess.disabled = true;
    submit.style.cursor = 'not-allowed';

    if (score > high_score) {
      high_score = score;
      highScore.textContent = high_score;
    }
  } else if (guessedNumber !== secretNumber) {
    // when the guess is wrong
    if (score > 1) {
      message.textContent =
        guessedNumber > secretNumber
          ? '📈 Number too high!'
          : '📈 Number too low!';
      message.style.color = 'red';
      score--;
      finalScore.textContent = score;
    } else if (score <= 1) {
      message.textContent = '😱 You lost the game!';
      finalScore.textContent = 0;
      guess.disabled = true;
      submit.style.cursor = 'not-allowed';
    }
  }
});

const reset = document.querySelector('.again');

reset.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  message.textContent = 'Start guessing...';
  finalScore.textContent = score;
  finalNumber.textContent = '?';
  guess.value = '';
  message.style.color = '#ffffff';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  submit.style.cursor = 'pointer';
  guess.disabled = false;
});
