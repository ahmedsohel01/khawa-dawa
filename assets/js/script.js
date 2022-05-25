jQuery(document).ready(function () {
  // Banner Slider Activation
  $(".banner__slider").slick({
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    prevArrow: `<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>`,
    nextArrow: `<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>`,
  });

  // Testimonial Slider Activation
  $(".testimonial__slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: true,
  });
});
