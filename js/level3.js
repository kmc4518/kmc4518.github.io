var answers = ["Chickadee", "Squirtle", "Puzzle"];
var inputs = [];

function checkInputs() {
    var a1 = document.getElementById("ans1").value;
    var a2 = document.getElementById("ans2").value;
    var a3 = document.getElementById("ans3").value;
    inputs.push(a1, a2, a3);

    if (JSON.stringify(inputs) === JSON.stringify(answers)) {
        alert("you win ");
        Cookies.set('level', '4', {expires: 100});
        window.location = "index.html";
    } else {
        alert("you lose!");
        Cookies.set('level', '0', {expires: 100});
        window.location = "index.html";
    }

    inputs = [];
}