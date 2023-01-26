const brand = document.querySelector(".brand");
const checkbox = document.querySelector(".toggler");
const intro = document.querySelector(".intro");
const overlay = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
checkbox.addEventListener("click", function (e) {
  brand.classList.toggle("blur");
  intro.classList.toggle("blur");
  if (checkbox.checked) {
    hamburger.style.position = "fixed";
  } else {
    hamburger.style.position = "absolute";
  }
});

let w = 0;
window.onresize = function () {
  w = window.innerWidth;
  if (w > 768) {
    $(".toggler").prop("checked", false);
    brand.classList.remove("blur");
    intro.classList.remove("blur");
  }
};
