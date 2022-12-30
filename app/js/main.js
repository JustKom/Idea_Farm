$(function () {

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000
  });

  $('.new-slider__inner').slick({
    arrows: false,
    slidesToShow: 5,
    infinite: true,
    speed: 5000,
    centerMode: true,
    centerPadding: '60px',
    slidesToScroll: 3,
    autoplay: true
  });

  $(".logo, .menu__list-link--active").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });


});