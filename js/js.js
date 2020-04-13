document.addEventListener("DOMContentLoaded", () => {
  createSquare();
  var intervalID = window.setInterval(fadeIn, 1);
  var intervalID = window.setInterval(fadeOut, 10);

  const body = document.querySelector(".main-grid");
  body.addEventListener("click", handleAllClose);

  //Dark Mode
  const checkbox = document.querySelector("input[name=theme");
  checkbox.addEventListener("change", handleToggle);

  //About Me
  const about = document.querySelector(".about-me");
  about.addEventListener("click", handleAboutClick);
  const hideAbout = document.querySelector(".about-close");
  hideAbout.addEventListener("click", handleAboutClose);

  //Projects
  const projects = document.querySelector(".projects");
  projects.addEventListener("click", handleProjectsClick);
  const hideProjects = document.querySelector(".projects-close");
  hideProjects.addEventListener("click", handleProjectsClose);

  //Languages
  const languages = document.querySelector(".languages");
  languages.addEventListener("click", handleLanguagesClick);
  const hideLanguages = document.querySelector(".languages-close");
  hideLanguages.addEventListener("click", handleLanguagesClose);

  //Contact
  const contact = document.querySelector(".contact");
  contact.addEventListener("click", handleContactClick);
  const hideContact = document.querySelector(".contact-close");
  hideContact.addEventListener("click", handleContactClose);

  var flkty = new Flickity(".main-gallery", {
    // options
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    pageDots: true,
  });
});

//Landing Page Squares
const squares = [];

const createSquare = function () {
  const base = "mask-";
  for (i = 0; i <= 1500; i++) {
    let welcome = document.querySelector("#welcome-mask");
    squares.push(`.${base}${i}`);
    let square = document.createElement("div");
    square.classList.add(`${base}${i}`);
    welcome.appendChild(square);
  }
};

const randomSquare = function () {
  return document.querySelector(
    squares[Math.floor(Math.random() * squares.length)]
  );
};

const fadeIn = function () {
  let squares = [];
  for (let i = 0; i < 25; i++) {
    squares.push(randomSquare());
  }
  for (square of squares) {
    square.style.opacity = "0";
    square.style.transitionDelay = "0.5s";
    square.style.transitionDuration = "1s";
  }
};

const fadeOut = function () {
  let square = randomSquare();
  square.style.opacity = ".7";
  square.style.transitionDuration = "2s";
};

var handleToggle = function () {
  if (this.checked) {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
  }
};
let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

//Close by clicking outside of open element - Mobile
let openWindow = "";

const handleAllClose = function (event) {
  let polaroids = document.getElementsByClassName("polaroids")[0];
  let polaroidContainer = document.getElementsByClassName(
    "polaroid-container"
  )[0];
  if (
    event.target === this ||
    event.target === polaroids ||
    event.target === polaroidContainer
  ) {
    handleBlur(false);
    switch (openWindow) {
      case "about":
        handleAboutClose();
        return;
      case "projects":
        handleProjectsClose();
        return;
      case "languages":
        handleLanguagesClose();
        return;
      case "contact":
        handleContactClose();
        return;
      default:
        return;
    }
  }
};

const handleBlur = function (blur) {
  let toBlur = document.querySelectorAll(".main-grid > *");
  console.log(blur);
  if (blur) {
    toBlur.forEach((element) => {
      element.style = "filter: blur(2px); transition-duration: 1s;";
    });
  } else {
    console.log(blur);
    toBlur.forEach((element) => {
      element.style = "filter: blur(0px); transition-duration: 0.5s;";
    });
  }
};

const media = window.matchMedia("(max-width: 1000px)");
//If mobile
if (media.matches) {
  //About Me - mobile
  var handleAboutClick = function () {
    document.querySelector("#about").id = "about-open-mobile";
    document.querySelector("#about-open-mobile .about-text-container").style =
      "opacity: 1; font-size: 1.5rem; transition-delay: 1s;";
    openWindow = "about";
    handleBlur(true);
  };

  var handleAboutClose = function () {
    document.querySelector("#about-open-mobile").id = "about";
    document.querySelector(".about-text-container").style = "opacity: 0;";
    openWindow = "";
    handleBlur(false);
  };

  //Projects - mobile
  var handleProjectsClick = function () {
    // document.querySelector('.currently-working-on').style = "z-index: 9; opacity: 1; transition-duration: 1s; height: 7vh; width: 80vw; position: absolute; padding: 0px;";
    document.querySelector("#projects").id = "projects-open-mobile";
    openWindow = "projects";
    handleBlur(true);
  };
  var handleProjectsClose = function () {
    // document.querySelector('.currently-working-on').style = "z-index: -1 opacity: 0; transition-duration: 1s;";
    document.querySelector("#projects-open-mobile").id = "projects";
    openWindow = "";
    handleBlur(false);
  };

  //Languages - mobile
  var handleLanguagesClick = function () {
    document.querySelector("#languages").id = "languages-open-mobile";
    openWindow = "languages";
    handleBlur(true);
  };
  var handleLanguagesClose = function () {
    document.querySelector("#languages-open-mobile").id = "languages";
    openWindow = "";
    handleBlur(false);
  };

  //Contact - mobile
  var handleContactClick = function () {
    document.querySelector("#contact").id = "contact-open-mobile";
    openWindow = "contact";
    handleBlur(true);
  };
  var handleContactClose = function () {
    document.querySelector("#contact-open-mobile").id = "contact";
    openWindow = "";
    handleBlur(false);
  };

  //Else if not mobile
} else {
  //About Me
  var handleAboutClick = function () {
    document.querySelector("#about").id = "about-open";
    document.querySelector(".about-text-container").style =
      "opacity: 1; transition-delay: 1s; padding: 10px;";
    handleBlur(true);
    openWindow = "about";
  };
  var handleAboutClose = function () {
    document.querySelector("#about-open").id = "about";
    document.querySelector(".about-text-container").style =
      "opacity: 0; transition-duration: 1s;";
    openWindow = "";
    handleBlur(false);
  };

  //Projects
  var handleProjectsClick = function () {
    // document.querySelector('.currently-working-on').style = "z-index: 9; opacity: 1; transition-duration: 1s; height: 7vh; width: 80vw; position: absolute; padding: 0px;";
    document.querySelector("#projects").id = "projects-open";
    openWindow = "projects";
    handleBlur(true);
  };
  var handleProjectsClose = function () {
    // document.querySelector('.currently-working-on').style = "z-index: -1 opacity: 0; transition-duration: 1s;";
    document.querySelector("#projects-open").id = "projects";
    openWindow = "";
    handleBlur(false);
  };

  //Languages
  var handleLanguagesClick = function () {
    document.querySelector("#languages").id = "languages-open";
    openWindow = "languages";
    handleBlur(true);
  };
  var handleLanguagesClose = function () {
    document.querySelector("#languages-open").id = "languages";
    openWindow = "";
    handleBlur(false);
  };

  //Contact
  var handleContactClick = function () {
    document.querySelector("#contact").id = "contact-open";
    openWindow = "contact";
    handleBlur(true);
  };
  var handleContactClose = function () {
    document.querySelector("#contact-open").id = "contact";
    openWindow = "";
    handleBlur(false);
  };
}
