const iconMenu = document.getElementById('icon-menu');
const navbar = document.querySelector('.navbar-container');
const navMenu = document.getElementById('topnav-menu');
const fixSocialMedia = document.querySelector('.social-media--home');
const modalBackground = document.getElementById('modal-background');
const closeIcon = document.createElement('img');
closeIcon.setAttribute('src', '/assets/icons/closeIcon.svg');
const btnHome = document.querySelector('.button--home');
const btnBottomMailMe = document.querySelector('.button-bottom--contact');
const servicesSection = document.getElementById('checkpoint-services');
const worksSection = document.getElementById('checkpoint-works');
const aboutMeSection = document.getElementById('checkpoint-about-me');
const contactSection = document.getElementById('contact');

let viewportWidth = window.innerWidth;
let currentIcon;
let body = document.body;
let scrollPosition;
const sizeToDesktop = 1279;

const anchoringBody = () => {
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

  body.classList.add('no-scroll');
  body.style.top = '-' + scrollPosition + 'px';

  body.addEventListener('scroll', function(e) {
    e.preventDefault();
  }, { passive: false });
}

const undokingBody = () => {
  body.classList.remove('no-scroll');
  body.style.top = '';
  window.scrollTo(0, scrollPosition);

  body.removeEventListener('scroll', function(e) {
    e.preventDefault();
  }, { passive: false });
}

const showModalBackground = () => {
  modalBackground.classList.toggle('modal-background-open');
  anchoringBody();
}

const toggleNavMenu = () => {
  navMenu.classList.toggle('showNavMenu');
  showModalBackground();
  
  if (iconMenu.firstChild.tagName !== closeIcon.tagName) {
    currentIcon = iconMenu.innerHTML;
    iconMenu.replaceChildren(closeIcon);
  } else {
    iconMenu.innerHTML = currentIcon;
    undokingBody();
  }
}

// REVEAL ELEMENTS WITHOUT REVEAL

const showBtnHome = () => {
  btnHome.classList.add('showBtnBottomHome');
}

const showNavBar = () => {
  navbar.classList.add('showNavBar');
}

const showFixerSocialMedia = () => {
  fixSocialMedia.classList.add('showFixerSocialMedia');
}

window.addEventListener('load', (event) => {
  if (event.isTrusted) {
    showBtnHome();
    showNavBar();
    showFixerSocialMedia();
  }
});

// ----------------------------------------

window.addEventListener('scroll', () => {
  let ajustePositionServices = 40;
  let activeCheckPointStart = 10;
  let ajustePositionSections = 300;
  let activeCheckPointSection = 50;

  let positionServices = Math.floor(servicesSection.getBoundingClientRect().top) - ajustePositionServices;
  let positionAboutMe = Math.floor(aboutMeSection.getBoundingClientRect().top) - ajustePositionSections;
  let positionWorks = Math.floor(worksSection.getBoundingClientRect().top) - ajustePositionSections;
  let positionContact = Math.floor(contactSection.getBoundingClientRect().top) - ajustePositionSections;
  let hiddenIntoContact = positionContact + ajustePositionSections;

  let wholeViewportHei = Math.floor(window.innerHeight/3);
  let wholeViewportWid = Math.floor(window.innerWidth);

  if (wholeViewportHei - positionServices >= activeCheckPointStart) {
    btnBottomMailMe.classList.add('showBtnBottom');
    btnHome.classList.remove('showBtnBottomHome');
    if (window.innerWidth < sizeToDesktop) {
      fixSocialMedia.classList.remove('showFixerSocialMedia');
      fixSocialMedia.classList.add('hiddenObjects');
    }
  } else if (wholeViewportHei - positionServices <= activeCheckPointStart) {
    btnBottomMailMe.classList.remove('showBtnBottom');
    showBtnHome();
    if (window.innerWidth < sizeToDesktop) {
      showFixerSocialMedia();
    }
  } 
  
  if (wholeViewportHei - positionAboutMe >= activeCheckPointSection) {
    btnBottomMailMe.classList.add('addOpacity');
  } else if (wholeViewportHei - positionAboutMe <= activeCheckPointSection) {
    btnBottomMailMe.classList.remove('addOpacity');
  }

  if (wholeViewportHei - positionWorks >= activeCheckPointSection) {
    btnBottomMailMe.classList.add('scaleObject');
  } else if (wholeViewportHei - positionWorks <= activeCheckPointSection) {
    btnBottomMailMe.classList.remove('scaleObject');
  }

  if (wholeViewportHei - positionContact >= activeCheckPointSection) {
    btnBottomMailMe.classList.remove('showBtnBottom', 'addOpacity');
  }

  if (window.innerWidth > sizeToDesktop) {
    if (hiddenIntoContact <= wholeViewportHei && wholeViewportWid > sizeToDesktop) {
      navbar.classList.add('hiddenObjects');
      navbar.classList.remove('showNarBar', 'showObjects');
      fixSocialMedia.classList.add('hiddenObjects');
      fixSocialMedia.classList.remove('showFixerSocialMedia', 'showObjects');
    } else {
      navbar.classList.add('showObjects');
      navbar.classList.remove('hiddenObjects');
      fixSocialMedia.classList.add('showObjects');
      fixSocialMedia.classList.remove('hiddenObjects');
    }
  }
})

modalBackground.addEventListener('click', toggleNavMenu);

iconMenu.addEventListener('click', toggleNavMenu);

navMenu.addEventListener('click', (event) => {
  if(window.innerWidth >= 767) return;
  if (event.target.tagName === 'A' || event.target.tagName === 'IMG') {
    toggleNavMenu();
  };
})

// SCROLL REVEAL
window.sr = ScrollReveal();

sr.reveal('.home-container__logo-container', {
  duration: 2800,
  origin: 'top',
  distance: '-100px',
  delay: 500,
  reset: true,
})

sr.reveal('.title-container', {
  duration: 1500,
  origin: 'top',
  distance: '-40px',
  reset: true,
})

sr.reveal('.scroll-paragraphs', {
  duration: 1500,
  origin: 'top',
  distance: '-40px',
  delay: 200,
  reset: true,
})

sr.reveal('.service-card', {
  duration: 1500,
  origin: 'top',
  distance: '-50px',
  delay: 200,
  reset: true,
})

sr.reveal('.work-card', {
  duration: 1500,
  origin: 'top',
  distance: '-50px',
  delay: 200,
  reset: true,
})

sr.reveal('.button--footer', {
  duration: 1500,
  origin: 'top',
  distance: '-70px',
  delay: 200,
  reset: true,
})

sr.reveal('.social-media--footer', {
  duration: 1500,
  origin: 'top',
  distance: '-50px',
  delay: 200,
  reset: true,
})

if (viewportWidth < 1280) {
  sr.reveal('.scroll-iAm', {
    duration: 2800,
    origin: 'top',
    distance: '-200px',
    reset: true,
  })
  
  sr.reveal('.home-container__title', {
    duration: 3000,
    origin: 'top',
    distance: '-200px',
    delay: 100,
    reset: true,
  })
  
  sr.reveal('.home-container__subtitle', {
    duration: 3300,
    origin: 'top',
    distance: '-200px',
    delay: 200,
    reset: true,
  })
  
  sr.reveal('.scroll-copyHome', {
    duration: 3500,
    origin: 'top',
    distance: '-200px',
    delay: 300,
    reset: true,
  })

  sr.reveal('.scroll-paragraphs2', {
    duration: 2000,
    origin: 'top',
    distance: '-100px',
    delay: 200,
    reset: true,
  })
  
  sr.reveal('.scroll-paragraphs3', {
    duration: 2000,
    origin: 'left',
    distance: '-20px',
    delay: 200,
    reset: true,
  })
} else {
  sr.reveal('.scroll-iAm', {
    duration: 2800,
    origin: 'left',
    distance: '-200px',
    reset: true,
  })

  sr.reveal('.home-container__title', {
    duration: 3000,
    origin: 'left',
    distance: '-200px',
    delay: 100,
    reset: true,
  })

  sr.reveal('.home-container__subtitle', {
    duration: 3300,
    origin: 'left',
    distance: '-200px',
    delay: 200,
    reset: true,
  })

  sr.reveal('.scroll-copyHome', {
    duration: 3500,
    origin: 'left',
    distance: '-200px',
    delay: 300,
    reset: true,
  })

  sr.reveal('.scroll-paragraphs2', {
    duration: 2000,
    origin: 'left',
    distance: '-100px',
    delay: 200,
    reset: true,
  })
}