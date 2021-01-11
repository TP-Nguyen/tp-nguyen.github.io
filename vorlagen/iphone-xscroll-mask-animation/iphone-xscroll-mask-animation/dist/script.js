const vid = document.getElementById("video");

let videoSrc = "pier-sonnenuntergang-brucke-see.jpg"
    // let videoSrc = "https://www.mangasail.co/sites/default/files/manga/3/290683//20201120112912419.png"
    // let videoSrc = "https://images.apple.com/media/us/iphone-x/2017/01df5b43-28e4-4848-bf20-490c34a926a7/overview/primary/hero/large_2x.mp4";

vid.src = videoSrc;

//When video loaded
vid.onloadeddata = () => {
    console.log("Video Loaded!!");
    vid.play();
};

//video loop
vid.onended = () => {
    vid.currentFrame = 0;
    vid.play();
};

let config = {
    maskNum: 1,
    videoNum: 1,
    iphoneNum: 1.3
        // useCanvas: false
};

const mainWrap = $('#wrapper');
const windowHeight = $(window).height();
const maskX = $(".mask__container");
const iphone = $(".iphone_model");
const vidBg = $("#videoBg");

//If Video Draw By Canvas
// if (config.useCanvas) {
//   const canvas = document.getElementById("canvas");
//   const ctx = canvas.getContext("2d");

//   canvas.css({ display: "block" });
//   canvas.width = 648;
//   canvas.height = 1372;

//   const _updateCanvasVideo = () => {
//     if (!vid) {
//       return;
//     }
//     ctx.drawImage(vid, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
//     requestAnimationFrame(_updateCanvasVideo);
//   };

//   _updateCanvasVideo();
// }

let cssInit = [];
let getPoint = 10000;
let startAnimate = false;
let slideMode = false;
let startOffset = 50;
let slideValue = 0;
let scrollValue;
let currentScroll;
let iphoneScale;
let maskScale;
let videoScale;
let radio;
let radioH;
let counter;
let num;

let newWidth;
let phoneH;
let phoneW;

let lastScrollTop = 0;

const _resizeCssInit = winHeight => {
    cssInit = [];

    radioH = winHeight / 1200;

    if (radioH >= 1) {
        radioH = 1;
    }

    newWidth = 900 * radioH;
    phoneW = 648 * radioH;
    phoneH = 1296 * radioH;

    //Set newX container's height
    mainWrap.height(newWidth);

    cssInit.push(newWidth, phoneW, phoneH);
    // console.log('cssInit Status', cssInit);

    $(".section__kv .row1").css({ height: `${cssInit[0]}px` });
    vidBg.css({ width: `${cssInit[0]}px`, height: `${cssInit[0]}px` });
    iphone.css({
        width: `${cssInit[1]}px`,
        height: `${cssInit[2]}px`,
        margin: `-${cssInit[2] / 2}px 0 0 -${cssInit[1] / 2}px`
    });

    maskX.css({ width: `${cssInit[0]}px`, height: `${cssInit[0]}px` });
};

const _modelSliding = slideOffset => {
    if (slideMode) {
        slideValue = Math.abs(currentScroll - slideOffset);
        // console.log('slideValue:', slideValue);
    }
};

_resizeCssInit(windowHeight);

$(window).resize(function() {
    let newWinH = $(window).height();
    _resizeCssInit(newWinH);
});

$(window).scroll(function() {
    currentScroll = $(this).scrollTop();

    //Switch Animation On
    if (currentScroll > startOffset) {
        startAnimate = true;
    } else if (currentScroll < startOffset) {
        maskScale = 1;
        videoScale = 1;
        iphoneScale = 1.3;
    } else {
        startAnimate = false;
    }

    //If On
    if (startAnimate) {
        num = num < 0 ? 0 : currentScroll - 180;

        scrollValue = currentScroll - startOffset;

        if (currentScroll > 130) {
            radio = Math.floor(scrollValue / 50 * getPoint) / getPoint;
        } else {
            radio = Math.floor(scrollValue / 100 * getPoint) / getPoint;
            if (radio <= 0) {
                radio = 0;
            }
        }

        counter = radio;

        maskScale = config.maskNum + counter;
        videoScale = config.videoNum + counter / 2;

        // iphone animation
        if (currentScroll >= 160 && currentScroll <= 600) {
            if (lastScrollTop < currentScroll) {
                //if ScrollDown
                iphoneScale =
                    Math.floor((iphoneScale - 0.005 * num) * getPoint) / getPoint;

                if (iphoneScale <= 0.3) {
                    iphoneScale = 0.3;
                }
            } else {
                //if ScrollUp
                iphoneScale =
                    Math.floor((iphoneScale + 0.0005 * num) * getPoint) / getPoint;

                if (iphoneScale >= 1.3) {
                    iphoneScale = 1.3;
                }
            }

            lastScrollTop = currentScroll;

            videoScale = 2;

            if (maskScale >= 5.5) {
                maskScale = 5.5;
            }
        } else if (currentScroll < 160) {
            iphoneScale = 1.3;

            if (maskScale <= 1) {
                maskScale = 1;
            }
            if (videoScale <= 1) {
                videoScale = 1;
            }
        } else if (currentScroll > 600) {
            videoScale = 2;
            maskScale = 5.5;
            iphoneScale = 0.3;
        }
    }

    if (currentScroll > 620) {
        slideMode = true;
        maskX.removeClass("fixed");
        vidBg.removeClass("fixed");

        _modelSliding(620);
    } else {
        slideMode = false;
        slideValue = 0;
        maskX.addClass("fixed");
        vidBg.addClass("fixed");
    }
    // console.log('Scale Checked:', iphoneScale, videoScale);
    // console.log('offset-top:', $('.iphone_model').offset().top);
    maskX.css({ transform: `scale(${maskScale}) translateZ(0)` });
    vidBg.css({ transform: `scale(${videoScale}) translateZ(0)` });
    iphone.css({
        transform: `scale(${iphoneScale}) translate3d(0, -${slideValue}px, 0)`
    });

});

//Trigger first when web loaded!
let e = $.Event("scroll");
$("html").trigger(e);