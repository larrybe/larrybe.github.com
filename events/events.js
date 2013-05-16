/// <reference path="../experiment/jquery-1.9.0.min.js" />
$(document).ready(function () {
    $('.events a').click(function (evt) {
        evt.preventDefault();
        var num = $(this).attr('id');
        var link = $(this).attr('href');
        $('#name').text(festivals[num].name);
        $('#date').text(festivals[num].date);
        $('#location').text(festivals[num].location);
        $('#desc').text(festivals[num].description);
        $('#link').attr('href', link);
        $('#wikiLink').attr('href', festivals[num].wiki);
        $('#photoCredit').attr('href', festivals[num].photoCredit);
        $('iframe').attr('src', festivals[num].map);
        $('.overview').show('750');
    })//end click
    $(document).keydown(function (e) {
        if (e.keyCode === 27)
            $('.overview').hide('800');
    })//end keyup
    $('.close').click(function () {
        $('.overview').hide('800');
    })
})//end ready