var keys = [];
var sequence = [38, 40, 39, 37];


// Add event listener for when the page has loaded
document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    //Add event listener for when a key is pressed -> do this
    document.addEventListener('keydown', event => {
        const key = event.key.toLowerCase();
        keys.push(key.code);

    });
});

function checkSequence() {
}


