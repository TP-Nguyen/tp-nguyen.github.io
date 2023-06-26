var Navigation = `<ul>
                <li><a href="#home" onclick="hidden()">Home</a></li>
                <li><a href="#aboutme">About me</a></li>
                <li><a href="#skill">Skill</a></li>
                <li><a href="#project">Projekt</a></li>
                <li><a href="#contact">Kontakt</a></li>
            </ul>`;
var test ="test";
function navi(){ 
document.getElementById('placeholder').innerHTML = Navigation;
}



//Gib Navigation nach scrollen Hintergrund
$(window).scroll(function () {
    if ($(window).scrollTop()) {
        $('header').addClass('black');
    } else {
        $('header').removeClass('black');
    }
})

//Aktiviert Navigationsort an
$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();

    $('section').each(function (i) {
        if ($(this).position().top <= scrollDistance + 3) {
            $('nav a.active').removeClass('active');
            $('nav a').eq(i).addClass('active');
        }
    });
}).scroll();

//Hamburgermenü
$(document).ready(function () {
    $('#menu').click(function () {
        $('nav').toggleClass('menu');
        $('header').toggleClass('back');
    })
})

function hidden() {
    document.getElementsByClassName("menue").style.display = "none";
}
$(document).ready(function () {
    $('nav').click(function () {
        $('nav').toggleClass('menu');
        if ($(window).scrollTop() == $('header').position().top) {
            $('header').removeClass('back');
        }
    })
})


//smallLogo
$(window).scroll(function () {

    var Speed = ($('#smallLogo').height() / $('#home').height());

    var y = ($(window).scrollTop() * Speed);

    var Padding = $('header').height() - y;
    if (Padding > 0) {
        $('#smallLogo').addClass('hidden');
    }
    if (Padding < 0) {
        $('#smallLogo').removeClass('hidden');
    }
})

//bigLogo
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $('#home').css({
        filter: "blur(" + (scroll / 100) + "px)"
    });
})
