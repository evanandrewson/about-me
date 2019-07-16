import isYes from '../src/isYes.js';
import isNo from '../src/isNo.js';
const test = QUnit.test;

test('isYes test', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = 'Y';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('isNo test', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = 'N';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isNo(text);

    //Assert
    assert.equal(result, expected);
});

test('isYes wrong answer test', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = 'no';
    const expected = false;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('isNo wrong answer test', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = 'yes';
    const expected = false;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isNo(text);

    //Assert
    assert.equal(result, expected);
});