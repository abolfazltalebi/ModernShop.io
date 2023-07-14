"use strict"
window.addEventListener("scroll", function () {
  let back = document.querySelector("#back-to-top");
  if (window.scrollY > 60) {
    back.style.display = "block";
  } else {
    back.style.display = "none";
  }
});
let backTop = document.querySelector("#back-to-top");
backTop.addEventListener("click", function () {
  window.scroll(0, 0);
});