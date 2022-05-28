jQuery(document).ready(function () {
  // Mobile Menu
  $("#mean-menu").meanmenu({
    // where meanmenu will be placed within the HTML
    meanMenuContainer: ".mobile-menu",

    // breakpoint
    meanScreenWidth: "991",

    // set a height here in px, em or %
    meanNavPush: "",

    // show sub-menus
    meanShowChildren: true,

    // allow expand/collapse sub-menus
    meanExpandableChildren: true,

    // expand button
    meanExpand: "+",

    // collapse button
    meanContract: "-",
  });

  // Mobile Menu Sidebar Opend
  $(".sidebar__toggle-btn").on("click", () => {
    $(".sidebar__area").addClass("opend");
  });
  // Mobile Menu Sidebar Closed
  $(".sidebar__close-btn").on("click", () => {
    $(".sidebar__area").removeClass("opend");
  });

  // Banner Slider Activation
  $(".banner__slider").slick({
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    prevArrow: `<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>`,
    nextArrow: `<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>`,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // Testimonial Slider Activation
  $(".testimonial__slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
