/// <reference path="jquery-1.9.1.min.js" />
$(document).ready(function () {
    function textSize() {
        $('.intro h4').css('font-size', ($(window).width() / 17) + 'px');
    }
    textSize()
    $(window).resize(function () {
        var windowSize = $(window).width() / 17;
        if (windowSize > 35) {
            $('.intro h4').css('font-size', windowSize + 'px');
        } else if (windowSize < 35) {
            $('.intro h4').css('font-size', 35 + 'px');
        }
    });
    function fontControl() {
        $('#text-controls').show();
        var fontNum = 20;
        var fontSize = $('.main p').css('font-size', fontNum + 'px');
        var decrease = $('#decrease');
        var increase = $('#increase');
        decrease.click(function () {
            if (fontNum <= 6) {
                fontSize = $('.main p').css('font-size', 6 + 'px');
            } else {
                fontNum = fontNum - 2
            };
            fontSize = $('.main p').animate({ fontSize: fontNum + 'px' }, 150);
        })
        increase.click(function () {
            if (fontNum >= 46) {
                fontSize = $('.main p').css('font-size', 46 + 'px');
            } else {
                fontNum = fontNum + 2
            };
            fontSize = $('.main p').animate({ fontSize: fontNum + 'px' }, 150);
        })
    }
    fontControl();
})