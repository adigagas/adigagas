$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    console.log(wScroll);

    if( wScroll > 10 ) {
        $('.navbar-light').addClass('scroll');
    } else {
        $('.navbar-light.scroll').removeClass('scroll');
    }

    if(wScroll >= 1400) {
        $('.back-top.hide').removeClass('hide');
        $('.back-top').addClass('show');
    } 

    if(wScroll < 1400) {
        $('.back-top.show').removeClass('show');
        $('.back-top').addClass('hide');
    }
})