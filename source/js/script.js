'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');

// pageHeader.classList.remove('page-header--nojs');

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });
var hamburger = document.querySelector('.hamburger');
var nav = document.querySelector('.nav');

var scrollToTop = function () {
  window.scrollTo(0, 0);
};

var toggleClass = function (element, className) {
  element.classList.toggle(className);
};

var handleMenu = function () {
  toggleClass(hamburger, 'hamburger--active');
  toggleClass(nav, 'nav--active');

  if (!hamburger.classList.contains('hamburger--active')) {
    scrollToTop();
  }
};

hamburger.addEventListener('click', handleMenu);

nav.classList.remove('nav--nojs');
hamburger.classList.remove('hamburger--no-js');
