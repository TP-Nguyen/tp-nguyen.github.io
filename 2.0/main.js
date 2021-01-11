//Scrollbar ändern
window.onscroll = function() {
    var progress = (window.pageYOffset / totalHeight) * 100;
    leftscroll.style.height = progress + "%";
    rightscroll.style.height = progress + "%";
}