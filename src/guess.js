import compareNumbers from './compareNumbers.js';

const numberInput = document.getElementById('number-input');
const guessButton = document.getElementById('guess-button');
const resultMessage = document.getElementById('result-message');
const highMessage = document.getElementById('high-message');
const lowMessage = document.getElementById('low-message');
const winMessage = document.getElementById('win-message');
const loseMessage = document.getElementById('lose-message');
const triesMessage = document.getElementById('tries-left');
// random number generator - credit to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const actual = Math.floor(Math.random() * 20 + 1);

let triesLeft = 5;

function changeResultMessage(string) {
    resultMessage.textContent = string;
    resultMessage.classList.remove('hidden');
}

//UI work functions
//Decrementing tries
function decrementTries() {
    triesLeft --;
    triesMessage.textContent = triesLeft;
}
//Display of too low message
function displayLow() {
    changeResultMessage('Too low!');
}
//Display of too high message
function displayHigh() {
    changeResultMessage('Too high!');
}
//Disable game play
function disableButton() {
    guessButton.disabled = true;
}
//Display of lose game
function displayLose() {
    changeResultMessage('You lose. Refresh the page to play again with a new number.');
}
//Display of win game
function displayWin() {
    changeResultMessage('You win! Refresh the page to play again with a new number.');
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