var map_open = document.querySelector(".map");
var map_popup = document.querySelector(".modal-content-map");
var map_close = map_popup.querySelector(".modal-content-map .close");

map_open.addEventListener("click", function(event) {
    event.preventDefault();
    map_popup.classList.add("show");
});
map_close.addEventListener("click", function(event) {
    event.preventDefault();
    map_popup.classList.remove("show");
});
window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) {
        if (map_popup.classList.contains("show")) {
            map_popup.classList.remove("show");
        }
    }
});