var callback_btn = document.querySelector(".map-contacts .write-btn");
var callback_form_close = document.querySelector(".modal-write-us .close");
var callback_form = document.querySelector(".modal-write-us");
var user_name = callback_form.querySelector("[name=name]");
var email = callback_form.querySelector("[type=email]");
var user_name_save = localStorage.getItem("user_name");
var message = callback_form.querySelector(".text");


callback_btn.addEventListener("click", function(event) {
    event.preventDefault();
    callback_form.classList.add("show");
    if (user_name_save) {
        user_name.value = user_name_save;
        email.focus();
    }
    else {
        user_name.focus();
    }

});

callback_form_close.addEventListener("click", function(event) {
    event.preventDefault();
    callback_form.classList.remove("show");
});


  callback_form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!(user_name.value && email.value && message.value))
        {
            alert("Для отправки формы введите имя, e-mail и текст сообщения!");

        }
    else {
        localStorage.setItem("user_name", user_name.value);
        console.log(user_name.value);
        console.log(email.value);
        console.log(message.value);
    }
});
    window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) {
            if (callback_form.classList.contains("show"))
            {
                callback_form.classList.remove("show");
            }
        }
});
