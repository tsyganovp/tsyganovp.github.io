var open = $(".toogler");
var menu = $(".main-nav__list");
var closer = $(".closer");
$(document).ready(function() {
  closer.css("display","block");

  open.on("click", function() {
    event.preventDefault;
    menu.removeClass("main-nav__list--closed");
    menu.addClass("main-nav__list--opened");
  });
  closer.on("click", function() {
    event.preventDefault;
    menu.removeClass("main-nav__list--opened")
    menu.addClass("main-nav__list--closed");
  })
});

