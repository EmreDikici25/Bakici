$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $(".nav").toggleClass("nav-toggle");
  });

  $(window).on("load csroll", function () {
    $(".fa-bars").toggleClass("fa-times");
    $(".nav").removeClass("nav-toggle");

    if ($(window).scrollTop() > 10) {
      $("header").addClass("header-active");
    } else {
      $("header").removeClass("header-active");
    }
  });

  $(".bakici").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});
