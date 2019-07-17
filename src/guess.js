import compareNumbers from 'compareNumbers.js';

const guess = document.getElementById('number-input');
const guessButton = document.getElementById('guess-button');
const high = document.getElementById('high');
const low = document.getElementById('low');
const win = document.getElementById('win');
const lose = document.getElementById('lose');

let triesLeft = 5

guessButton.addEventListener('click', () => {
    console.log('button works');
});