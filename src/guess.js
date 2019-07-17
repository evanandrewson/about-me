import compareNumbers from './compareNumbers.js';

const numberInput = document.getElementById('number-input');
const guessButton = document.getElementById('guess-button');
const high = document.getElementById('high');
const low = document.getElementById('low');
const win = document.getElementById('win');
const lose = document.getElementById('lose');
const tries = document.getElementById('tries-left');
// random number generator - credit to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const actual = Math.floor(Math.random() * 20 + 1);

let triesLeft = 5;

//UI work functions
//Decrementing tries
function decrementTries() {
    triesLeft --;
    tries.textContent = triesLeft;
}
//Display of too low message
function displayLow() {
    high.classList.add('hidden');
    low.classList.remove('hidden');
}
//Display of too high message
function displayHigh() {
    high.classList.remove('hidden');
    low.classList.add('hidden');
}
//Disable game play
function disableButton() {
    guessButton.disabled = true;
}
//Display of lose game
function displayLose() {
    high.classList.add('hidden');
    low.classList.add('hidden');
    lose.classList.remove('hidden');
}
//Display of win game
function displayWin() {
    win.classList.remove('hidden');
    high.classList.add('hidden');
    low.classList.add('hidden');
}

guessButton.addEventListener('click', () => {
    let guess = Number(numberInput.value);
    let result = compareNumbers(guess, actual);
    if(result === 0) {
        displayWin();
        disableButton();
    } else if(result === -1) {
        displayLow();
        decrementTries();
    } else if(result === 1) {
        displayHigh();
        decrementTries();
    }
    if(triesLeft === 0) {
        displayLose();
        disableButton();
    }
});