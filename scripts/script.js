// navbar for all pages
const navbar = $('.navbar');
const footer = $('.footer');

$.get('/navbar.html', function(data){
    navbar.html(data);
})

// sticky navbar
$(document).ready(function() {
    $(window).scroll(function() {
        var nav = $('.sticky-navbar');
        if ($(window).scrollTop() > 0) {
            nav.addClass('sticky');
        }
        else {
            nav.removeClass('sticky');
        }
    })
})

// footer for all pages
$.get('/footer.html', function(data){
    footer.html(data);
})

