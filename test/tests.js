import isYes from '../src/isYes.js'
const test = QUnit.test;

test('name of test', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = "yes";
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});