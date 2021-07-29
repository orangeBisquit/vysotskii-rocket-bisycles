const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__item a');
const page = document.querySelector('.page');

// No JS Remove
nav.classList.remove('nav--nojs');
hamburger.classList.remove('hamburger--no-js');

const menuCloseHandler = () => {
  hamburger.classList.remove('hamburger--active');
  nav.classList.remove('nav--active');
  page.classList.remove('page--scroll-disabled');

  navLinks.forEach((link) => {
    link.removeEventListener('click', menuCloseHandler);
  });

  hamburger.removeEventListener('click', menuCloseHandler);
};

// Menu Handler
const menuOpenHandler = () => {
  hamburger.classList.add('hamburger--active');
  nav.classList.add('nav--active');
  page.classList.add('page--scroll-disabled');

  navLinks.forEach((link) => {
    link.addEventListener('click', menuCloseHandler);
  });

  hamburger.addEventListener('click', menuCloseHandler);
};

hamburger.addEventListener('click', menuOpenHandler);
