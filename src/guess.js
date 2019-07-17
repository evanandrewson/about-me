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

guessButton.addEventListener('click', () => {
    let guess = Number(numberInput.value)
    let result = compareNumbers(guess, actual);
    if(result === 0) {
        win.classList.remove('hidden');
        high.classList.add('hidden');
        low.classList.add('hidden');
        guessButton.disabled = true;
    } else if(result === -1) {
        high.classList.add('hidden');
        low.classList.remove('hidden');
        triesLeft --;
        tries.textContent = triesLeft;
    } else if(result === 1) {
        high.classList.remove('hidden');
        low.classList.add('hidden');
        triesLeft --;
        tries.textContent = triesLeft;
    }
    if(triesLeft === 0) {
        high.classList.add('hidden');
        low.classList.add('hidden');
        lose.classList.remove('hidden');
        guessButton.disabled = true;
    }
});