// Global
function hasClass(el, cls) {
    return el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
};

function addClass(el, cls) {
    if (!this.hasClass(el, cls)) {
        el.className += " " + cls;
    }
};

function removeClass(el, cls) {
    if (this.hasClass(el, cls)) {

        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
};

// Elements

var site = document.getElementsByClassName('site')[0];
var wrap = document.getElementsByClassName('wrap')[0];

var panel = document.getElementsByClassName('panel');

var nav_up = document.getElementsByClassName('js-up'),
    nav_left = document.getElementsByClassName('js-left'),
    nav_right = document.getElementsByClassName('js-right'),
    nav_down = document.getElementsByClassName('js-down');

var zoom = document.getElementsByClassName('js-zoom'); //Overview

// Tracking
var pos_x = 0,
    pos_y = 0;

function setPos() {
    wrap.style.transform = 'translateX(' + pos_x + '00%) translateY(' + pos_y + '00%)';
    setTimeout(function() {
        removeClass(wrap, 'animate');
    }, 600);
}

setPos();

function moveUp() {
    addClass(wrap, 'animate');
    pos_y++;
    setPos();
}

function moveLeft() {
    addClass(wrap, 'animate');
    pos_x++;
    setPos();
}

function moveRight() {
    addClass(wrap, 'animate');
    pos_x--;
    setPos();
}

function moveDown() {
    addClass(wrap, 'animate');
    pos_y--;
    setPos();
}

for (var x = 0; x < nav_up.length; x++) {
    nav_up[x].addEventListener('click', moveUp);
}

for (var x = 0; x < nav_left.length; x++) {
    nav_left[x].addEventListener('click', moveLeft);
}

for (var x = 0; x < nav_right.length; x++) {
    nav_right[x].addEventListener('click', moveRight);
}

for (var x = 0; x < nav_down.length; x++) {
    nav_down[x].addEventListener('click', moveDown);
}

// Animations

for (var x = 0; x < zoom.length; x++) {
    zoom[x].addEventListener('click', zoomOut);
}

function zoomOut(e) {
    e.stopPropagation();
    addClass(site, 'show-all');
    for (var x = 0; x < panel.length; x++) {
        (function(_x) {
            panel[_x].addEventListener('click', setPanelAndZoom);
        })(x);
    }
}

function setPanelAndZoom(e) {
    pos_x = -e.target.getAttribute('data-x-pos'),
        pos_y = e.target.getAttribute('data-y-pos');
    setPos();
    zoomIn();
}

function zoomIn() {
    for (var x = 0; x < panel.length; x++) {
        panel[x].removeEventListener('click', setPanelAndZoom);
    }
    removeClass(site, 'show-all');
}