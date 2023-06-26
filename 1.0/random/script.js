//skill anzeigen
function showSkill(x) {
    switch (x) {
        case 1:
            document.getElementById("ai").style.display = "block";
            document.getElementById("aiimg").style.filter = "grayscale(0%)";

            document.getElementById("idimg").style.filter = "grayscale(100%)";
            document.getElementById("psimg").style.filter = "grayscale(100%)";
            document.getElementById("xdimg").style.filter = "grayscale(100%)";
            document.getElementById("javaimg").style.filter = "grayscale(100%)";
            document.getElementById("gitimg").style.filter = "grayscale(100%)";
            document.getElementById("htmlimg").style.filter = "grayscale(100%)";
            document.getElementById("cssimg").style.filter = "grayscale(100%)";

            document.getElementById("id").style.display = "none";
            document.getElementById("ps").style.display = "none";
            document.getElementById("xd").style.display = "none";
            document.getElementById("java").style.display = "none";
            document.getElementById("github").style.display = "none";
            document.getElementById("html").style.display = "none";
            document.getElementById("css").style.display = "none";
            break;
        case 2:
            document.getElementById("id").style.display = "block";
            document.getElementById("idimg").style.filter = "grayscale(0%)";

            document.getElementById("aiimg").style.filter = "grayscale(100%)";
            document.getElementById("psimg").style.filter = "grayscale(100%)";
            document.getElementById("xdimg").style.filter = "grayscale(100%)";
            document.getElementById("javaimg").style.filter = "grayscale(100%)";
            document.getElementById("gitimg").style.filter = "grayscale(100%)";
            document.getElementById("htmlimg").style.filter = "grayscale(100%)";
            document.getElementById("cssimg").style.filter = "grayscale(100%)";

            document.getElementById("ai").style.display = "none";
            document.getElementById("ps").style.display = "none";
            document.getElementById("xd").style.display = "none";
            document.getElementById("java").style.display = "none";
            document.getElementById("github").style.display = "none";
            document.getElementById("html").style.display = "none";
            document.getElementById("css").style.display = "none";
            break;
        case 3:
            document.getElementById("ps").style.display = "block";
            document.getElementById("psimg").style.filter = "grayscale(0%)";

            document.getElementById("aiimg").style.filter = "grayscale(100%)";
            document.getElementById("idimg").style.filter = "grayscale(100%)";
            document.getElementById("xdimg").style.filter = "grayscale(100%)";
            document.getElementById("javaimg").style.filter = "grayscale(100%)";
            document.getElementById("gitimg").style.filter = "grayscale(100%)";
            document.getElementById("htmlimg").style.filter = "grayscale(100%)";
            document.getElementById("cssimg").style.filter = "grayscale(100%)";

            document.getElementById("ai").style.display = "none";
            document.getElementById("id").style.display = "none";
            document.getElementById("xd").style.display = "none";
            document.getElementById("java").style.display = "none";
            document.getElementById("github").style.display = "none";
            document.getElementById("html").style.display = "none";
            document.getElementById("css").style.display = "none";
            break;
        case 4:
            document.getElementById("xd").style.display = "block";
            document.getElementById("xdimg").style.filter = "grayscale(0%)";

            document.getElementById("aiimg").style.filter = "grayscale(100%)";
            document.getElementById("idimg").style.filter = "grayscale(100%)";
            document.getElementById("psimg").style.filter = "grayscale(100%)";
            document.getElementById("javaimg").style.filter = "grayscale(100%)";
            document.getElementById("gitimg").style.filter = "grayscale(100%)";
            document.getElementById("htmlimg").style.filter = "grayscale(100%)";
            document.getElementById("cssimg").style.filter = "grayscale(100%)";

            document.getElementById("ai").style.display = "none";
            document.getElementById("id").style.display = "none";
            document.getElementById("ps").style.display = "none";
            document.getElementById("java").style.display = "none";
            document.getElementById("github").style.display = "none";
            document.getElementById("html").style.display = "none";
            document.getElementById("css").style.display = "none";
            break;
        case 5:
            document.getElementById("java").style.display = "block";
            document.getElementById("javaimg").style.filter = "grayscale(0%)";

            document.getElementById("aiimg").style.filter = "grayscale(100%)";
            document.getElementById("idimg").style.filter = "grayscale(100%)";
            document.getElementById("psimg").style.filter = "grayscale(100%)";
            document.getElementById("xdimg").style.filter = "grayscale(100%)";
            document.getElementById("gitimg").style.filter = "grayscale(100%)";
            document.getElementById("htmlimg").style.filter = "grayscale(100%)";
            document.getElementById("cssimg").style.filter = "grayscale(100%)";

            document.getElementById("ai").style.display = "none";
            document.getElementById("id").style.display = "none";
            document.getElementById("ps").style.display = "none";
            document.getElementById("xd").style.display = "none";
            document.getElementById("github").style.display = "none";
            document.getElementById("html").style.display = "none";
            document.getElementById("css").style.display = "none";
            break;
        case 6:
            document.getElementById("github").style.display = "block";
            document.getElementById("gitimg").style.filter = "grayscale(0%)";

            document.getElementById("aiimg").style.filter = "grayscale(100%)";
            document.getElementById("idimg").style.filter = "grayscale(100%)";
            document.getElementById("psimg").style.filter = "grayscale(100%)";
            document.getElementById("xdimg").style.filter = "grayscale(100%)";
            document.getElementById("javaimg").style.filter = "grayscale(100%)";
            document.getElementById("htmlimg").style.filter = "grayscale(100%)";
            document.getElementById("cssimg").style.filter = "grayscale(100%)";

            document.getElementById("ai").style.display = "none";
            document.getElementById("id").style.display = "none";
            document.getElementById("ps").style.display = "none";
            document.getElementById("xd").style.display = "none";
            document.getElementById("java").style.display = "none";
            document.getElementById("html").style.display = "none";
            document.getElementById("css").style.display = "none";
            break;
        case 7:
            document.getElementById("html").style.display = "block";
            document.getElementById("htmlimg").style.filter = "grayscale(0%)";

            document.getElementById("aiimg").style.filter = "grayscale(100%)";
            document.getElementById("idimg").style.filter = "grayscale(100%)";
            document.getElementById("psimg").style.filter = "grayscale(100%)";
            document.getElementById("xdimg").style.filter = "grayscale(100%)";
            document.getElementById("javaimg").style.filter = "grayscale(100%)";
            document.getElementById("gitimg").style.filter = "grayscale(100%)";
            document.getElementById("cssimg").style.filter = "grayscale(100%)";

            document.getElementById("ai").style.display = "none";
            document.getElementById("id").style.display = "none";
            document.getElementById("ps").style.display = "none";
            document.getElementById("xd").style.display = "none";
            document.getElementById("java").style.display = "none";
            document.getElementById("github").style.display = "none";
            document.getElementById("css").style.display = "none";
            break;
        case 8:
            document.getElementById("css").style.display = "block";
            document.getElementById("cssimg").style.filter = "grayscale(0%)";

            document.getElementById("aiimg").style.filter = "grayscale(100%)";
            document.getElementById("idimg").style.filter = "grayscale(100%)";
            document.getElementById("psimg").style.filter = "grayscale(100%)";
            document.getElementById("xdimg").style.filter = "grayscale(100%)";
            document.getElementById("javaimg").style.filter = "grayscale(100%)";
            document.getElementById("gitimg").style.filter = "grayscale(100%)";
            document.getElementById("htmlimg").style.filter = "grayscale(100%)";

            document.getElementById("ai").style.display = "none";
            document.getElementById("id").style.display = "none";
            document.getElementById("ps").style.display = "none";
            document.getElementById("xd").style.display = "none";
            document.getElementById("java").style.display = "none";
            document.getElementById("github").style.display = "none";
            document.getElementById("html").style.display = "none";
            break;
    }
}

const gra = function(min, max) {
    return Math.random() * (max - min) + min;
};
const init = function() {
    let items = document.querySelectorAll("li");
    for (let i = 0; i < items.length; i++) {
        items[i].style.minHeight = gra(120, 205) + "vh";
        items[i].style.background = randomColor({ luminosity: "light" });
    }

    cssScrollSnapPolyfill();
};
init();