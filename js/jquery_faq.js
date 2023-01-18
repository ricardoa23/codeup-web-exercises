$('.glacier-button').on('click', function() {
    $('dd').toggleClass('invisible')
})

$('dt').on('click', function() {
    $(this).toggleClass('highlight')
})

$('.other-button').on('click', function () {
    $('ul').each(function() {
        $(this).children('li').last().css('background-color', 'yellow')
    })
})

$('h3').on('click', function() {
    $(this).next().children('li').css('font-weight', 'bold')
})

$('li').on('click', function() {
    $(this).parent().children('li').first().css('color', 'blue')
})