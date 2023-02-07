const brand = document.querySelector(".brand");
const checkbox = document.querySelector(".toggler");
const intro = document.querySelector(".intro");
const hamburger = document.querySelector(".hamburger");
const works = document.querySelector(".works");
const aboutMyself = document.querySelector(".about_myself");
checkbox.addEventListener("click", function (e) {
  brand.classList.toggle("blur");
  intro.classList.toggle("blur");
  works.classList.toggle("blur");
  aboutMyself.classList.toggle("blur");

  $(".nav-links").click(function () {
    $(".toggler").prop("checked", false);
    brand.classList.remove("blur");
    intro.classList.remove("blur");
    works.classList.remove("blur");
    aboutMyself.classList.remove("blur");
    hamburger.style.position = "absolute";
  });

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
    works.classList.remove("blur");
    aboutMyself.classList.remove("blur");
  }
};
