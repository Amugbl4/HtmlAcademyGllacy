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

const headerSearch = document.querySelector('.user-block__list .search');
const headerLogin = document.querySelector('.user-block .login');
const modal = document.querySelector('.modal');

var toggleModal = function toggleModal() {
  modal.classList.toggle('modal--show');
}

headerSearch.addEventListener('click', function(event) {
  event.stopPropagation();

  toggleModal();
});


document.addEventListener('click', function(event) {
  var target = event.target;
  console.log(event.target)
  var its_modal = target == modal || modal.contains(target);
  var its_headerSearch = target == headerSearch;
  var modal_is_show = modal.classList.contains('modal--show');
  
  if (!its_modal && !its_headerSearch && modal_is_show) {
    toggleModal();
  }
});

  /* headerLogin.addEventListener('click', function(event) {
    event.stopImmediatePropagation();

    toggleModal();
  });

  document.addEventListener('click', function(event) {
    var target = event.target;
    console.log(event.target)
    var its_modal = target == modal || modal.contains(target);
    var its_headerLogin = target == headerLogin;
    var modal_is_show = modal.classList.contains('modal--show');
    
    if (!its_modal && !its_headerLogin && modal_is_show) {
      toggleModal();
    }
  }); */

/* 
headerSearch.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(event);
  popSearch.classList.toggle("modal-search--show");
  setTimeout(function () {
    document.addEventListener("click", bodyClick);
  },50)
}); */

/* function bodyClick(event) {
    if ((event.target !== headerSearch) || (event.target !== popSearch)) {
      console.log(event.target);
      popSearch.classList.remove("modal-search--show");
  }
  document.removeEventListener("click", bodyClick)
} */

/* $headerSearch.on('click', function (e) {
  e.preventDefault();
  $popSearch.addClass('modal-search--show');
  console.log('1');
  setTimeout(() => {
    $(document).one('click', $headerSearch, function () {
      console.log('2');
      $popSearch.removeClass('modal-search--show');
    })
  }, 50);
}) */

// headerSearch.addEventListener("click", function (event) {
//   event.preventDefault();
//   popSearch.classList.remove("modal-search--show");
// });