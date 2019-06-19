function init() {
    var DEFAULT_LIVES = 3;
    var rand = Math.floor(Math.random() * $('.square').length);
    var i = $('.square').eq(rand);
    assignCorrect(i.index());
    setLives(DEFAULT_LIVES);
}

init();

$(function () {
    var l = $('span#lives').html();

    $('div#incorrect').click(function () {
        l = livesDown(l);
        setLives(l);
        $(this).remove();
        checkLives(getLives());
    });

    $('#correct').click(function () {
        alert("you win!!!");
        Cookies.set('level', '2', {expires: 100});
        window.location = "index.html";
    });
});

function assignCorrect(c_index) {
    $(".square").each(function (index) {
        if (index == c_index) {
            $(this).attr('id', 'correct');

        } else {
            $(this).attr('id', 'incorrect');
        }
    });
}

function checkLives(lives) {
    if (lives == 0) {
        alert("you lose!");
        Cookies.set('level', '0', {expires: 100});
        window.location = "index.html";
    }
}

function setLives(lives) {
    $('#lives').html(lives);
}

function getLives() {
    return $('span#lives').html();
}

function livesDown(l) {
    return l - 1;
}
