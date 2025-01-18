(function ($) {
  $(document).ready(function () {
    $(".casestudy-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 2 },
      },
    });
  });
})(jQuery);
