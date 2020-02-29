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

  var flkty = new Flickity( '.main-gallery', {
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true
  });
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
    square.style.transitionDelay = '0.5s';
    square.style.transitionDuration = '1s';
  }
};

const fadeOut = function () {
  let square = randomSquare();
  square.style.opacity = '.7';
  square.style.transitionDuration = '2s';
};

const media = window.matchMedia( "(max-width: 1000px)" );
//If mobile
if (media.matches) {
  //About Me - mobile
  var handleAboutClick = function () {  
      document.querySelector('#about').id = "about-open-mobile";
      document.querySelector('#about-open-mobile p').style = 'opacity: 1; font-size: 1.5rem; transition-delay: 1s;'
  }
  var handleAboutClose = function () {
    document.querySelector('#about-open-mobile').id = "about";
    document.querySelector('#about p').style = "opacity: 0;"
  };

  //Projects - mobile
  var handleProjectsClick = function () {
    // document.querySelector('.currently-working-on').style = "z-index: 9; opacity: 1; transition-duration: 1s; height: 7vh; width: 80vw; position: absolute; padding: 0px;";
    document.querySelector('#projects').id = "projects-open-mobile";

  };
  var handleProjectsClose = function () {
    // document.querySelector('.currently-working-on').style = "z-index: -1 opacity: 0; transition-duration: 1s;";
    document.querySelector('#projects-open-mobile').id = "projects";
  };

    //Languages - mobile
    var handleLanguagesClick = function () {
      document.querySelector('#languages').id = 'languages-open-mobile';
    };
    var handleLanguagesClose = function () {
      document.querySelector('#languages-open-mobile').id = 'languages';
    };

    //Contact - mobile
    var handleContactClick = function () {
      document.querySelector('#contact').id = 'contact-open-mobile';
    };
    var handleContactClose = function () {
      document.querySelector('#contact-open-mobile').id = 'contact';
    };


  //Else if not mobile
  } else {
    //About Me
    var handleAboutClick = function () {
      document.querySelector('#about').id = "about-open";
      document.querySelector('#about-open p').style = 'opacity: 1; transition-delay: 1s;'
  }
    var handleAboutClose = function () {
      document.querySelector('#about-open').id = "about";
      document.querySelector('#about p').style = "opacity: 0;"
    };

  //Projects
    var handleProjectsClick = function () {
      // document.querySelector('.currently-working-on').style = "z-index: 9; opacity: 1; transition-duration: 1s; height: 7vh; width: 80vw; position: absolute; padding: 0px;";
      document.querySelector('#projects').id = "projects-open";
    };
    var handleProjectsClose = function () {
      // document.querySelector('.currently-working-on').style = "z-index: -1 opacity: 0; transition-duration: 1s;";
      document.querySelector('#projects-open').id = "projects";
    };

    //Languages
    var handleLanguagesClick = function () {
      document.querySelector('#languages').id = 'languages-open';
    };
    var handleLanguagesClose = function () {
      document.querySelector('#languages-open').id = 'languages';
    };

    //Contact
    var handleContactClick = function () {
      document.querySelector('#contact').id = 'contact-open';
    };
    var handleContactClose = function () {
      document.querySelector('#contact-open').id = 'contact';
    };
  };
