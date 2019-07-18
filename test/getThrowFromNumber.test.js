import { getThrowFromNumber, ROCK, PAPER, SCISSORS } from '../src/getThrow.js';

const test = QUnit.test;

test('test for rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = 0;
    const expected = ROCK;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = getThrowFromNumber(number);

    //Assert
    assert.equal(result, expected);
});

test('test for paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = 1;
    const expected = PAPER;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = getThrowFromNumber(number);

    //Assert
    assert.equal(result, expected);
});

test('test for scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = 2;
    const expected = SCISSORS;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = getThrowFromNumber(number);

    //Assert
    assert.equal(result, expected);
});