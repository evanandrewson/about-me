import isYes from './isYes.js';
import isNo from './isNo.js';

const quizButton = document.getElementById('quiz-button');
const result = document.getElementById('result');
const happyFace = document.getElementById('happy-face');
const frownyFace = document.getElementById('frowny-face');

quizButton.onclick = function() {
    const name = prompt('What\'s your name?');
    const confirmed = confirm(`${name}, are you sure you're ready for the quiz?`);
    if(confirmed === false) {
        return;
    }
    let numberCorrect = 0;
    const firstQuestion = prompt(`${name}, does Evan like the outdoors? (yes or no)`);
    if(isYes(firstQuestion) === true) {
        numberCorrect ++;
    }
    const secondQuestion = prompt(`${name}, was Evan born in Portland? (yes or no)`);
    if(isNo(secondQuestion) === true) {
        numberCorrect ++;
    }
    const thirdQuestion = prompt(`${name}, is Evan nerdy? (yes or no)`);
    if(isYes(thirdQuestion) === true) {
        numberCorrect ++;
    }
    alert('Quiz is complete, calculating results.');
    let percentageCorrect = Math.round(numberCorrect/3 * 100);
    result.classList.remove('hidden');
    result.textContent = `You got ${numberCorrect} / 3 for a score of ${percentageCorrect}%.`;
    if(numberCorrect > 1) {
        happyFace.classList.remove('hidden');
        frownyFace.classList.add('hidden');
    } else {
        happyFace.classList.add('hidden');
        frownyFace.classList.remove('hidden');
    }
};