export function getThrowFromNumber(number) {
    if(number === 0) {
        return 'rock';
    } else if(number === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

export default function getThrow() {
    const random = Math.floor(Math.random() * 3);
    return getThrowFromNumber(random);
}