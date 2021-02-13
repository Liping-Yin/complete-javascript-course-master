'use strict';

const score0El = document.getElementById('score--0');
// const score1 = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;

// use class to control things
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {
  //1.generating random dice roll;
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2.display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
    // store scores to players in each round
    scores[activePlayer] += currentScore;
  } else {
    // switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
  //3. check for rolled 1: true, switch to next player
});
