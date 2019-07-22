import getThrow, { ROCK, PAPER, SCISSORS } from './getThrow.js';

const throwButton = document.getElementById('throw-button');
const resultMessage = document.getElementById('message');
const winCountDisplay = document.getElementById('win-count-display');
const lossCountDisplay = document.getElementById('loss-count-display');
const computerChoice = document.getElementById('computer-choice');
const bet = document.getElementById('bet');
const moneyRemaining = document.getElementById('money-remaining');

let winCount = 0;
let lossCount = 0;
let money = 10;
let computerThrow;

throwButton.addEventListener('click', function() {
    computerThrow = getThrow();
    const userChoice = document.querySelector('input:checked');
    const userThrow = userChoice.value;

    //Max bet
    if(bet.value > money) {
        alert('You can\'t bet more than you have!');
        return;
    }

    // Display computer throw
    displayComputerChoice();
    
    if(userThrow === computerThrow) {
        tieResult();
    } else if((userThrow === ROCK && computerThrow === SCISSORS) || (userThrow === PAPER && computerThrow === ROCK) || (userThrow === SCISSORS && computerThrow === PAPER)) {
        winResult();
    } else if((userThrow === ROCK && computerThrow === PAPER) || (userThrow === PAPER && computerThrow === SCISSORS) || (userThrow === SCISSORS && computerThrow === ROCK)) {
        lossResult();
    }

    // Disable game if out of money
    if(money === 0) {
        throwButton.disabled = true;
        resultMessage.textContent = 'You lose and you\'re out of money! Refresh to play again.';
    }
});

function tieResult() {
    resultMessage.classList.remove('hidden');
    resultMessage.textContent = 'Tie game! Try again!';
}
function winResult() {
    resultMessage.classList.remove('hidden');
    resultMessage.textContent = 'You win!';
    winCount++;
    winCountDisplay.textContent = 'Wins: ' + winCount;
    money += Number(bet.value);
    moneyRemaining.textContent = 'Money remaining: $' + money;
}
function lossResult() {
    resultMessage.classList.remove('hidden');
    resultMessage.textContent = 'You lose!';
    lossCount++;
    lossCountDisplay.textContent = 'Losses: ' + lossCount;
    money -= Number(bet.value);
    moneyRemaining.textContent = 'Money remaining: $' + money;
}

function displayComputerChoice() {
    computerChoice.classList.remove('invisible');
    const src = 'assets/' + computerThrow + '.jpg';
    computerChoice.src = src;
}