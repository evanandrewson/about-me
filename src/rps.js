import getThrow from './getThrow.js';

const throwButton = document.getElementById('throw-button');
const resultMessage = document.getElementById('message');
const winCountDisplay = document.getElementById('win-count-display');
const lossCountDisplay = document.getElementById('loss-count-display');
const computerChoice = document.getElementById('computer-choice');

let winCount = 0
let lossCount = 0

function tieResult() {
    resultMessage.classList.remove('hidden');
    resultMessage.textContent = 'Tie game! Try again!';
}
function winResult() {
    resultMessage.classList.remove('hidden');
    resultMessage.textContent = 'You win!';
    winCount++;
    winCountDisplay.textContent = 'Wins: ' + winCount;
}
function lossResult() {
    resultMessage.classList.remove('hidden');
    resultMessage.textContent = 'You lose!';
    lossCount++;
    lossCountDisplay.textContent = 'Losses: ' + lossCount;
}

throwButton.addEventListener('click', function() {
    const computerThrow = getThrow();
    const userChoice = document.querySelector('input:checked');
    const userThrow = userChoice.value;
    // Display computer throw
    computerChoice.classList.remove('invisible');
    const src = 'assets/' + computerThrow + '.jpg';
    computerChoice.src = src;

    console.log(userThrow, computerThrow);
    if(userThrow === computerThrow) {
        tieResult();
    } else if(userThrow === 'rock' && computerThrow === 'scissors') {
        winResult();
    } else if(userThrow === 'rock' && computerThrow === 'paper') {
        lossResult();
    } else if(userThrow === 'paper' && computerThrow === 'rock') {
        winResult();
    } else if(userThrow === 'paper' && computerThrow === 'scissors') {
        lossResult();
    } else if(userThrow === 'scissors' && computerThrow === 'paper') {
        winResult();
    } else if(userThrow === 'scissors' && computerThrow === 'rock') {
        lossResult();
    }
});