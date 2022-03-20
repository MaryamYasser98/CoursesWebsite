

let navbar = $('.navbar');

$(window).scroll(function () {

    let Tops = $('.section-2').offset().top - window.innerHeight;

    if ($(window).scrollTop() > Tops) {
        navbar.addClass('sticky');
    }
    else {
        navbar.removeClass('sticky')
    }
}//end of scroll function
)


let ncount = function (selector) {

    $(selector).each(function () {
        $(this).animate({
            Counter: $(this).text()
        },
            {
                duration: 4000,
                easing: 'swing',
                step: function (value) { $(this).text(Math.ceil(value)) }
            }
        )//end animate
    })
}


let a = 0;
$(window).scroll(function () {

    let Tops = $('.numbers').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= Tops) {
        a++;
        ncount('.rect > h1')
    }
})



