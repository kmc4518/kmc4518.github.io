var keys = [];
var sequence = ["arrowup", "arrowdown", "arrowright", "arrowleft"];


// Add event listener for when the page has loaded
document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    //Add event listener for when a key is pressed -> do this
    document.addEventListener('keydown', event => {
        const key = event.key.toLowerCase();
        keys.push(key);
        console.log(key);

        if (keys.length == 4) {
            checkSequence(keys);
            keys = [];
        }
    });
});

function checkSequence(test) {
    for (let i = 0; i < test.length; ++i) {
        if (test[i] !== sequence[i]) {
            console.log("we ain't the same");
            return false;
        }
    }
    alert("you win ");
    Cookies.set('level', 'win', {expires: 100});
    window.location = "index.html";
}
