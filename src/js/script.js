'use strict';

//////////////////////////////////////////////////
// ELEMENTS
const nav = document.querySelector('.nav');
const seeWorkBtn = document.querySelector('.btn--work');
const contactBtn = document.querySelector('.btn--contact');
const header = document.querySelector('.header');
const navLogo = document.querySelector('.logo');
const logos = document.querySelectorAll('.logo');
const btnOpenNav = document.querySelector('.nav__btn');
const btnCloseNav = document.querySelector('.nav__btn-close');
const navList = document.querySelector('.nav__list');

//////////////////////////////////////////////////
// NAVIGATION ON MOBILE
const showNav = function () {
  navList.style.left = 0;
  document.querySelectorAll('.nav__link').forEach(el => (el.style.opacity = 1));
};

const hideNav = function () {
  navList.style.left = '100%';
};

btnOpenNav.addEventListener('click', showNav);
btnCloseNav.addEventListener('click', hideNav);

//////////////////////////////////////////////////
// NAVIGATION LINKS & SMOOTH SCROLLING
nav.addEventListener('click', function (e) {
  e.preventDefault();
  const link = e.target.closest('.nav__link');
  if (!link) return;

  const id = link.getAttribute('href');
  if (id === '#') return;
  const section = document.querySelector(id);
  hideNav();
  section.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////////////
// SMOOTH SCROLLING ON BUTTONS

[seeWorkBtn, contactBtn].forEach(btn =>
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href');
    const section = document.querySelector(sectionId);

    section.scrollIntoView({ behavior: 'smooth' });
  })
);

///////////////////////////////////////////////////
// LOGO SCROLL TO TOP

logos.forEach(logo =>
  logo.addEventListener('click', function () {
    header.scrollIntoView({ behavior: 'smooth' });
  })
);

///////////////////////////////////////////////////
//  STICKY NAVIGATION
const navHeight = nav.getBoundingClientRect().height;

const obsCallback = function ([entry]) {
  if (entry.isIntersecting) {
    nav.classList.remove('nav--sticky');
  } else nav.classList.add('nav--sticky');
};

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const headerObserver = new IntersectionObserver(obsCallback, obsOptions);

headerObserver.observe(header);

//////////////////////////////////////////////////////
// OPACITY CHANGING ON NAVIGATION HOVERING
const hoverMenu = function (e) {
  const link = e.target;
  const siblings = link.closest('.nav').querySelectorAll('.nav__comp');

  siblings.forEach(sibling => {
    if (sibling !== link) {
      sibling.style.opacity = this;
    }
  });
};

nav.addEventListener('mouseover', hoverMenu.bind(0.7));
nav.addEventListener('mouseout', hoverMenu.bind(1));
