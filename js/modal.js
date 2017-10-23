  var popup = document.querySelector(".modal-order");
  var overlay = document.querySelector(".overlay");

    if (document.querySelectorAll(".select"))
    var link = document.querySelectorAll(".select");
    for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-order--show");
    overlay.classList.add("overlay--show");
  });
}

  overlay.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.remove("modal-order--show");
      overlay.classList.remove("overlay--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-order--show")) {
        popup.classList.remove("modal-order--show");
        overlay.classList.remove("overlay--show");
      }
    }
  });
