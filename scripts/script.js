// navbar for all pages
const navbar = $('.navbar-js');
const footer = $('.footer-js');

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

$(document).ready(function(){
    Swal.fire({
        title: 'Hey there!',
        text: 'Sorry to mobile users, responsive design is on its way!',
        icon: 'warning',
        confirmButtonText: 'Cool!',
        color: '#a52a2a',
    })
})

