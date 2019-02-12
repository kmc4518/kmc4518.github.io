randomizePos();


$(function () {

    $('.hidden-objective').click(function(){
        $(this).remove();
    });

    setTimeout(function () {
        checkObjectives($('.hidden-objective'));
    }, 20000);
    
});

function randomizePos() {
        $().each(function (index) {
        var styles = {
            left: ((Math.random() * ($('#main-container').width()-500))),
            top: ((Math.random() * ($('#main-container').height()-500)))
        };

        $(this).css(styles);
    });
}

function checkObjectives(obj) {
    
    if (obj.length == 0) 
    {
        alert ("you win ");
        Cookies.set('level', '3', { expires: 100 });
        window.location = "index.html";
    }
    else
    {
        alert ("you lose!")
        Cookies.set('level', '0', { expires: 100 });
        window.location = "index.html";
    }
}