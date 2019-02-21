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

// var headerSearch = document.querySelector('.user-block__list .search');
const $headerSearch = $('.user-block__list .search');
// var popSearch = document.querySelector('.modal-search');
const $popSearch = $('.modal-search');

$headerSearch.on('click', function (e) {
  e.preventDefault();
  $popSearch.toggleClass('modal-search--show');
})

// headerSearch.addEventListener("click", function (event) {
//   console.log("клик по мышке")
//   event.preventDefault();
//   popSearch.classList.add("modal-search--show");
// });
    
// headerSearch.addEventListener("click", function (event) {
//   event.preventDefault();
//   popSearch.classList.remove("modal-search--show");
// });