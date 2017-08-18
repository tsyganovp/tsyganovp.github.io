var buy_btn = document.querySelectorAll(".actions .buy-action");
var cart_form_close = document.querySelector(".modal-cart-add .close");
var cart_form = document.querySelector(".modal-cart-add");

for (var i = 0; i < buy_btn.length; i++) {
    buy_btn[i].addEventListener("click", function(event) {
    event.preventDefault();
    cart_form.classList.add("show");
  });
}

cart_form_close.addEventListener("click", function(event) {
    event.preventDefault();
    cart_form.classList.remove("show");
});
