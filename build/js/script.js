'use strict';
var hamburger = document.querySelector('.hamburger');
var nav = document.querySelector('.nav');
var header = document.querySelector('.page__header');
var main = document.querySelector('.page__main');
var footer = document.querySelector('.page__footer');


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

var handleMenu = function () {
  toggleClass(hamburger, 'hamburger--active');
  toggleClass(nav, 'nav--active');
  hideScroll();

  if (!hamburger.classList.contains('hamburger--active')) {
    scrollToTop();
  }
};

hamburger.addEventListener('click', handleMenu);

nav.classList.remove('nav--nojs');
hamburger.classList.remove('hamburger--no-js');
