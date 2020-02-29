$(function() {
    

    $(window).scroll(function () {
        $('.target').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100) {
                $(this).addClass('scrollIn');
            }
        });
    });
});