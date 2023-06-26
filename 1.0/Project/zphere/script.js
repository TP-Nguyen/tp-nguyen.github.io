$(document).ready(function() {
    const $cont = $('.cont');
    var $slider;
    var $nav = $('.nav');
    const winW = $(window).width();
    const animSpd = 750; // Change also in CSS
    const distOfLetGo = winW * 0.2;
    let animation = false;
    let autoScrollVar = true;
    let diff = 0;
    var navid = null;

    let curSlideGrundlagen = 1,
        curSlidesportartern = 1,
        curSlidezielgruppe = 1,
        curSlidekonkurrenz = 1,
        curSlidedesignReal = 1,
        curSlidebranding = 1,
        curSlidestruktur = 1,
        curSlidecdesign = 1,
        curSlideappdesign = 1,
        curSlideprototyp = 1;
    var curSlide;
    var gp;
    var paneltyp;
    // Generating slides
    let seiten;
    let Grundlagen = ['0001', '0002', '0003']; // Change number of slides in CSS also
    let sportartern = ['0004', '0005', '0006'];
    let zielgruppe = ['0007', '0008', '0009', '0010', '0011'];
    let konkurrenz = ['0012', '0013'];
    let designReal = ['0014', '0015', '0016', '0017', '0018', '0019', '0020', '0021', '0022'];
    let branding = ['0023', '0024', '0025'];
    let struktur = ['0026', '0027', '0028', '0029', '0030'];
    let cdesign = ['0031', '0032', '0033', '0034', '0035'];
    let appdesign = ['0036', '0037', '0038', '0039', '0040', '0041', '0042', '0043', '0044', '0045', '0046', '0047', '0048'];
    let prototyp = ['0049', '0050', '0051', '0052', '0053', '0054', '0055', '0056', '0057'];

    let typ = ['Grundlagen', 'sportartern', 'zielgruppe', 'konkurrenz', 'designReal', 'branding', 'struktur', 'cdesign', 'appdesign', 'prototyp'];
    contentID = document.getElementsByClassName('slider')[1].id;
    $slider = $('.slider');

    for (var t = 0; t < 10; t++) {

        switch (typ[t]) {
            case "Grundlagen":
                seiten = Grundlagen;
                $slider = $("#Grundlagen");
                $nav = $("#navGrundlagen");
                break;
            case "sportartern":
                seiten = sportartern;
                $slider = $('#sportartern');
                $nav = $("#navsportartern");
                break;
            case "zielgruppe":
                seiten = zielgruppe;
                $slider = $('#zielgruppe');
                $nav = $("#navzielgruppe");
                break;
            case "konkurrenz":
                seiten = konkurrenz;
                $slider = $('#konkurrenz');
                $nav = $("#navkonkurrenz");
                break;
            case "designReal":
                seiten = designReal;
                $slider = $('#designReal');
                $nav = $("#navdesignReal");
                break;
            case "branding":
                seiten = branding;
                $slider = $('#branding');
                $nav = $("#navbranding");
                break;
            case "struktur":
                seiten = struktur;
                $slider = $('#struktur');
                $nav = $("#navstruktur");
                break;
            case "cdesign":
                seiten = cdesign;
                $slider = $('#cdesign');
                $nav = $("#navcdesign");
                break;
            case "appdesign":
                seiten = appdesign;
                $slider = $('#appdesign');
                $nav = $("#navappdesign");
                break;
            case "prototyp":
                seiten = prototyp;
                $slider = $('#prototyp');
                $nav = $("#navprototyp");
                break;
                // default:
                //     seiten = ['0063'];
                //     break;
        }
        let anzahlSeiten = seiten.length;
        let seitenDivided = [];

        seiten.map(wert => {
            let length = wert.length;
            let letters = Math.floor(length / 4);
            let exp = new RegExp(".{1," + letters + "}", "g");

            seitenDivided.push(wert.match(exp));
        });

        let generateSlide = function(wert) {
            let frag1 = $(document.createDocumentFragment());
            let frag2 = $(document.createDocumentFragment());
            const numSlide = seiten.indexOf(seiten[wert]) + 1;
            const leftMove = numSlide * 50 - 50;


            const $slide =
                $(`<div data-target="${numSlide}" class="slide slide--${numSlide}">
							<div class="slide__darkbg slide--${numSlide}__darkbg" style="left: -${leftMove}%; background:url(zphere/zphere_Doku_pages-to-jpg-${seiten[wert]}.jpg) center center no-repeat; background-size: auto 100vh"  ></div>
							
						</div>`);

            const navSlide = $(`<li data-target="${numSlide}" class="nav__slide ${typ[t]} nav__slide--${numSlide} "></li>`);
            frag2.append(navSlide);
            $nav.append(frag2);

            $slider.append($slide);
        };


        for (let i = 0, length = anzahlSeiten; i < length; i++) {
            generateSlide(i);
        }
        $('.nav__slide--1').addClass('nav-active');
    }
    // Navigation

    function timeout() {
        animation = false;
    }

    function navigateRight() {
        curSlide = getSlide(gp);
        if (!autoScrollVar) return;
        if (curSlide >= anzahlSeiten) return;
        pagination(0);
        setTimeout(timeout, animSpd);
        bullets(curSlide + 1);
        curSlide++;
        updateSlide(gp, curSlide);
    }

    function navigateLeft() {
        curSlide = getSlide(gp);
        if (curSlide <= 1) return;
        pagination(2);
        setTimeout(timeout, animSpd);
        bullets(curSlide - 1);
        curSlide--;
        updateSlide(gp, curSlide);
    }

    function toDefault() {
        pagination(1);
        setTimeout(timeout, animSpd);
    }

    function updatePanel(checkThis) {
        switch (checkThis) {
            case "Grundlagen":
                anzahlSeiten = Grundlagen.length;
                $slider = $("#Grundlagen");
                $nav = $("#navGrundlagen");
                navid = "navGrundlagen";
                paneltyp = "Grundlagen";
                break;
            case "navGrundlagen":
                anzahlSeiten = Grundlagen.length;
                $slider = $("#Grundlagen");
                $nav = $("#navGrundlagen");
                navid = "navGrundlagen";
                paneltyp = "Grundlagen";
                break;
            case "navsportartern":
                anzahlSeiten = sportartern.length;
                $slider = $('#sportartern');
                $nav = $("#navsportartern");
                navid = "navsportartern";
                paneltyp = "sportartern";
                break;
            case "sportartern":
                anzahlSeiten = sportartern.length;
                $slider = $('#sportartern');
                $nav = $("#navsportartern");
                navid = "navsportartern";
                paneltyp = "sportartern";
                break;
            case "navzielgruppe":
                anzahlSeiten = zielgruppe.length;
                $slider = $('#zielgruppe');
                $nav = $("#navzielgruppe");
                navid = "navzielgruppe";
                paneltyp = "zielgruppe";
                break;
            case "zielgruppe":
                anzahlSeiten = zielgruppe.length;
                $slider = $('#zielgruppe');
                $nav = $("#navzielgruppe");
                navid = "navzielgruppe";
                paneltyp = "zielgruppe";
                break;
            case "navkonkurrenz":
                anzahlSeiten = konkurrenz.length;
                $slider = $('#konkurrenz');
                $nav = $("#navkonkurrenz");
                navid = "navkonkurrenz";
                paneltyp = "konkurrenz";
                break;
            case "konkurrenz":
                anzahlSeiten = konkurrenz.length;
                $slider = $('#konkurrenz');
                $nav = $("#navkonkurrenz");
                navid = "navkonkurrenz";
                paneltyp = "konkurrenz";
                break;
            case "designReal":
                anzahlSeiten = designReal.length;
                $slider = $('#designReal');
                $nav = $("#navdesignReal");
                navid = "navdesignReal";
                paneltyp = "designReal";
                break;
            case "branding":
                anzahlSeiten = branding.length;
                $slider = $('#branding');
                $nav = $("#navbranding");
                navid = "navbranding";
                paneltyp = "branding";
                break;
            case "struktur":
                anzahlSeiten = struktur.length;
                $slider = $('#struktur');
                $nav = $("#navstruktur");
                navid = "navstruktur";
                paneltyp = "struktur";
                break;
            case "cdesign":
                anzahlSeiten = cdesign.length;
                $slider = $('#cdesign');
                $nav = $("#navcdesign");
                navid = "navcdesign";
                paneltyp = "cdesign";
                break;
            case "appdesign":
                anzahlSeiten = appdesign.length;
                $slider = $('#appdesign');
                $nav = $("#navappdesign");
                navid = "navappdesign";
                paneltyp = "appdesign";
                break;
            case "prototyp":
                anzahlSeiten = prototyp.length;
                $slider = $('#prototyp');
                $nav = $("#navprototyp");
                navid = "navprototyp";
                paneltyp = "prototyp";
                break;
            case "navdesignReal":
                anzahlSeiten = designReal.length;
                $slider = $('#designReal');
                $nav = $("#navdesignReal");
                navid = "navdesignReal";
                paneltyp = "designReal";
                break;
            case "navbranding":
                anzahlSeiten = branding.length;
                $slider = $('#branding');
                $nav = $("#navbranding");
                navid = "navbranding";
                paneltyp = "branding";
                break;
            case "navstruktur":
                anzahlSeiten = struktur.length;
                $slider = $('#struktur');
                $nav = $("#navstruktur");
                navid = "navstruktur";
                paneltyp = "struktur";
                break;
            case "navcdesign":
                anzahlSeiten = cdesign.length;
                $slider = $('#cdesign');
                $nav = $("#navcdesign");
                navid = "navcdesign";
                paneltyp = "cdesign";
                break;
            case "navappdesign":
                anzahlSeiten = appdesign.length;
                $slider = $('#appdesign');
                $nav = $("#navappdesign");
                navid = "navappdesign";
                paneltyp = "appdesign";
                break;
            case "navprototyp":
                anzahlSeiten = prototyp.length;
                $slider = $('#prototyp');
                $nav = $("#navprototyp");
                navid = "navprototyp";
                paneltyp = "prototyp";
                break;
        }
    }

    function updateSlide(checkThis, value) {
        switch (checkThis) {
            case "Grundlagen" || "navGrundlagen":
                curSlideGrundlagen = value;
                break;
            case "sportartern" || "navsportartern":
                curSlidesportartern = value;
                break;
            case "zielgruppe" || "navzielgruppe":
                curSlidezielgruppe = value;
                break;
            case "konkurrenz" || "navkonkurrenz":
                curSlidekonkurrenz = value;
                break;
            case "designReal" || "navdesignReal":
                curSlidedesignReal = value;
                break;
            case "branding" || "navbranding":
                curSlidebranding = value;
                break;
            case "struktur" || "navstruktur":
                curSlidestruktur = value;
                break;
            case "cdesign" || "navcdesign":
                curSlidecdesign = value;
                break;
            case "appdesign" || "navappdesign":
                curSlideappdesign = value;
                break;
            case "prototyp" || "navprototyp":
                curSlideprototyp = value;
                break;
        }
    }

    function getSlide(checkThis) {
        switch (checkThis) {
            case "Grundlagen" || "navGrundlagen":
                return curSlideGrundlagen;
                break;
            case "sportartern" || "navsportartern":
                return curSlidesportartern;
                break;
            case "zielgruppe" || "navzielgruppe":
                return curSlidezielgruppe;
                break;
            case "konkurrenz" || "navkonkurrenz":
                return curSlidekonkurrenz;
                break;
            case "designReal" || "navdesignReal":
                return curSlidedesignReal;
                break;
            case "branding" || "navbranding":
                return curSlidebranding;
                break;
            case "struktur" || "navstruktur":
                return curSlidestruktur;
                break;
            case "cdesign" || "navcdesign":
                return curSlidecdesign;
                break;
            case "appdesign" || "navappdesign":
                return curSlideappdesign;
                break;
            case "prototyp" || "navprototyp":
                return curSlideprototyp;
                break;
        }
    }

    function pagination(direction) {
        curSlide = getSlide(paneltyp);
        diff = 0;
        animation = true;
        $slider.css({
            'transform': 'translate3d(-' + (curSlide - direction) * 100 + '%, 0, 0)'
        });
        $slider.find('.slide__darkbg').css({
            'transform': 'translate3d(' + (curSlide - direction) * 50 + '%, 0, 0)'
        });
    }

    $(document).on('click', '.nav__slide:not(.nav-active)', function(e) {
        updatePanel(e.target.parentElement.id);
        let target = +$(this).attr('data-target');
        curSlide = getSlide(paneltyp);
        bullets(target);
        updateSlide(paneltyp, target);
        pagination(1);
    });

    function bullets(newS) {
        var bulletnav = document.getElementsByClassName(paneltyp);
        $(bulletnav).removeClass('nav-active');
        $(bulletnav[newS - 1]).addClass('nav-active');
    }

    $(document).on('keydown', function(e) {
        if (e.which === 39) navigateRight();
        if (e.which === 37) navigateLeft();
    });
    $(document).on('mousewheel DOMMouseScroll', function(e) {
        if (animation) return;
        let delta = e.originalEvent.wheelDelta;
        var p = e.target.parentElement;
        gp = p.parentElement.id;
        updatePanel(gp);
        if (delta > 0 || e.originalEvent.detail < 0) navigateLeft();
        if (delta < 0 || e.originalEvent.detail > 0) navigateRight();
    });

    $(document).on('mouseenter', '.slide', function(e) {
        var p = e.target.parentElement;
        gp = p.parentElement.id;
        updatePanel(gp);
    });
    $(document).on('mousedown touchstart', '.slide', function(e) {
        if (animation) return;
        let target = +$(this).attr('data-target');
        let startX = e.pageX || e.originalEvent.touches[0].pageX;
        $slider.removeClass('animation');

        $(document).on('mousemove touchmove', function(e) {
            let x = e.pageX || e.originalEvent.touches[0].pageX;
            diff = startX - x;
            if (target === 1 && diff < 0 || target === anzahlSeiten && diff > 0) return;
            pagination(1);
        });
    });

    $(document).on('mouseup touchend', function(e) {
        $(document).off('mousemove touchmove');

        if (animation) return;

        if (diff >= distOfLetGo) {
            navigateRight();
        } else if (diff <= -distOfLetGo) {
            navigateLeft();
        } else {
            toDefault();
        }
    });

});