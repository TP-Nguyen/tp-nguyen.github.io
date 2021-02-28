var Navigation = `<nav class="menu"><ul>
                <li><a href="index.html" onclick="hidden()">Home</a></li>
                <li><a href="aboutme.html">About me</a></li>
                <li><a href="index.html#skill">Experience</a></li>
                <li><a href="index.html#projectoverview">Project</a></li>
            </ul></nav>
            <div id="smallLogo">NGUYEN</div>
            <div id="menu"><i class="fas fa-bars"></i></div>`;

var scrollbar = `<div id="rightscroll" class="scrollbar"> </div> <div id="leftscroll"  class="scrollbar"></div>`;

function placeholder() {
    //document.getElementById('placeholder').onload = function(){ 
    document.getElementById('navi-placeholder').innerHTML = Navigation;
    document.getElementById('scrollbar-placeholder').innerHTML = scrollbar;
}

//Gib Navigation nach scrollen Hintergrund
$(window).scroll(function() {
    if ($(window).scrollTop()) {
        $('header').addClass('black');
    } else {
        $('header').removeClass('black');
    }
})

//Aktiviert Navigationsort an
// $(window).scroll(function () {
//     var scrollDistance = $(window).scrollTop();

//     $('section').each(function (i) {
//         if ($(this).position().top <= scrollDistance + 3) {
//             $('nav a.active').removeClass('active');
//             $('nav a').eq(i).addClass('active');
//         }
//     });
// }).scroll();

//Hamburgermenü
$(document).ready(function() {
    $('#menu').click(function() {
        $('nav').toggleClass('menu');
        $('header').toggleClass('back');
    })
})

function hidden() {
    document.getElementsByClassName("menue").style.display = "none";
}
$(document).ready(function() {
    $('nav').click(function() {
        $('nav').toggleClass('menu');
        if ($(window).scrollTop() == $('header').position().top) {
            $('header').removeClass('back');
        }
    })
})


//smallLogo
$(window).scroll(function() {

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
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $('#home').css({
        filter: "blur(" + (scroll / 100) + "px)"
    });
})