$(document).ready(function () {
  $('.intro-slider__slides').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $('.intro-slider__slides').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    const $slider = $(this);
    const $nextSlide = $($slider.find('.slick-slide')[nextSlide]);
    const bgColor = $nextSlide.data('bg-color');
    
    $('body').css('background-color', bgColor);
  });
  
  /* const headerSearch = document.querySelector('.user-block__list .search');
  const headerLogin = document.querySelector('.user-block .login'); */
  const headerLink = document.querySelector('.js-open-modal');
  
  /* var getDataAtr = function getDataAtr() {
  
  } */

/*   for (let index = 0; index < headerLink.length; index++) {
    const i = index;
    const currentLink = headerLink[i];
    console.log(currentLink);
    var targetLink = currentLink.getAttribute('data-target-id');
    var curTargetLink = document.getElementById(targetLink);
    
    currentLink.addEventListener('click', function (event) {
      event.stopPropagation();
      console.log(event.target);
      console.log(curTargetLink);
      curTargetLink.classList.toggle('modal--show');
    }); 
  }; */

  $('.js-open-modal').each(function (i, el) {
    const $el = $(el);
    const target = $el.data('target-id');
    const $target = $(`#${target}`);

    $el.on('click', function () {
      console.log('link with target ' + target + ' clicked');
      $target.toggleClass('modal--show');


      $(document).click(function (e) {
        const modal = $('.modal--show');
        console.log(modal);
        if (!modal.is(e.target) 
        && modal.has(e.target).length === 0) {
          modal.removeClass('modal--show');
        }
      })
    });
    // var targetLink = el.getAttribute('data-target-id');
    // var curTargetLink = document.getElementById(targetLink);

    // el.addEventListener('click', function (event) {
    //   event.stopPropagation();
    //   curTargetLink.classList.toggle('modal--show');
    // }); 
    // document.addEventListener
  })
  
  /* document.addEventListener('click', function(event) {
    var target = event.target;
    console.log(event.target);
    var its_modal = target == modal || modal.contains(target);
    var its_headerLink = target == headerLink;
    var modal_is_show = modal.classList.contains('modal--show');
    
    if (!its_modal && !its_headerLink && modal_is_show) {
      toggleModal();
    }
  }); */
  
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
});

