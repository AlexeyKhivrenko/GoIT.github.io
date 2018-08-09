$(function() {

  // --------------------------- CONTACTS CELL-PHONE --------------------------------------//

  $('.main-phone__img').mouseover( function() {
    $('.main-phone__hover').show(300);
  });

  $('.main-phone__img').on( 'click', function() {
    $('.main-phone__hover').show(300);
  });

  $('.main-phone__hover').mouseleave(function() {
    $(this).hide();
  });

  $('body').on('click', function() {
    $('.main-phone__hover').hide();
  });

  $('input, textarea').focus(function(){
    $(this).data('placeholder', $(this).attr('placeholder'));
    $(this).attr('placeholder','');
  });
  $('input, textarea').blur(function(){
    $(this).attr('placeholder', $(this).data('placeholder'));
  });



// -------------------------------- MENU ------------------------------------------------ //

  $('.main-menu__item').on('click', function() {
    $(this).siblings().removeClass('hover');
    $(this).siblings().find('a').removeClass('hover__link');
  });

  $('.main-menu__sport-meal').on('click', function() {
    $('.clothes-wrapper, .accessories-wrapper').hide(300);
  });

  $('.main-menu__clothes').on('click', function() {
    $('.sport-meal-wrapper, .accessories-wrapper').hide(300);
  });

  $('.main-menu__accessories').on('click', function() {
    $('.sport-meal-wrapper, .clothes-wrapper').hide(300);
  });


  $('.main-menu__promotion, .main-menu__our-stores, .main-menu__our-producers, .main-menu__for-cliens').on('click', function() {
    $('.sport-meal-wrapper, .clothes-wrapper, .accessories-wrapper').hide(300);
  });



  $('.main-menu__item').mouseenter(function(e) {
    $(this).find('a').css('color', '#ff5e00');
  }).mouseleave( function (e) {
    $(this).find('a').css('color', '#fff');
  });

  $('.main-menu__item').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('hover');
    $(this).find('a').toggleClass('hover__link');
  });



  $('.main-menu__sport-meal').on('click', function(e) {
    $('.sport-meal-wrapper').toggle(300);
  });

  $('.main-menu__clothes').on('click', function(e) {
    $('.clothes-wrapper').toggle(300);
  });

  $('.main-menu__accessories').on('click', function(e) {
    $('.accessories-wrapper').toggle(300);
  });

  $(window).click(function() {
    $('.main-menu__item').removeClass('hover');
    $('.main-menu__item').find('a').removeClass('hover__link');
    $('.sport-meal-wrapper, .clothes-wrapper, .accessories-wrapper').hide(300);
  });

  $('.main-menu__item').click(function(event) {
      event.stopPropagation();
  });



  // ------------------------------------SLIDER-TOP --------------------------------------------//

  $( '.top-slider-wrap').sliderPro({
    width: 975,
    height: 384,
    thumbnailWidth: 210,
    thumbnailHeight: 87,
    arrows: true,
    fadeArrows: false,
    autoplay: false,
    thumbnailPointer: true,
    thumbnailsPosition: 'right'
  });




  // ------------------------------------------ PRODUCERS SLIDER ---------------------------- //

  $('.producers-slider').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
          breakpoint: 992,
          variableWidth: true,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 768,
          variableWidth: true,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          variableWidth: true,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }]
  });

// --------------------------------------- destibyutor ------------------------------------------//


    var $fotoramaDiv = $('.fotorama').fotorama();
    var fotorama = $fotoramaDiv.data('fotorama');

    if (window.matchMedia("(min-width: 768px)").matches) {
      $('.fotorama').on('fotorama:load',
        function (e, fotorama, extra) {
        fotorama.setOptions({nav: "thumbs"});
      });
    } else {
      $('.fotorama').on('fotorama:load',
        function (e, fotorama, extra) {
        fotorama.setOptions({nav: "false"});
      });
    }




// ----------------------------------- NEWS SLIDER ----------------------------------------- //

$('.news-slider').slick({
  infinite: true,
  arrows: true,
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
      {
        breakpoint: 1060,
        variableWidth: true,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 992,
        variableWidth: true,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });


$('.hidden-menu__list').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('hidden-menu__active');
  $('.main-menu__list').toggle('400');
  if ($('.hidden-menu__list').hasClass('hidden-menu__active')) {
    $('.main-menu__sport-meal, .main-menu__clothes, .main-menu__accessories, .main-menu__item').off();
  }


})





});
