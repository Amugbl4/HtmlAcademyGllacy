$(document).ready(function () {
  $('.intro-slider__slides').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});

$('.intro-slider__slides').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  const $slider = $(this);
  const $nextSlide = $($slider.find('.slick-slide')[nextSlide]);
  const bgColor = $nextSlide.data('bg-color');
  $('body').css('background-color', bgColor);
});
    
