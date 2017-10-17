  var popup = document.querySelector(".modal-order");
  var overlay = document.querySelector(".modal__overlay");

    if (document.querySelectorAll(".modal__btn"))
    var link = document.querySelectorAll(".modal__btn");
    for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("modal__overlay-show");
  });
}

  overlay.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      overlay.classList.remove("modal__overlay-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        overlay.classList.remove("modal__overlay-show");
      }
    }
  });
