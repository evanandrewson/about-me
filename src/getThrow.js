export const ROCK = 'rock';
export const PAPER = 'paper';
export const SCISSORS = 'scissors';



export function getThrowFromNumber(number) {
    if(number === 0) {
        return ROCK;
    } else if(number === 1) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

export default function getThrow() {
    const random = Math.floor(Math.random() * 3);
    return getThrowFromNumber(random);
}