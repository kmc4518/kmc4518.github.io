
$(function () {
    $('.hidden-objective').each(function (index) {
        var styles = {
            left: ((Math.random() * $('#main-container').width())),
            top: ((Math.random() * $('#main-container').height()))
        };

        $(this).css(styles);
    });
});

function init(){

}

init();
