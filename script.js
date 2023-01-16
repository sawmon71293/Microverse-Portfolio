const brand = document.querySelector(".brand");
const checkbox = document.querySelector(".toggler");
const intro = document.querySelector(".intro");
const overlay = document.querySelector(".menu");
checkbox.addEventListener("click", function (e) {
  brand.classList.toggle("blur");
  intro.classList.toggle("blur");
  overlay.classList.toggle("blur");
});
