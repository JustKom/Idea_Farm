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

  // $(".menu a").on("click", function (event) {
  //   //отменяем стандартную обработку нажатия по ссылке
  //   event.preventDefault();
  //   //забираем идентификатор бока с атрибута href
  //   var id = $(this).attr('href'),
  //   //узнаем высоту от начала страницы до блока на который ссылается якорь
  //   top = $(id).offset().top;
  //   //анимируем переход на расстояние - top за 1500 мс
  //   $('body,html').animate({
  //     scrollTop: top
  //   }, 1500);
  // });


});