import { getThrowFromNumber } from '../src/getThrow.js';

const test = QUnit.test;

test('test for rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = 0;
    const expected = 'rock';

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
    const expected = 'paper';

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
    const expected = 'scissors';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = getThrowFromNumber(number);

    //Assert
    assert.equal(result, expected);
});