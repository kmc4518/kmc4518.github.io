var vistor = Cookies.get('visted');

function init() {
    setCount(0);
    Cookies.set('visted', true, {expires: 100});
}

if (typeof vistor === 'undefined'){   
    init();
}
else
{
    setCount(getCount());
}

$(function () {
    
    checkLvl();
    var count = getCount();
    $('#count').html(count);

    $('#door').click(function(){
        incCount();
        checkCount(getCount());
    });

    function incCount(){
        count = ++count;
        setCount(count);
        $('#count').html(count);
    }
});

function setCount(c) {
    Cookies.set('count', c, { expires: 100 });
}

function getCount() {
    return Cookies.get('count');
}

function checkCount(c) {
    if (c == 10) {
        alert("-+-+-+-+-+-+-+-+- LEVEL 1 -+-+-+-+-+-+-+-+-")
        window.location = "level1.html"
    }
    if (c == 100) {
        alert("-+-+-+-+-+-+-+-+- LEVEL 2 -+-+-+-+-+-+-+-+-")
        window.location = "level2.html"
    }
    if (c == 1000) {
        alert("-+-+-+-+-+-+-+-+- LEVEL 3 -+-+-+-+-+-+-+-+-")
        window.location = "level2.html"
    }
    if (c == 10000) {
        alert("-+-+-+-+-+-+-+-+- LEVEL 4 -+-+-+-+-+-+-+-+-")
        window.location = "level2.html"
    }
}

function checkLvl(){
    var level = (Cookies.get('level'));

    if (typeof level === 'undefined') {
        Cookies.set('level', 0, {expires: 100});
    }

    if (level == '0')
    {
        Cookies.set('count', 0, {expires:100});
    }
}