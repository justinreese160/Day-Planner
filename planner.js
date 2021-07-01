window.setInterval(function () {
    $('#currentTime').html(moment().format('ddd MM/DD/YYYY H:mm:ss'))
}, 1000);

$('.time-block').each(function() {
    var hour = moment().hours()
    var currentTime = (parseInt($(this).attr('id')))
    if (hour > currentTime ){
        $(this).removeClass("present")
        $(this).addClass("past")
    }
    else if (hour === currentTime){
        $(this).removeClass("future")
        $(this).addClass("present")
    }
    else {
        $(this).addClass("future")
    }

})

