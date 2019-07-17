import compareNumbers from '../src/compareNumbers.js';

const test = QUnit.test;

test('test for too low', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 5;
    const actual = 10;
    const expected = -1;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, actual);

    //Assert
    assert.equal(result, expected);
});

test('test for too high', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 11;
    const actual = 10;
    const expected = 1;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, actual);

    //Assert
    assert.equal(result, expected);
});

test('test for equals', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 10;
    const actual = 10;
    const expected = 0;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, actual);

    //Assert
    assert.equal(result, expected);
});
