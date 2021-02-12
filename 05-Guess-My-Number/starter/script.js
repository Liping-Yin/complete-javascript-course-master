'use strict';
/*
// ------------what is DOM and DOM manipulation
// select and manipulate
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct number !';
document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// writing dry codes: no duplicate
// when there are duplicated codes, refractor them into functions.

//---------- Implementing the Guessing Game
// Implement 'Check': handling click event
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// store some variable in the code, not just depend on HTML document.
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // input is string !

  // always check the input, truthy value;
  // consider all possible situations

  // when no input
  if (!guess) {
    displayMessage('No number entered 😂');
    // document.querySelector('.message').textContent = ' No number entered 😂';

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!😘');
    // document.querySelector('.message').textContent = 'Correct Number!😘';
    // manipulate CSS style: all style value should be string;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = guess;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // refractor
  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      const message = guess > secretNumber ? '😂 Too high !' : '😂Too low!';
      displayMessage(message);
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '😂 Too high !' : '😂Too low!';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lose the game!😂');
      //   document.querySelector('.message').textContent = ' You lose the game!😂';
      document.querySelector('.score').textContent = 0;
    }
  }

  // below shows solutions with too many duplicate codes
  // when guess too high
  //    else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = ' Too high!😂';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = ' You lose the game!😂';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     // when guess too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = ' Too low!😂';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = ' You lose the game!😂';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

// Implement Again button with event
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
  document.querySelector('.score').textContent = score;
  displayMessage('start guessing...');
  //   document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
