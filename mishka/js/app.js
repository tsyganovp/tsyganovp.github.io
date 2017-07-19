var open = $(".toogler");
var menu = $(".header__nav");
var closer = $(".closer");

$(document).ready(function() {
    menu.addClass("header__nav--close");
    open.on("click", function() {
        event.preventDefault;
        menu.addClass("header__nav--open");
        menu.removeClass("header__nav--close");
        open.css("display","none");
        closer.css("display","block");
    });
    closer.on("click", function() {
        event.preventDefault;
        menu.addClass("header__nav--close");
        menu.removeClass("header__nav--open");
        open.css("display","block");
        closer.css("display","none");
    })
});

