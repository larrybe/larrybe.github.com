$(document).ready(function () {
    var speed = $('#speed').change(function () {
        speed = $(this).val();
    })
    $('#animate').click(function () {
        if ($('.bg').css('bottom', '5%')) {
            $('.bg').animate({
                bottom: '95%'
            }, (+speed), 'linear')
        }
    })
    $('#refresh').click(function(){
        location.reload()
    })
})
