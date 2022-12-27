$(function () {

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000
  });

  $('.new-slider__inner').slick({
    centerMode: true,
    // centerPadding: '60px',
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
  });

});