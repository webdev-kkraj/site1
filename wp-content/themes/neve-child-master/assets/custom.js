(function ($) {
  $(document).ready(function () {
    if ($(".casestudy-carousel").length > 0) {
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
    }
  });
  if ($(".filtercase").length > 0) {
    $(document).on("click", ".filtercase ul li", function () {
      var catflt = $(this).attr("data-filter");
      var catname = $(this).attr("data-filtername");
      $(".filtercase ul li").removeClass("flt-active");
      $(this).addClass("flt-active");
      $(".dyn-breadcrumb").remove();
      if (typeof catflt !== "undefined" && catflt !== "") {
        $(".caseitem").hide();
        $("." + catflt).show();
        $(".breadcrumbs").append(
          "<a class='text-white fw-normal mr-1 d-inline dyn-breadcrumb'> / " +
            catname +
            "</a>"
        );
      } else {
        $(".caseitem").show();
      }
    });
  }
})(jQuery);
