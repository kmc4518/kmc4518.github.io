// TO DO: Have a check for if all squares are gone -> go to next level

randomizePos();


$(function () {

    $('.hidden-objective').click(function () {
        $(this).remove();
    });

    setTimeout(function () {
        checkObjectives($('.hidden-objective'));
    }, 20000);

});

function randomizePos() {
    $('.hidden-objective').each(function (index) {
        var styles = {
            // left: ((Math.random() * ($('#main-container').width()-500))),
            // top: ((Math.random() * ($('#main-container').height()-500)))
            left: ((Math.random() * ($('#main-container').width()))),
            top: ((Math.random() * ($('#main-container').height())))
        };

        $(this).css(styles);
    });
}

function checkObjectives(obj) {

    if (obj.length == 0) {
        alert("you win ");
        Cookies.set('level', '3', {expires: 100});
        window.location = "index.html";
    } else {
        alert("you lose!");
        Cookies.set('level', '0', {expires: 100});
        window.location = "index.html";
    }
}
