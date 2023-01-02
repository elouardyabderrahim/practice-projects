'use strict';

// console.log(random);
let random = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highestScore = 0;

// click the event
document.querySelector('.check').addEventListener('click', function () {
  let score = Number(document.querySelector('.score').textContent) - 1;
  let guess = Number(document.querySelector('.guess').value);
  //  no guess
  if (!guess) {
    document.querySelector('.message').textContent = 'try to guess pls ... ';
  }
  // lose the game
  else if (score <= 0) {
    document.querySelector('.message').textContent = '❌you lose the game!';
  } else {
    // the guess is correct
    if (guess === random) {
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.message').textContent =
        '✔ Great job good guess!';
      document.querySelector('.number').textContent = random;
      document.querySelector('.number').style.width = '25rem';

      if (highestScore < score) {
        document.querySelector('.highscore').textContent = score + 1;
      } else {
        highestScore = highestScore;
      }

      //the guess is wrong
    } else if (guess != random) {
      document.querySelector('.score').textContent = score;
      // if guess is low.
      if (guess < random) {
        document.querySelector('.message').textContent =
          '📉your guess is too low!';
      }
      // if guess is heigh.
      else if (guess > random) {
        document.querySelector('.message').textContent =
          '📈your guess is too high!';
        highestScore = document.querySelector('.highscore').textContent;
      }
    }
  }
});

// again refresh button
document.querySelector('.again').addEventListener('click', () => {
  random = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = 20;
  highestScore;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
