//Scrollbar ändern
window.onscroll = function() {
    var progress = (window.pageYOffset / totalHeight) * 100;
    leftscroll.style.height = progress + "%";
    rightscroll.style.height = progress + "%";
}

function showPDF(x) {
    document.getElementById(x).style.visibility = "visible";
}

function hiddenPDF(x) {
    document.getElementById(x).style.visibility = "hidden";
}

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $('#top').css({
        filter: "blur(" + (scroll / 100) + "px)"
    });
})