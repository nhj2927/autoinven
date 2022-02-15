/*!
 * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
$(document).ready(function () {
  // Activate scrollspy to add active class to navbar items on scroll

  // Collapse Navbar
  var navbarCollapse = function () {
    const windowwidth = $(window).width();
    if ($('.navbar').offset().top > 10) {
      $('#main_nav').addClass('navbar-shrink');
    } else {
      $('#main_nav').removeClass('navbar-shrink');
    }
  };

  // Collapse now if page is not at top
  navbarCollapse();

  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
});
