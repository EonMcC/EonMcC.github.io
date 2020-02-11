document.addEventListener('DOMContentLoaded', () => {
  createSquare();
  var intervalID = window.setInterval(fadeIn, 1);
  var intervalID = window.setInterval(fadeOut, 10);

  //About Me
  const about = document.querySelector('.about-me');
  about.addEventListener('click', handleAboutClick);
  const hideAbout = document.querySelector('.about-close');
  hideAbout.addEventListener('click', handleAboutClose);

  //Projects
  const projects = document.querySelector('.projects');
  projects.addEventListener('click', handleProjectsClick);
  const hideProjects = document.querySelector('.projects-close');
  hideProjects.addEventListener('click', handleProjectsClose);

  //Languages
  const languages = document.querySelector('.languages');
  languages.addEventListener('click', handleLanguagesClick);
  const hideLanguages = document.querySelector('.languages-close');
  hideLanguages.addEventListener('click', handleLanguagesClose);

  //Contact
  const contact = document.querySelector('.contact');
  contact.addEventListener('click', handleContactClick);
  const hideContact = document.querySelector('.contact-close');
  hideContact.addEventListener('click', handleContactClose);
});
//Landing Page Squares
const squares = [];

const createSquare = function () {
  const base = 'mask-';
  for (i = 0; i <= 1500; i++) {
    let welcome = document.querySelector('#welcome-mask');
    squares.push(`.${base}${i}`);
    let square = document.createElement('div');
    square.classList.add(`${base}${i}`);
    welcome.appendChild(square);
  };
};

const randomSquare = function () {
  return document.querySelector(squares[Math.floor(Math.random() * squares.length)]);
};

const fadeIn = function () {
  let squares = [];
  for (let i = 0; i < 25; i++) {
    squares.push(randomSquare());
  }
  for (square of squares) {
    square.style.opacity = '0';
    square.style.transitionDuration = '1s';
  }
};

const fadeOut = function () {
  let square = randomSquare();
  square.style.opacity = '.7';
  square.style.transitionDuration = '2s';
};

//About Me
const handleAboutClick = function () {
  const toChangeAbout = document.querySelector('#about');
  toChangeAbout.style = "z-index: 10; opacity: 1; transition-duration: 1s; height: auto; width: 55vw; position: absolute; top: 20%; left: 25%";
  const toChangeAboutPar = document.querySelector('#about p');
  toChangeAboutPar.style = "opacity: 1; transition-delay: 1s;"
};
const handleAboutClose = function () {
  const toClose = document.querySelector('#about');
  toClose.style = "z-index: -1; opacity: 0; transition-duration: 1s; height: 5%; width: 5%; top: 10%; left: 75%;";
};

//Projects
const handleProjectsClick = function () {
  const popUp = document.querySelector('.currently-working-on');
  popUp.style = "z-index: 9; opacity: 1; transition-duration: 1s; height: 7vh; width: 80vw; position: absolute; padding: 0px;";
  const toChangeProjects = document.querySelector('#projects');
  toChangeProjects.style = "z-index: 10; opacity: 1; transition-duration: 1s; height: 60vh; width: 55vw; position: absolute; top: 20%; left: 25%;";
};
const handleProjectsClose = function () {
  const popUpToClose = document.querySelector('.currently-working-on');
  popUpToClose.style = "z-index: -1 opacity: 0; transition-duration: 1s;"
  const toClose = document.querySelector('#projects');
  toClose.style = "z-index: -1; opacity: 0; transition-duration: 1s; height: 5%; width: 5%; top: 30%; left: 75%;";
};

//Languages
const handleLanguagesClick = function () {
  const toChangeLanguages = document.querySelector('#languages');
  toChangeLanguages.style = "z-index: 10; opacity: 1; transition-duration: 1s; height: auto; width: 55vw; position: absolute; top: 20%; left: 25%;";
};
const handleLanguagesClose = function () {
  const toClose = document.querySelector('#languages');
  toClose.style = "z-index: -1; opacity: 0; transition-duration: 1s; height: 5%; width: 5%; top: 50%; left: 75%;";
};

//Contact
const handleContactClick = function () {
  const toChangeContact = document.querySelector('#contact');
  toChangeContact.style = "z-index: 10; opacity: 1; transition-duration: 1s; height: auto; width: 55vw; position: absolute; top: 20%; left: 25%;";
};
const handleContactClose = function () {
  const toClose = document.querySelector('#contact');
  toClose.style = "z-index: -1; opacity: 0; transition-duration: 1s; height: 5%; width: 5%; top: 70%; left: 75%;";
};
