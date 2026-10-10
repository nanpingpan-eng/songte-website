/* SongTe site — shared behaviours (vanilla JS, offline-only). */
(function () {
  "use strict";

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  /* ---- Contact form: assemble mailto and prefill product from URL ---- */
  var form = document.getElementById("quote-form");
  function qs(name) {
    var m = new RegExp("[?&]" + name + "=([^&]*)").exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, "%20")) : "";
  }

  var productField = document.getElementById("f-product");
  if (productField) {
    var p = qs("product");
    if (p) { productField.value = p; }
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("f-name").value.trim();
      var email = document.getElementById("f-email").value.trim();
      var country = document.getElementById("f-country").value.trim();
      var product = productField ? productField.value.trim() : "";
      var message = document.getElementById("f-message").value.trim();

      var subject = "Inquiry from " + (name || "website visitor") +
        (product ? " — " + product : "");
      var body =
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Country: " + country + "\n" +
        "Product of interest: " + product + "\n\n" +
        "Message:\n" + message + "\n";

      var uri = "mailto:icylin@songtemachine.cn" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
      window.location.href = uri;
    });
  }

  /* ---- Product gallery: swap main image on thumbnail click ---- */
  var thumbs = document.querySelectorAll(".pd-thumbs img");
  var mainImg = document.querySelector(".pd-gallery .main-img img");
  if (thumbs.length && mainImg) {
    thumbs.forEach(function (t) {
      t.addEventListener("click", function () {
        mainImg.src = t.getAttribute("src");
      });
    });
  }
})();
