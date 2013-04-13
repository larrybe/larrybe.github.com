$('document').ready(function () {
    $('a').click(function (evt) {
        evt.preventDefault();
        var box = $(this).attr('id');
        $('#' + box + 'Box').slideDown(200);
        $('#' + box + 'Close').click(function () {
            $('#' + box + 'Box').slideUp(100);
        })
    })


    $('input[name="enterTemp"], select[name="tempUnits"]').on('keyup change', function () {
        var tempInput = $('input[name="enterTemp"]').val();
        var tempSelect = $('select[name="tempUnits"]:eq(0)').val();
        var tempSelect1 = $('select[name="tempUnits"]:eq(1)').val();

        function tempCalc(n1, n2, n3, n4) {
            return $('#tempResult').html(parseFloat(((((+tempInput + n1) * n2)) * n3 + n4).toPrecision(13)));
        };

        switch (tempSelect) {
            case 'celsius':
                switch (tempSelect1) {
                    case 'fahrenheit':
                        tempCalc(0, 1, 1.8, 32);
                        break;
                    case 'kelvin':
                        tempCalc(0, 1, 1, 273.15);
                        break;
                    case 'celsius':
                        tempCalc(0, 1, 1, 0);
                        break;
                }
                break;
            case 'fahrenheit':
                switch (tempSelect1) {
                    case 'celsius':
                        tempCalc(-32, 1, (5 / 9), 0);
                        break;
                    case 'kelvin':
                        tempCalc(459.67, 1, (5 / 9), 0);
                        break;
                    case 'fahrenheit':
                        tempCalc(0, 1, 1, 0);
                        break;
                }
                break;
            case 'kelvin':
                switch (tempSelect1) {
                    case 'celsius':
                        tempCalc(-273.15, 1, 1, 0);
                        break;
                    case 'fahrenheit':
                        tempCalc(0, (9 / 5), 1, -459.67);
                        break;
                    case 'kelvin':
                        tempCalc(0, 1, 1, 0);
                        break;
                }
        }
    })

    $('input[name="enterTime"], select[name="timeUnits"]').on('keyup change', function () {
        var timeInput = $('input[name="enterTime"]').val();
        var timeSelect = $('select[name="timeUnits"]:eq(0)').val();
        var timeSelect1 = $('select[name="timeUnits"]:eq(1)').val();
        function timeCalcd(s, n1, n2, n3, n4, n5, n6) {
            return $('#timeResult').html(s + parseFloat(((timeInput / (n1 * n2 * n3 * n4 * n5 * n6)).toPrecision(13))));
        };
        function timeCalcm(s, n1, n2, n3, n4, n5, n6) {
            return $('#timeResult').html(s + parseFloat(((timeInput) * n1 * n2 * n3 * n4 * n5 * n6).toPrecision(13)));
        };
        switch (timeSelect) {
            case 'seconds':
                switch (timeSelect1) {
                    case 'milliseconds':
                        timeCalcm('', 1000, 1, 1, 1, 1, 1);
                        break;
                    case 'seconds':
                        timeCalcm('', 1, 1, 1, 1, 1, 1);
                        break;
                    case 'minutes':
                        timeCalcd('', 60, 1, 1, 1, 1, 1);
                        break;
                    case 'hours':
                        timeCalcd('', 60, 60, 1, 1, 1, 1);
                        break;
                    case 'days':
                        timeCalcd('', 60, 60, 24, 1, 1, 1);
                        break;
                    case 'weeks':
                        timeCalcd('', 60, 60, 24, 7, 1, 1);
                        break;
                    case 'months':
                        timeCalcd('~', 60, 60, 24, 7, (+4.34812), 1);
                        break;
                    case 'years':
                        timeCalcd('~', 60, 60, 24, 365, 1, 1);
                        break;
                }
                break;
            case 'milliseconds':
                switch (timeSelect1) {
                    case 'seconds':
                        timeCalcd('', 1000, 1, 1, 1, 1, 1);
                        break;
                    case 'milliseconds':
                        timeCalcm('', 1, 1, 1, 1, 1, 1);
                        break;
                    case 'minutes':
                        timeCalcd('', 1000, 60, 1, 1, 1, 1);
                        break;
                    case 'hours':
                        timeCalcd('', 1000, 60, 60, 1, 1, 1);
                        break;
                    case 'days':
                        timeCalcd('', 1000, 60, 60, 24, 1, 1);
                        break;
                    case 'weeks':
                        timeCalcd('', 1000, 60, 60, 24, 7, 1);
                        break;
                    case 'months':
                        timeCalcd('~', 1000, 60, 60, 24, 7, (+4.34812));
                        break;
                    case 'years':
                        timeCalcd('~', 1000, 60, 60, 24, 365, 1);
                        break;
                }
                break;
            case 'minutes':
                switch (timeSelect1) {
                    case 'milliseconds':
                        timeCalcm('', 60, 1000, 1, 1, 1, 1);
                        break;
                    case 'seconds':
                        timeCalcm('', 60, 1, 1, 1, 1, 1);
                        break;
                    case 'minutes':
                        timeCalcm('', 1, 1, 1, 1, 1, 1);
                        break;
                    case 'hours':
                        timeCalcd('', 60, 1, 1, 1, 1, 1);
                        break;
                    case 'days':
                        timeCalcd('', 60, 24, 1, 1, 1, 1);
                        break;
                    case 'weeks':
                        timeCalcd('', 60, 24, 7, 1, 1, 1);
                        break;
                    case 'months':
                        timeCalcd('~', 60, 24, 7, (+4.34812), 1, 1);
                        break;
                    case 'years':
                        timeCalcd('~', 60, 24, 365, 1, 1, 1);
                        break;
                }
                break;
            case 'hours':
                switch (timeSelect1) {
                    case 'milliseconds':
                        timeCalcm('', 60, 60, 1000, 1, 1, 1);
                        break;
                    case 'seconds':
                        timeCalcm('', 60, 60, 1, 1, 1, 1);
                        break;
                    case 'minutes':
                        timeCalcm('', 60, 1, 1, 1, 1, 1);
                        break;
                    case 'hours':
                        timeCalcm('', 1, 1, 1, 1, 1, 1);
                        break;
                    case 'days':
                        timeCalcd('', 24, 1, 1, 1, 1, 1);
                        break;
                    case 'weeks':
                        timeCalcd('', 24, 7, 1, 1, 1, 1);
                        break;
                    case 'months':
                        timeCalcd('~', 24, 7, (+4.34812), 1, 1, 1);
                        break;
                    case 'years':
                        timeCalcd('~', 24, 365, 1, 1, 1, 1);
                        break;
                }
                break
            case 'days':
                switch (timeSelect1) {
                    case 'milliseconds':
                        timeCalcm('', 24, 60, 60, 1000, 1, 1);
                        break;
                    case 'seconds':
                        timeCalcm('', 24, 60, 60, 1, 1, 1);
                        break;
                    case 'minutes':
                        timeCalcm('', 24, 60, 1, 1, 1, 1);
                        break;
                    case 'hours':
                        timeCalcm('', 24, 1, 1, 1, 1, 1);
                        break;
                    case 'days':
                        timeCalcm('', 1, 1, 1, 1, 1, 1);
                        break;
                    case 'weeks':
                        timeCalcd('', 7, 1, 1, 1, 1, 1);
                        break;
                    case 'months':
                        timeCalcm('~', (+0.0328549), 1, 1, 1, 1, 1);
                        break;
                    case 'years':
                        timeCalcd('~', 365, 1, 1, 1, 1, 1);
                        break;
                }
                break;
            case 'weeks':
                switch (timeSelect1) {
                    case 'milliseconds':
                        timeCalcm('', 7, 24, 60, 60, 1000, 1);
                        break;
                    case 'seconds':
                        timeCalcm('', 7, 24, 60, 60, 1, 1);
                        break;
                    case 'minutes':
                        timeCalcm('', 7, 24, 60, 1, 1, 1);
                        break;
                    case 'hours':
                        timeCalcm('', 7, 24, 1, 1, 1, 1);
                        break;
                    case 'days':
                        timeCalcm('', 7, 1, 1, 1, 1, 1);
                        break;
                    case 'weeks':
                        timeCalcm('', 1, 1, 1, 1, 1, 1);
                        break;
                    case 'months':
                        timeCalcd('~', (+4.34812), 1, 1, 1, 1, 1);
                        break;
                    case 'years':
                        timeCalcd('~', 52, 1, 1, 1, 1, 1);
                        break;
                }
                break;
            case 'months':
                switch (timeSelect1) {
                    case 'milliseconds':
                        timeCalcm('~', 7, 24, 60, 60, 1000, (+4.34812));
                        break;
                    case 'seconds':
                        timeCalcm('~', 7, 24, 60, 60, (+4.34812), 1);
                        break;
                    case 'minutes':
                        timeCalcm('~', 7, 24, 60, (+4.34812), 1, 1);
                        break;
                    case 'hours':
                        timeCalcm('~', 7, 24, (+4.34812), 1, 1, 1);
                        break;
                    case 'days':
                        timeCalcm('~', 7, (+4.34812), 1, 1, 1, 1);
                        break;
                    case 'weeks':
                        timeCalcm('~', (+4.34812), 1, 1, 1, 1, 1);
                        break;
                    case 'months':
                        timeCalcm('', 1, 1, 1, 1, 1, 1);
                        break;
                    case 'years':
                        timeCalcd('', 12, 1, 1, 1, 1, 1);
                        break;
                }
                break;
            case 'years':
                switch (timeSelect1) {
                    case 'milliseconds':
                        timeCalcm('~', 24, 60, 60, 1000, (+365.242), 1);
                        break;
                    case 'seconds':
                        timeCalcm('~', 24, 60, 60, (+365.242), 1, 1);
                        break;
                    case 'minutes':
                        timeCalcm('~', 24, 60, (+365.242), 1, 1, 1);
                        break;
                    case 'hours':
                        timeCalcm('~', 24, (+365.242), 1, 1, 1, 1);
                        break;
                    case 'days':
                        timeCalcm('~', (+365.242), 1, 1, 1, 1, 1);
                        break;
                    case 'weeks':
                        timeCalcm('~', (+52.1775), 1, 1, 1, 1, 1);
                        break;
                    case 'months':
                        timeCalcm('', 12, 1, 1, 1, 1, 1);
                        break;
                    case 'years':
                        timeCalcm('', 1, 1, 1, 1, 1, 1);
                        break;
                }
        }
    })

    $('input[name="enterLength"], select[name="lengthUnits"]').on('keyup change', function () {
        var lengthInput = $('input[name="enterLength"]').val();
        var lengthSelect = $('select[name="lengthUnits"]:eq(0)').val();
        var lengthSelect1 = $('select[name="lengthUnits"]:eq(1)').val();
        function lengCalc(n) {
            return $('#lengthResult').html(parseFloat((lengthInput * n).toPrecision(13)));
        }
        switch (lengthSelect) {
            case 'kilometre':
                switch (lengthSelect1) {
                    case 'metre':
                        lengCalc(1000);
                        break;
                    case 'kilometre':
                        lengCalc(1);
                        break;
                    case 'centimetre':
                        lengCalc(100000);
                        break;
                    case 'millimetre':
                        lengCalc(1000000);
                        break;
                    case 'mile':
                        lengCalc((+0.621371));
                        break;
                    case 'yard':
                        lengCalc((+1093.6133));
                        break;
                    case 'feet':
                        lengCalc((+3280.8399));
                        break;
                    case 'inch':
                        lengCalc((+39370.0787));
                        break;
                }
                break;
            case 'metre':
                switch (lengthSelect1) {
                    case 'kilometre':
                        lengCalc((+0.001));
                        break;
                    case 'metre':
                        lengCalc(1);
                        break;
                    case 'centimetre':
                        lengCalc(100);
                        break;
                    case 'millimetre':
                        lengCalc(1000);
                        break;
                    case 'mile':
                        lengCalc((+0.000621371));
                        break;
                    case 'yard':
                        lengCalc((+1.0936133));
                        break;
                    case 'feet':
                        lengCalc((+3.2808399));
                        break;
                    case 'inch':
                        lengCalc((+39.3700787));
                        break;
                }
                break;
            case 'centimetre':
                switch (lengthSelect1) {
                    case 'kilometre':
                        lengCalc((+0.00001));
                        break;
                    case 'metre':
                        lengCalc((+0.01));
                        break;
                    case 'centimetre':
                        lengCalc(1);
                        break;
                    case 'millimetre':
                        lengCalc(10);
                        break;
                    case 'mile':
                        lengCalc(((+6.21371) * Math.pow(10, -6)));
                        break;
                    case 'yard':
                        lengCalc((+0.0109361));
                        break;
                    case 'feet':
                        lengCalc((+0.0328084));
                        break;
                    case 'inch':
                        lengCalc((+0.393701));
                        break;
                }
                break;
            case 'millimetre':
                switch (lengthSelect1) {
                    case 'kilometre':
                        lengCalc((+0.000001));
                        break;
                    case 'metre':
                        lengCalc((+0.001));
                        break;
                    case 'centimetre':
                        lengCalc((+0.1));
                        break;
                    case 'millimetre':
                        lengCalc(1);
                        break;
                    case 'mile':
                        lengCalc(((+6.21371) * Math.pow(10, -7)));
                        break;
                    case 'yard':
                        lengCalc((+0.0010936133));
                        break;
                    case 'feet':
                        lengCalc((+0.0032808399));
                        break;
                    case 'inch':
                        lengCalc((+0.0393700787));
                        break;
                }
                break;
            case 'mile':
                switch (lengthSelect1) {
                    case 'kilometre':
                        lengCalc((+1.609344));
                        break;
                    case 'metre':
                        lengCalc((+1609.344));
                        break;
                    case 'centimetre':
                        lengCalc(160934);
                        break;
                    case 'millimetre':
                        lengCalc(((+1.6093) * Math.pow(10, 6)));
                        break;
                    case 'mile':
                        lengCalc(1);
                        break;
                    case 'yard':
                        lengCalc(1760);
                        break;
                    case 'feet':
                        lengCalc(5280);
                        break;
                    case 'inch':
                        lengCalc(63360);
                        break;
                }
                break;
            case 'yard':
                switch (lengthSelect1) {
                    case 'kilometre':
                        lengCalc((+0.0009144));
                        break;
                    case 'metre':
                        lengCalc((+0.9144));
                        break;
                    case 'centimetre':
                        lengCalc((+91.44));
                        break;
                    case 'millimetre':
                        lengCalc((+914.4));
                        break;
                    case 'mile':
                        lengCalc((+0.000568182));
                        break;
                    case 'yard':
                        lengCalc(1);
                        break;
                    case 'feet':
                        lengCalc(3);
                        break;
                    case 'inch':
                        lengCalc(36);
                        break;
                }
                break;
            case 'feet':
                switch (lengthSelect1) {
                    case 'kilometre':
                        lengCalc((+0.0003048));
                        break;
                    case 'metre':
                        lengCalc((+0.3048));
                        break;
                    case 'centimetre':
                        lengCalc((+30.48));
                        break;
                    case 'millimetre':
                        lengCalc((+304.8));
                        break;
                    case 'mile':
                        lengCalc((+0.000189394));
                        break;
                    case 'yard':
                        lengCalc((+0.333333));
                        break;
                    case 'feet':
                        lengCalc(1);
                        break;
                    case 'inch':
                        lengCalc(12);
                        break;
                }
                break;
            case 'inch':
                switch (lengthSelect1) {
                    case 'kilometre':
                        lengCalc(((+2.54) * Math.pow(10, -5)));
                        break;
                    case 'metre':
                        lengCalc((+0.0254));
                        break;
                    case 'centimetre':
                        lengCalc((+2.54));
                        break;
                    case 'millimetre':
                        lengCalc((+25.4));
                        break;
                    case 'mile':
                        lengCalc(((+1.5782828) * Math.pow(10, -5)));
                        break;
                    case 'yard':
                        lengCalc((+0.0277778));
                        break;
                    case 'feet':
                        lengCalc((+0.0833333));
                        break;
                    case 'inch':
                        lengCalc(1);
                        break;
                }
                break;
        }
    })

    $('input[name="enterSpeed"], select[name="speedUnits"]').on('keyup change', function () {
        var speedInput = $('input[name="enterSpeed"]').val();
        var speedSelect = $('select[name="speedUnits"]:eq(0)').val();
        var speedSelect1 = $('select[name="speedUnits"]:eq(1)').val();
        function speedCalc(n) {
            return $('#speedResult').html(parseFloat((speedInput * n).toPrecision(4)));
        }
        switch (speedSelect) {
            case 'mph':
                switch (speedSelect1) {
                    case 'kmph':
                        speedCalc((+1.60934));
                        break;
                    case 'mph':
                        speedCalc(1);
                        break;
                    case 'mps':
                        speedCalc((+0.44704));
                        break;
                    case 'fps':
                        speedCalc((+1.4666667));
                        break;
                    case 'knot':
                        speedCalc((+0.868976));
                        break;
                }
                break;
            case 'kmph':
                switch (speedSelect1) {
                    case 'mph':
                        speedCalc((+0.621371));
                        break;
                    case 'kmph':
                        speedCalc(1);
                        break;
                    case 'mps':
                        speedCalc((+0.277778));
                        break;
                    case 'fps':
                        speedCalc((+0.911344));
                        break;
                    case 'knot':
                        speedCalc((+0.539957));
                        break;
                }
                break;
            case 'mps':
                switch (speedSelect1) {
                    case 'mph':
                        speedCalc((+2.23694));
                        break;
                    case 'kmph':
                        speedCalc((+3.6));
                        break;
                    case 'mps':
                        speedCalc(1);
                        break;
                    case 'fps':
                        speedCalc((+3.28084));
                        break;
                    case 'knot':
                        speedCalc((+1.94384));
                        break;
                }
                break;
            case 'fps':
                switch (speedSelect1) {
                    case 'mph':
                        speedCalc((+0.681818));
                        break;
                    case 'kmph':
                        speedCalc((+1.09728));
                        break;
                    case 'mps':
                        speedCalc((+0.3048));
                        break;
                    case 'fps':
                        speedCalc(1);
                        break;
                    case 'knot':
                        speedCalc((+0.592484));
                        break;
                }
                break;
            case 'knot':
                switch (speedSelect1) {
                    case 'mph':
                        speedCalc((+1.15078));
                        break;
                    case 'kmph':
                        speedCalc((+1.852));
                        break;
                    case 'mps':
                        speedCalc((+0.514444));
                        break;
                    case 'fps':
                        speedCalc((+1.68781));
                        break;
                    case 'knot':
                        speedCalc(1);
                        break;
                }
                break;
        }
    })

    $('input[name="enterArea"], select[name="areaUnits"]').on('keyup change', function () {
        var areaInput = $('input[name="enterArea"]').val();
        var areaSelect = $('select[name="areaUnits"]:eq(0)').val();
        var areaSelect1 = $('select[name="areaUnits"]:eq(1)').val();
        function areaCalc(n) {
            return $('#areaResult').html(parseFloat((areaInput * n).toPrecision(13)));
        }
        switch (areaSelect) {
            case 'sqkm':
                switch (areaSelect1) {
                    case 'hectare':
                        areaCalc(100);
                        break;
                    case 'sqkm':
                        areaCalc(1);
                        break;
                    case 'sqmetre':
                        areaCalc((1 * Math.pow(10, 6)));
                        break;
                    case 'sqmile':
                        areaCalc(+0.38610216);
                        break;
                    case 'acre':
                        areaCalc(+247.1054);
                        break;
                    case 'sqyard':
                        areaCalc((+1.19599) * Math.pow(10, 6));
                        break;
                    case 'sqfeet':
                        areaCalc((+1.07639) * Math.pow(10, 7));
                        break;
                    case 'sqinch':
                        areaCalc((+1.55) * Math.pow(10, 9));
                        break;
                }
                break;
            case 'hectare':
                switch (areaSelect1) {
                    case 'hectare':
                        areaCalc(1);
                        break;
                    case 'sqkm':
                        areaCalc(+0.01);
                        break;
                    case 'sqmetre':
                        areaCalc(10000);
                        break;
                    case 'sqmile':
                        areaCalc(+0.00386102);
                        break;
                    case 'acre':
                        areaCalc(+2.47105);
                        break;
                    case 'sqyard':
                        areaCalc(+11959.9);
                        break;
                    case 'sqfeet':
                        areaCalc(+107639.1);
                        break;
                    case 'sqinch':
                        areaCalc(+15500031);
                        break;
                }
                break
            case 'sqmetre':
                switch (areaSelect1) {
                    case 'hectare':
                        areaCalc(+0.0001);
                        break;
                    case 'sqkm':
                        areaCalc((1) * Math.pow(10, -6));
                        break;
                    case 'sqmetre':
                        areaCalc(1);
                        break;
                    case 'sqmile':
                        areaCalc((3.86102) * Math.pow(10, -7));
                        break;
                    case 'acre':
                        areaCalc(+0.000247105);
                        break;
                    case 'sqyard':
                        areaCalc(+1.19599);
                        break;
                    case 'sqfeet':
                        areaCalc(+10.76391);
                        break;
                    case 'sqinch':
                        areaCalc(1550);
                        break;
                }
                break
            case 'sqmile':
                switch (areaSelect1) {
                    case 'hectare':
                        areaCalc(+258.9988);
                        break;
                    case 'sqkm':
                        areaCalc(+2.58999);
                        break;
                    case 'sqmetre':
                        areaCalc((2.58999) * Math.pow(10, 6));
                        break;
                    case 'sqmile':
                        areaCalc(1);
                        break;
                    case 'acre':
                        areaCalc(640);
                        break;
                    case 'sqyard':
                        areaCalc(3097600);
                        break;
                    case 'sqfeet':
                        areaCalc(27878400);
                        break;
                    case 'sqinch':
                        areaCalc((4.0145) * Math.pow(10, 9));
                        break;
                }
                break;
            case 'acre':
                switch (areaSelect1) {
                    case 'hectare':
                        areaCalc(+0.40468564);
                        break;
                    case 'sqkm':
                        areaCalc(+0.00404686);
                        break;
                    case 'sqmetre':
                        areaCalc(+4046.8564);
                        break;
                    case 'sqmile':
                        areaCalc(+0.0015625);
                        break;
                    case 'acre':
                        areaCalc(1);
                        break;
                    case 'sqyard':
                        areaCalc(4840);
                        break;
                    case 'sqfeet':
                        areaCalc(43560);
                        break;
                    case 'sqinch':
                        areaCalc(6272640);
                        break;
                }
                break
            case 'sqyard':
                switch (areaSelect1) {
                    case 'hectare':
                        areaCalc(+0.0000836127);
                        break;
                    case 'sqkm':
                        areaCalc((+8.361274) * Math.pow(10, -7));
                        break;
                    case 'sqmetre':
                        areaCalc(+0.8361274);
                        break;
                    case 'sqmile':
                        areaCalc((+3.228306) * Math.pow(10, -7));
                        break;
                    case 'acre':
                        areaCalc(+0.0002066116);
                        break;
                    case 'sqyard':
                        areaCalc(1);
                        break;
                    case 'sqfeet':
                        areaCalc(9);
                        break;
                    case 'sqinch':
                        areaCalc(1296);
                        break;
                }
                break
            case 'sqfeet':
                switch (areaSelect1) {
                    case 'hectare':
                        areaCalc((+9.2903) * Math.pow(10, -6));
                        break;
                    case 'sqkm':
                        areaCalc((+9.2903) * Math.pow(10, -8));
                        break;
                    case 'sqmetre':
                        areaCalc(+0.092903);
                        break;
                    case 'sqmile':
                        areaCalc((+3.587006) * Math.pow(10, -8));
                        break;
                    case 'acre':
                        areaCalc((+2.2957) * Math.pow(10, -5));
                        break;
                    case 'sqyard':
                        areaCalc(+0.11111);
                        break;
                    case 'sqfeet':
                        areaCalc(1);
                        break;
                    case 'sqinch':
                        areaCalc(144);
                        break;
                }
                break
            case 'sqinch':
                switch (areaSelect1) {
                    case 'hectare':
                        areaCalc((+6.4516) * Math.pow(10, -8));
                        break;
                    case 'sqkm':
                        areaCalc((+6.4516) * Math.pow(10, -10));
                        break;
                    case 'sqmetre':
                        areaCalc(+0.00064516);
                        break;
                    case 'sqmile':
                        areaCalc((+2.4909767) * Math.pow(10, -10));
                        break;
                    case 'acre':
                        areaCalc((+1.5942251) * Math.pow(10, -7));
                        break;
                    case 'sqyard':
                        areaCalc(+0.0007716049);
                        break;
                    case 'sqfeet':
                        areaCalc(+0.00694444);
                        break;
                    case 'sqinch':
                        areaCalc(1);
                        break;
                }
                break;
        }
    })

    $('input[name="enterFuel"], select[name="fuelUnits"]').on('keyup change', function () {
        var fuelInput = $('input[name="enterFuel"]').val();
        var fuelSelect = $('select[name="fuelUnits"]:eq(0)').val();
        var fuelSelect1 = $('select[name="fuelUnits"]:eq(1)').val();
        function fuelCalcm(n) {
            return $('#fuelResult').html(parseFloat((fuelInput * n).toPrecision(13)));
        }
        function fuelCalcd(n) {
            return $('#fuelResult').html(parseFloat((n / fuelInput).toPrecision(13)));
        }
        switch (fuelSelect) {
            case 'mpg':
                switch (fuelSelect1) {
                    case 'kmpl':
                        fuelCalcm(+0.425144);
                        break;
                    case 'mpg':
                        fuelCalcm(1);
                        break;
                    case 'mpgimp':
                        fuelCalcm(+1.20095042);
                        break;
                    case 'lp1k':
                        fuelCalcd(+235.215);
                        break;
                }
                break;
            case 'kmpl':
                switch (fuelSelect1) {
                    case 'mpg':
                        fuelCalcm(+2.35215);
                        break;
                    case 'kmpl':
                        fuelCalcm(1);
                        break;
                    case 'mpgimp':
                        fuelCalcm(+2.82481);
                        break;
                    case 'lp1k':
                        fuelCalcd(100);
                        break;
                }
                break;
            case 'mpgimp':
                switch (fuelSelect1) {
                    case 'mpg':
                        fuelCalcm(+0.832674);
                        break;
                    case 'kmpl':
                        fuelCalcm(+0.354006);
                        break;
                    case 'mpgimp':
                        fuelCalcm(1);
                        break;
                    case 'lp1k':
                        fuelCalcd(+282.481);
                        break;
                }
                break;
            case 'lp1k':
                switch (fuelSelect1) {
                    case 'mpg':
                        fuelCalcd(+235.215);
                        break;
                    case 'kmpl':
                        fuelCalcd(100);
                        break;
                    case 'mpgimp':
                        fuelCalcd(+282.481);
                        break;
                    case 'lp1k':
                        fuelCalcm(1)
                        $('#fuelResult').html(parseFloat(fuelInput));
                        break;
                }
                break;
        }
    })

    $('input[name="enterWeight"], select[name="weightUnits"]').on('keyup change', function () {
        var weightInput = $('input[name="enterWeight"]').val();
        var weightSelect = $('select[name="weightUnits"]:eq(0)').val();
        var weightSelect1 = $('select[name="weightUnits"]:eq(1)').val();
        function weightCalc(n) {
            return $('#weightResult').html(parseFloat((weightInput * n).toPrecision(13)));
        }

        switch (weightSelect) {
            case 'kilograms':
                switch (weightSelect1) {
                    case 'pounds':
                        weightCalc(+2.2046228);
                        break;
                    case 'kilograms':
                        weightCalc(1);
                        break;
                    case 'ounces':
                        weightCalc(+35.273962);
                        break;
                    case 'stones':
                        weightCalc(+0.1574730);
                        break;
                    case 'grams':
                        weightCalc(1000);
                        break;
                    case 'milligrams':
                        weightCalc((1) * Math.pow(10, 6));
                        break;
                    case 'carats':
                        weightCalc(5000);
                        break;
                }
                break;
            case 'pounds':
                switch (weightSelect1) {
                    case 'kilograms':
                        weightCalc(+0.453592);
                        break;
                    case 'pounds':
                        weightCalc(1);
                        break;
                    case 'ounces':
                        weightCalc(16);
                        break;
                    case 'stones':
                        weightCalc(+0.07142857);
                        break;
                    case 'grams':
                        weightCalc(+453.5923);
                        break;
                    case 'milligrams': 
                        weightCalc(+453592.33);
                        break;
                    case 'carats':
                        weightCalc(+2267.962);
                        break;
                }
                break;
            case 'ounces':
                switch (weightSelect1) {
                    case 'kilograms':
                        weightCalc(0.0283495);
                        break;
                    case 'pounds':
                        weightCalc(+0.0625);
                        break;
                    case 'ounces':
                        weightCalc(1);
                        break;
                    case 'stones':
                        weightCalc(+0.00446429);
                        break;
                    case 'grams':
                        weightCalc(+28.34952);
                        break;
                    case 'milligrams':
                        weightCalc(+28349.523);
                        break;
                    case 'carats':
                        weightCalc(+141.74762);
                        break;
                }
                break;
            case 'stones':
                switch (weightSelect1) {
                    case 'kilograms':
                        weightCalc(+6.350293);
                        break;
                    case 'pounds':
                        weightCalc(14);
                        break;
                    case 'ounces':
                        weightCalc(224);
                        break;
                    case 'stones':
                        weightCalc(1);
                        break;
                    case 'grams':
                        weightCalc(+6350.293);
                        break;
                    case 'milligrams':
                        weightCalc(+6350293.4);
                        break;
                    case 'carats':
                        weightCalc(+31751.47);
                        break;
                }
                break;
            case 'grams':
                switch (weightSelect1) {
                    case 'kilograms':
                        weightCalc(+0.001);
                        break;
                    case 'pounds':
                        weightCalc(+0.00220462);
                        break;
                    case 'ounces':
                        weightCalc(+0.0352740);
                        break;
                    case 'stones':
                        weightCalc(+0.00015747);
                        break;
                    case 'grams':
                        weightCalc(1);
                        break;
                    case 'milligrams':
                        weightCalc(1000);
                        break;
                    case 'carats':
                        weightCalc(5);
                        break;
                }
                break;
            case 'milligrams':
                switch (weightSelect1) {
                    case 'kilograms':
                        weightCalc(+0.000001);
                        break;
                    case 'pounds':
                        weightCalc((+2.204622) * Math.pow(10, -6));
                        break;
                    case 'ounces':
                        weightCalc((+3.5273962) * Math.pow(10, -5));
                        break;
                    case 'stones':
                        weightCalc((+1.5747304) * Math.pow(10, -7));
                        break;
                    case 'grams':
                        weightCalc(+0.001);
                        break;
                    case 'milligrams':
                        weightCalc(1);
                        break;
                    case 'carats':
                        weightCalc(0.005);
                        break;
                }
                break;
            case 'carats':
                switch (weightSelect1) {
                    case 'kilograms':
                        weightCalc(+0.0002);
                        break;
                    case 'pounds':
                        weightCalc(+0.0004409246);
                        break;
                    case 'ounces':
                        weightCalc(+0.00705479);
                        break;
                    case 'stones':
                        weightCalc((+3.1494608) * Math.pow(10, -5));
                        break;
                    case 'grams':
                        weightCalc(+0.2);
                        break;
                    case 'milligrams':
                        weightCalc(200);
                        break;
                    case 'carats':
                        weightCalc(1);
                        break;
                }
                break;
        }
    })

    $('input[name="enterByte"], select[name="byteUnits"]').on('keyup change', function () {
        var byteInput = $('input[name="enterByte"]').val();
        var byteSelect = $('select[name="byteUnits"]:eq(0)').val();
        var byteSelect1 = $('select[name="byteUnits"]:eq(1)').val();
        function byteCalc(n) {
            return $('#byteResult').html(parseFloat((byteInput * n).toPrecision(13)));
        }
        switch (byteSelect) {
            case 'bit':
                switch (byteSelect1) {
                    case 'bit':
                        byteCalc(1);
                        break;
                    case 'byte':
                        byteCalc(+0.125);
                        break;
                    case 'kilobit':
                        byteCalc(+0.000976563);
                        break;
                    case 'kilobyte':
                        byteCalc(+0.00012207);
                        break;
                    case 'megabit':
                        byteCalc((9.5367) * Math.pow(10, -7));
                        break;
                    case 'megabyte':
                        byteCalc((1.1921) * Math.pow(10, -7));
                        break;
                    case 'gigabit':
                        byteCalc((9.3132) * Math.pow(10, -10));
                        break;
                    case 'gigabyte':
                        byteCalc((1.1642) * Math.pow(10, -10));
                        break;
                    case 'terabit':
                        byteCalc((9.0949) * Math.pow(10, -13));
                        break;
                    case 'terabyte':
                        byteCalc((1.13686249961) * Math.pow(10, -13));
                        break;
                }
                break;
            case 'byte':
                switch (byteSelect1) {
                    case 'bit':
                        byteCalc(8);
                        break;
                    case 'byte':
                        byteCalc(1);
                        break;
                    case 'kilobit':
                        byteCalc(+0.0078125);
                        break;
                    case 'kilobyte':
                        byteCalc(+0.000976563);
                        break;
                    case 'megabit':
                        byteCalc((7.6294) * Math.pow(10, -6));
                        break;
                    case 'megabyte':
                        byteCalc((9.5367) * Math.pow(10, -7));
                        break;
                    case 'gigabit':
                        byteCalc((7.4506) * Math.pow(10, -9));
                        break;
                    case 'gigabyte':
                        byteCalc((9.3132) * Math.pow(10, -10));
                        break;
                    case 'terabit':
                        byteCalc((7.276) * Math.pow(10, -12));
                        break;
                    case 'terabyte':
                        byteCalc((9.0949) * Math.pow(10, -13));
                        break;
                }
                break;
            case 'kilobit':
                switch (byteSelect1) {
                    case 'bit':
                        byteCalc(1024);
                        break;
                    case 'byte':
                        byteCalc(128);
                        break;
                    case 'kilobit':
                        byteCalc(1);
                        break;
                    case 'kilobyte':
                        byteCalc(+0.125);
                        break;
                    case 'megabit':
                        byteCalc(+0.000976563);
                        break;
                    case 'megabyte':
                        byteCalc(+0.000122070375);
                        break;
                    case 'gigabit':
                        byteCalc((+9.536748046875) * Math.pow(10, -7));
                        break;
                    case 'gigabyte':
                        byteCalc((+1.192093505859) * Math.pow(10, -7));
                        break;
                    case 'terabit':
                        byteCalc((+9.313230514526) * Math.pow(10, -10));
                        break;
                    case 'terabyte':
                        byteCalc((+1.164153814316) * Math.pow(10, -10));
                        break;
                }
                break;
            case 'kilobyte':
                switch (byteSelect1) {
                    case 'bit':
                        byteCalc(8192);
                        break;
                    case 'byte':
                        byteCalc(1024);
                        break;
                    case 'kilobit':
                        byteCalc(8);
                        break;
                    case 'kilobyte':
                        byteCalc(1);
                        break;
                    case 'megabit':
                        byteCalc(+0.0078125);
                        break;
                    case 'megabyte':
                        byteCalc(+0.000976563);
                        break;
                    case 'gigabit':
                        byteCalc((+7.6294) * Math.pow(10, -6));
                        break;
                    case 'gigabyte':
                        byteCalc((+9.5367) * Math.pow(10, -7));
                        break;
                    case 'terabit':
                        byteCalc((+7.4506) * Math.pow(10, -9));
                        break;
                    case 'terabyte':
                        byteCalc((+9.3132) * Math.pow(10, -10));
                        break;
                }
                break;
            case 'megabit':
                switch (byteSelect1) {
                    case 'bit':
                        byteCalc((+1.049) * Math.pow(10, 6));
                        break;
                    case 'byte':
                        byteCalc(131072);
                        break;
                    case 'kilobit':
                        byteCalc(1024);
                        break;
                    case 'kilobyte':
                        byteCalc(128);
                        break;
                    case 'megabit':
                        byteCalc(1);
                        break;
                    case 'megabyte':
                        byteCalc(+0.125);
                        break;
                    case 'gigabit':
                        byteCalc(+0.000976563);
                        break;
                    case 'gigabyte':
                        byteCalc(+0.00012207);
                        break;
                    case 'terabit':
                        byteCalc((+9.5367) * Math.pow(10, -7));
                        break;
                    case 'terabyte':
                        byteCalc((+1.1921) * Math.pow(10, -7));
                        break;
                }
                break;
            case 'megabyte':
                switch (byteSelect1) {
                    case 'bit':
                        byteCalc((+8.389) * Math.pow(10, 6));
                        break;
                    case 'byte':
                        byteCalc((+1.049) * Math.pow(10, 6));
                        break;
                    case 'kilobit':
                        byteCalc(8192);
                        break;
                    case 'kilobyte':
                        byteCalc(1024);
                        break;
                    case 'megabit':
                        byteCalc(8);
                        break;
                    case 'megabyte':
                        byteCalc(1);
                        break;
                    case 'gigabit':
                        byteCalc(+0.0078125);
                        break;
                    case 'gigabyte':
                        byteCalc(+0.000976563);
                        break;
                    case 'terabit':
                        byteCalc((+7.6294) * Math.pow(10, -6));
                        break;
                    case 'terabyte':
                        byteCalc((+9.5367) * Math.pow(10, -7));
                        break;
                }
                break;
            case 'gigabit':
                switch (byteSelect1) {
                    case 'bit':
                        byteCalc((+1.074) * Math.pow(10, 9));
                        break;
                    case 'byte':
                        byteCalc((+1.342) * Math.pow(10, 8));
                        break;
                    case 'kilobit':
                        byteCalc((+1.049) * Math.pow(10, 6));
                        break;
                    case 'kilobyte':
                        byteCalc(131072);
                        break;
                    case 'megabit':
                        byteCalc(1024);
                        break;
                    case 'megabyte':
                        byteCalc(128);
                        break;
                    case 'gigabit':
                        byteCalc(1);
                        break;
                    case 'gigabyte':
                        byteCalc(+0.125);
                        break;
                    case 'terabit':
                        byteCalc(+0.000976563);
                        break;
                    case 'terabyte':
                        byteCalc(+0.00012207);
                        break;
                }
                break;
            case 'gigabyte':
                switch (byteSelect1) {
                    case 'bit':
                        byteCalc((+8.59) * Math.pow(10, 9));
                        break;
                    case 'byte':
                        byteCalc((+1.074) * Math.pow(10, 9));
                        break;
                    case 'kilobit':
                        byteCalc((+8.389) * Math.pow(10, 6));
                        break;
                    case 'kilobyte':
                        byteCalc((+1.049) * Math.pow(10, 6));
                        break;
                    case 'megabit':
                        byteCalc(8192);
                        break;
                    case 'megabyte':
                        byteCalc(1024);
                        break;
                    case 'gigabit':
                        byteCalc(8);
                        break;
                    case 'gigabyte':
                        byteCalc(1);
                        break;
                    case 'terabit':
                        byteCalc(+0.0078125);
                        break;
                    case 'terabyte':
                        byteCalc(+0.000976563);
                        break;
                }
                break;
            case 'terabit':
                switch (byteSelect1) {
                    case 'bit':
                        byteCalc((+1.1) * Math.pow(10, 12));
                        break;
                    case 'byte':
                        byteCalc((+1.374) * Math.pow(10, 11));
                        break;
                    case 'kilobit':
                        byteCalc((+1.074) * Math.pow(10, 9));
                        break;
                    case 'kilobyte':
                        byteCalc((+1.342) * Math.pow(10, 8));
                        break;
                    case 'megabit':
                        byteCalc((+1.049) * Math.pow(10, 6));
                        break;
                    case 'megabyte':
                        byteCalc(131072);
                        break;
                    case 'gigabit':
                        byteCalc(1024);
                        break;
                    case 'gigabyte':
                        byteCalc(128);
                        break;
                    case 'terabit':
                        byteCalc(1);
                        break;
                    case 'terabyte':
                        byteCalc(+0.125);
                        break;
                }
                break;
            case 'terabyte':
                switch (byteSelect1) {
                    case 'bit':
                        byteCalc((+8.796) * Math.pow(10, 12));
                        break;
                    case 'byte':
                        byteCalc((+1.1) * Math.pow(10, 12));
                        break;
                    case 'kilobit':
                        byteCalc((+8.59) * Math.pow(10, 9));
                        break;
                    case 'kilobyte':
                        byteCalc((+1.074) * Math.pow(10, 9));
                        break;
                    case 'megabit':
                        byteCalc((+8.389) * Math.pow(10, 6));
                        break;
                    case 'megabyte':
                        byteCalc((+1.049) * Math.pow(10, 6));
                        break;
                    case 'gigabit':
                        byteCalc(8192);
                        break;
                    case 'gigabyte':
                        byteCalc(1024);
                        break;
                    case 'terabit':
                        byteCalc(8);
                        break;
                    case 'terabyte':
                        byteCalc(1);
                        break;
                }
                break;
        }
    })

})
