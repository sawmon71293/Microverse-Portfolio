const brand = document.querySelector('.brand');
const checkbox = document.querySelector('#toggle');
const intro = document.querySelector('.intro');
const hamburger = document.querySelector('.hamburger');
const works = document.querySelector('.works');
const aboutMyself = document.querySelector('.about_myself');
function remove() {
  document.getElementById('toggle').checked = false;
  brand.classList.remove('blur');
  intro.classList.remove('blur');
  works.classList.remove('blur');
  aboutMyself.classList.remove('blur');
  hamburger.style.position = 'absolute';
}

function toggle() {
  if (checkbox.checked) {
    hamburger.style.position = 'fixed';
    brand.classList.toggle('blur');
    intro.classList.toggle('blur');
    works.classList.toggle('blur');
    aboutMyself.classList.toggle('blur');
  } else {
    hamburger.style.position = 'absolute';
    remove();
  }
}

let w = 0;
window.onresize = () => {
  w = window.innerWidth;
  if (w > 768) {
    toggle();
  }
};

// card objects

function createCard(project, index) {
  const projectTemplate = `<div class="card">
        <header id="header_${(index += 1)}" >
          <img class="portfolio" src="img/${project.featureImage}" 
          alt="Portfolio">
         </header>
         <div class="card_body cb_${index}">
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
          <ul class="skills project_${index}">
          </ul>
          <button class="button" data-toggle="modal" data-target="#projectModal"> See project </button>
         </div>
        </div>`;
  works.innerHTML += projectTemplate;
  project.techStack.forEach((item) => {
    const list = document.createElement('li');
    list.innerText = item;
    document.querySelector(`.project_${index}`).appendChild(list);
  });

  if (index % 2 === 0) {
    const header = document.querySelector(`#header_${index}`);
    const cardBody = document.querySelector(`.cb_${index}`);
    header.classList.toggle('flip1');
    cardBody.classList.toggle('flip2');
  }
}

window.onload = () => {
  const projects = [
    {
      name: 'Library',
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required',
      featureImage: 'portfolio1.png',
      techStack: ['html', 'css', 'javascript'],
      liveLink: 'https://sawmon71293.github.io/personal-portfolio/',
      sourceLink: 'https://github.com/sawmon71293/personal-portfolio',
    },
    {
      name: 'Job Agency',
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required',
      featureImage: 'portfolio2.png',
      techStack: ['html', 'css', 'javascript', 'Ruby on Rails'],
      liveLink: 'https://sawmon71293.github.io/personal-portfolio/',
      sourceLink: 'https://github.com/sawmon71293/personal-portfolio',
    },
    {
      name: 'Songs Library',
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required',
      featureImage: 'portfolio3.png',
      techStack: ['html', 'react', 'Ruby on Rails'],
      liveLink: 'https://sawmon71293.github.io/personal-portfolio/',
      sourceLink: 'https://github.com/sawmon71293/personal-portfolio',
    },
    {
      name: 'Portal',
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required',
      featureImage: 'portfolio4.png',
      techStack: ['html', 'react', 'Ruby on Rails'],
      liveLink: 'https://sawmon71293.github.io/personal-portfolio/',
      sourceLink: 'https://github.com/sawmon71293/personal-portfolio',
    },
  ];
  projects.forEach((project, index) => {
    createCard(project, index);
  });
};
