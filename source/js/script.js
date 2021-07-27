'use strict';
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const header = document.querySelector('.page__header');
const main = document.querySelector('.page__main');
const footer = document.querySelector('.page__footer');
const navLinks = document.querySelectorAll('.nav__item a');
const page = document.querySelector('.page');
// Menu
// const scrollToTop = () => {
//   window.scrollTo(0, 0);
// };

// const toggleClass = (element, className) => {
//   element.classList.toggle(className);
// };

// const hideScroll = () => {
//   toggleClass(header, 'page__header--menu-open');
//   toggleClass(main, 'page__main--menu-open');
//   toggleClass(footer, 'page__footer--menu-open');
// }

// let isMenuActive = false;

// const handleMenu = (evt) => {
//   toggleClass(hamburger, 'hamburger--active');
//   isMenuActive = !isMenuActive;

//   if (isMenuActive) {
//     toggleClass(nav, 'nav--active');
//   }
// };

const menuOpenHandler = () => {
  hamburger.classList.add('hamburger--active');
  nav.classList.add('nav--active');
  page.classList.add('page--scroll-disabled');

  navLinks.forEach((link) => {
    link.addEventListener('click', menuCloseHandler);
  })

  hamburger.removeEventListener('click', menuOpenHandler);
  hamburger.addEventListener('click', menuCloseHandler);
}

const menuCloseHandler = () => {
  hamburger.classList.remove('hamburger--active');
  nav.classList.remove('nav--active');
  page.classList.remove('page--scroll-disabled');

  navLinks.forEach((link) => {
    link.removeEventListener('click', menuCloseHandler);
  })

  hamburger.addEventListener('click', menuOpenHandler);
  hamburger.removeEventListener('click', menuCloseHandler);
}

hamburger.addEventListener('click', menuOpenHandler);

nav.classList.remove('nav--nojs');
hamburger.classList.remove('hamburger--no-js');
