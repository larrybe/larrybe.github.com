$('document').ready(function () {
    $('.click').click(function () {
        $(this).toggleClass('clicked');
        $('.bg').toggleClass('clickedbg');
    });
});