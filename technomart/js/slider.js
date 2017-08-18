var firstSlide = ($('.slides li:first').index() + 1);
var lastSlide = ($('.slides li:last').index() + 1);

var currentSlide = firstSlide

$( ".slider-nav .icon-left" ).click(function(e) {
    if (currentSlide ==  firstSlide ) {
        $(".slides .active").removeClass("active");
        $(".slides li:last").addClass("active");
        currentSlide = lastSlide;
        $('#btn-' + currentSlide ).prop('checked', true);
    }
    else {
        $(".slides .active").removeClass("active").prev().addClass("active");
        currentSlide = ( currentSlide - 1 );
        $('#btn-' + currentSlide ).prop('checked', true);
    }
});

$( ".slider-nav .icon-right" ).click(function(e) {
    if (currentSlide ==  lastSlide ) {
        $(".slides .active").removeClass("active");
        $(".slides li:first").addClass("active");
        currentSlide = firstSlide;
        $('#btn-' + currentSlide ).prop('checked', true);
    }
    else {
        $(".slides .active").removeClass("active").next().addClass("active");
        currentSlide = ( currentSlide + 1 );
        $('#btn-' + currentSlide ).prop('checked', true);
    }
});