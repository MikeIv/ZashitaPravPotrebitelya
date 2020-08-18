var mainForm = document.querySelector(".js_main-form__btn-popup-form-1");
var mainFormAdd = document.querySelector(".js_main-form__btn-popup-form-2");
var mainFormPopup = document.querySelector(".js_form-popup");
var mainFormPopupAdd = document.querySelector(".js_form-popup-2");






// open popup form 1
mainForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (mainFormPopup.classList.contains("form-popup__show")) {
    mainFormPopup.classList.remove("form-popup__show");
  } else {
    mainFormPopup.classList.add("form-popup__show");

  }

});



// open popup form 2
mainFormAdd.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (mainFormPopupAdd.classList.contains("form-popup__show")) {
    mainFormPopupAdd.classList.remove("form-popup__show");
  } else {
    mainFormPopupAdd.classList.add("form-popup__show");

  }

});



