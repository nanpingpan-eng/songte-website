/* SongTe site — shared behaviours (vanilla JS, offline-only). */
(function () {
  "use strict";

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () { links.classList.toggle("open"); });
  }

  function qs(name) {
    var m = new RegExp("[?&]" + name + "=([^&]*)").exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, "%20")) : "";
  }

  /* Pre-fill product of interest from ?product= */
  var productField = document.getElementById("f-product");
  if (productField && !productField.value) {
    var p = qs("product");
    if (p) { productField.value = p; }
  }

  /* Contact form: assemble mailto */
  var form = document.getElementById("quote-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      function v(id) { var el = document.getElementById(id); return el ? el.value.trim() : ""; }
      var name = v("f-name"), company = v("f-company"), email = v("f-email"),
          country = v("f-country"), partno = v("f-partno"), model = v("f-model"),
          qty = v("f-qty"), cond = v("f-condition"), dest = v("f-dest"),
          product = v("f-product"), message = v("f-message");

      var subject = "Inquiry from " + (name || "website visitor") +
        (product ? " — " + product : "");
      var body =
        "Name: " + name + "\n" +
        "Company: " + company + "\n" +
        "Email: " + email + "\n" +
        "Country: " + country + "\n" +
        "Part Number: " + partno + "\n" +
        "Machine Model: " + model + "\n" +
        "Quantity: " + qty + "\n" +
        "Condition Required: " + cond + "\n" +
        "Destination: " + dest + "\n" +
        "Product of interest: " + product + "\n\n" +
        "Message:\n" + message + "\n";

      window.location.href = "mailto:songtemachine04@hotmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    });
  }

  /* Product gallery thumbnail swap */
  var thumbs = document.querySelectorAll(".pd-thumbs img");
  var mainImg = document.querySelector(".pd-gallery .main-img img");
  if (thumbs.length && mainImg) {
    thumbs.forEach(function (t) {
      t.addEventListener("click", function () { mainImg.src = t.getAttribute("src"); });
    });
  }
})();
