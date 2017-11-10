randomizePos();

$(function () {

    $('.hidden-objective').click(function(){
        $(this).remove();
    });

    setTimeout(function () {
        checkObjectives($('.hidden-objective'));
    }, 15000);
    
});

function randomizePos() {
        $('.hidden-objective').each(function (index) {
        var styles = {
            left: ((Math.random() * $('#main-container').width())),
            top: ((Math.random() * $('#main-container').height()))
        };

        $(this).css(styles);
    });
}

function checkObjectives(obj) {
    
    if (obj.length == 0) 
    {
        alert ("you win ");
    }
    else
    {
        alert ("you lose!")
    }
}