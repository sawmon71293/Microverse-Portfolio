const brand = document.querySelector(".brand");
const checkbox = document.querySelector(".toggler");
const intro = document.querySelector(".intro");
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

// card objects

function createCard(project, index) {
  let projectTemplate = `<div class="card">
         <header id="header_${index + 1}" >
          <img class="portfolio" src="img/${
            project.featureImage
          }" alt="Portfolio">
         </header>
         <div class="card_body cb_${index + 1}">
          <h2 class="title">${project.name}</h2>
          <div class="experience">
          <span class="subtitle">Canopy</span>
          <ul class="block">
            <li>Back End Dev</li>
            <li>2015</li>
          </ul>
          </div>
          <p class="content">${project.description}
          </p>
          <ul class="skills project_${++index}">
          </ul>
          <button class="button"> See project </button>
         </div>
        </div>`;
  works.innerHTML += projectTemplate;
  project.techStack.forEach((item) => {
    let list = document.createElement("li");
    list.innerText = item;
    document.querySelector(".project_" + index).appendChild(list);
  });

  if (index % 2 === 0) {
    let header = document.querySelector("#header_" + index);
    let card_body = document.querySelector(".cb_" + index);
    header.classList.toggle("flip1");
    card_body.classList.toggle("flip2");
  }
}

window.onload = function () {
  const projects = [
    {
      name: "Library",
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required",
      featureImage: "portfolio1.png",
      techStack: ["html", "css", "javascript"],
      liveLink: "https://sawmon71293.github.io/personal-portfolio/",
      sourceLink: "https://github.com/sawmon71293/personal-portfolio",
    },
    {
      name: "Job Agency",
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required",
      featureImage: "portfolio2.png",
      techStack: ["html", "css", "javascript", "Ruby on Rails"],
      liveLink: "https://sawmon71293.github.io/personal-portfolio/",
      sourceLink: "https://github.com/sawmon71293/personal-portfolio",
    },
    {
      name: "Songs Library",
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required",
      featureImage: "portfolio3.png",
      techStack: ["html", "react", "Ruby on Rails"],
      liveLink: "https://sawmon71293.github.io/personal-portfolio/",
      sourceLink: "https://github.com/sawmon71293/personal-portfolio",
    },
    {
      name: "Portal",
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required",
      featureImage: "portfolio4.png",
      techStack: ["html", "react", "Ruby on Rails"],
      liveLink: "https://sawmon71293.github.io/personal-portfolio/",
      sourceLink: "https://github.com/sawmon71293/personal-portfolio",
    },
  ];
  projects.forEach((project, index) => {
    createCard(project, index);
  });
};
