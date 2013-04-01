/// <reference path="jquery-1.9.0.min.js" />

$(document).ready(function () {
    $('form').submit(function (e) {
        e.preventDefault();
        var entered = $('#search').val();
        var search = entered.replace(" ", "+")
        var language = $('select option:selected').val();
        switch (language) {
            case 'english':
                window.location = 'http://en.wikipedia.org/w/index.php?title=Special:Search&search=' + search;
                break;
            case 'spanish':
                window.location = 'http://es.wikipedia.org/w/index.php?title=Special:Search&search=' + search;
                break;
            case 'russian':
                window.location = 'http://ro.wikipedia.org/w/index.php?title=Special:Search&search=' + search;
                break;
            case 'italian':
                window.location = 'http://it.wikipedia.org/w/index.php?title=Special:Search&search=' + search;
                break;
            case 'portuguese':
                window.location = 'http://pt.wikipedia.org/w/index.php?title=Special:Search&search=' + search;
                break;
            case 'german':
                window.location = 'http://de.wikipedia.org/w/index.php?title=Special:Search&search=' + search;
                break;
            case 'french':
                window.location = 'http://fr.wikipedia.org/w/index.php?title=Special:Search&search=' + search;
                break;
            case 'polish':
                window.location = 'http://pl.wikipedia.org/w/index.php?title=Special:Search&search=' + search;
                break;
            case 'chinese':
                window.location = 'http://zh.wikipedia.org/w/index.php?title=Special:Search&search=' + search;
                break;
        }//end switch
    })//end submit
})//end ready