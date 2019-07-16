import isYes from './isYes.js';
import isNo from './isNo.js';

const quizButton = document.getElementById('quiz-button');
const result = document.getElementById('result')

quizButton.onclick = function() {
    console.log('button worked');
    const name = prompt('What\'s your name?');
    console.log(name);
    confirm(`${name}, are you sure you\'re ready for the quiz?`)
}