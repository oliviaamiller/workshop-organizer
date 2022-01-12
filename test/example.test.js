// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderParticipant } from '../render-utils.js';

const { test, skip } = QUnit;

skip('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

skip('renderParticipant is a function that takes in the arguement participant and returns an html element with a p tag, class name of participant, and text content of participant.name', (expect) => {

    const participant = {
        name: 'ernie',
        id: 1
    };

    const expected = '<p class="participant">ernie</p>';

    const actual = renderParticipant(participant);

    expect.equal(actual.outerHTML, expected);
});
