'use strict';
var hamburger = document.querySelector('.hamburger');
var nav = document.querySelector('.nav');
var header = document.querySelector('.page__header');
var main = document.querySelector('.page__main');
var footer = document.querySelector('.page__footer');
var navLinks = document.querySelectorAll('.nav__item a');
console.log(navLinks);


var scrollToTop = function () {
  window.scrollTo(0, 0);
};

var toggleClass = function (element, className) {
  element.classList.toggle(className);
};

var hideScroll = function () {
  toggleClass(header, 'page__header--menu-open');
  toggleClass(main, 'page__main--menu-open');
  toggleClass(footer, 'page__footer--menu-open');
}

var handleMenu = function (evt) {
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
