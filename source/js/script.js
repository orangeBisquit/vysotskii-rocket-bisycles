'use strict';
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const header = document.querySelector('.page__header');
const main = document.querySelector('.page__main');
const footer = document.querySelector('.page__footer');
const navLinks = document.querySelectorAll('.nav__item a');

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const toggleClass = (element, className) => {
  element.classList.toggle(className);
};

const hideScroll = () => {
  toggleClass(header, 'page__header--menu-open');
  toggleClass(main, 'page__main--menu-open');
  toggleClass(footer, 'page__footer--menu-open');
}

const handleMenu = (evt) => {
  toggleClass(hamburger, 'hamburger--active');
  toggleClass(nav, 'nav--active');
  hideScroll();

  if (!hamburger.classList.contains('hamburger--active') && evt.target === hamburger) {
    scrollToTop();
  }
};

navLinks.forEach((link) => {
  link.addEventListener('click', handleMenu);
})

hamburger.addEventListener('click', handleMenu);

nav.classList.remove('nav--nojs');
hamburger.classList.remove('hamburger--no-js');
