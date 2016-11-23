

$(function() {


  /////////////////////////////////--SLIDER--///////////////////////////////////////////

  $('.main-lates__slider').slick({
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
});





  var slideLength = $('.slides li img').length;
  var heightOfSliderImgs = '';

  for (var i=0; i<slideLength; i++) {
    if (heightOfSliderImgs == false) {
      heightOfSliderImgs = $('.slides li img').eq(i).outerHeight();
    } else {

      if ( $('.slides li img').eq(i).outerHeight() > heightOfSliderImgs ) {
        heightOfSliderImgs = $('.slides li img').eq(i).outerHeight();
      }
    }

  }

  $('.main-lates__slider img').css('height', heightOfSliderImgs + 'px');


// ------------------------ PLACEHOLDER h-panel__search -------------------------------------

  $('.h-panel__search').focus(function(){
    $(this).data('placeholder', $(this).attr('placeholder'));
    $(this).attr('placeholder','');
  });
  $('.h-panel__search').blur(function(){
    $(this).attr('placeholder', $(this).data('placeholder'));
  });


// -------------------------------------------- FOLLOW US ICONS HOVER ---------------------------------------



  $('.f-follow-us__face').mouseover(function() {
    $(this).find('img').attr('src', 'img/h-face-f.png');
  });

  $('.f-follow-us__face').mouseout(function() {
    $(this).find('img').attr('src', 'img/face-f.png');
  });

  $('.f-follow-us__pint').mouseover(function() {
    $(this).find('img').attr('src', 'img/h-pint-f.png');
  });

  $('.f-follow-us__pint').mouseout(function() {
    $(this).find('img').attr('src', 'img/pint-f.png');
  });

  $('.f-follow-us__twit').mouseover(function() {
    $(this).find('img').attr('src', 'img/h-twit-f.png');
  });

  $('.f-follow-us__twit').mouseout(function() {
    $(this).find('img').attr('src', 'img/twit-f.png');
  });

  $('.f-follow-us__inst').mouseover(function() {
    $(this).find('img').attr('src', 'img/h-insta-f.png');
  });

  $('.f-follow-us__inst').mouseout(function() {
    $(this).find('img').attr('src', 'img/insta-f.png');
  });


  // ----------------------------------- EMAIL ADRESS ------------------------------------


  $('.f-newsletter__srch').focus(function(){
    $(this).data('placeholder', $(this).attr('placeholder'));
    $(this).attr('placeholder','richard.jarvis@themediaflow.com');
  });
  $('.f-newsletter__srch').blur(function(){
    $(this).attr('placeholder', $(this).data('placeholder'));
  });


// -------------------------------------- MOBILE ------------------------------------

  if (window.matchMedia("(max-width: 768px)").matches) {
    // console.log('123');
    // debugger
    // -------------------------------- CHANGE ELEMENETS POSITION ------------------------------------
    var menuList = $('.menu__list');
    var signIn = $('.h-panel__sign');
    var registr = $('.h-panel__reg');
    var account = $('.h-panel__acc-link');
    var phone = $('.h-contacts__phone');

    $('.menu__list').hide();
    $('header').empty();
    $('nav').remove();
    $('header').append(menuList);
    $('.menu__list').append('<li class="menu__item"><p class="sign-wrap"></p></li>');
    $('.sign-wrap').append(signIn, registr);
    $('.h-panel__sign').text('SIGN IN /')
    $('.menu__list').append('<li class="menu__item"><p class="acc-wrap"></p></li>');
    $('.acc-wrap').append(account);
    $('.menu__list').append('<li class="menu__item"><p class="phone-wrap"></p></li>');
    $('.phone-wrap').append(phone);


  // ------------------------------------CHANGE BURGER PICTURE -----------------------------------
    $('.burger__link').on('click', function(e) {
      e.preventDefault();
      if($('.menu__list').css('display') == 'block') {
        $(this).children('img').attr('src', 'img/burger.png');
        $('.menu__list').slideToggle();
      } else if ($('.menu__list').css('display') == 'none') {
        $(this).children('img').attr('src', 'img/x.png');
        $('.menu__list').slideToggle();
      }

    })

    // ------------------------------------- ADD PLUS/MINUS in BURGER ----------------------------
    $('.menu__link, .f-information__title, .f-customer-service__title').append('<span>+</span>');
    $('.menu__link, f-information__title, .f-customer-service__title').on('click', function(e) {
      e.preventDefault();
      if($(this).siblings('ul').css('display') == 'none') {
        $(this).children('span').text('–');
      } else {
        $(this).children('span').text('+');
      }
    });

  // -----------------------------------------------DROP_DOWN MENU-------------------------------------------

    $('.menu__link').on('click', function(e) {
      e.preventDefault();

      if ($(this).parent().siblings('li').children('a').hasClass('menu__link-active')) {

        $(this).parent().siblings('li').children('a').removeClass('menu__link-active');
        $(this).parent().siblings('li').children('ul').slideUp(100);
      }

        $(this).toggleClass('menu__link-active');
        $(this).siblings('ul').slideToggle();


      e.stopPropagation();

    });

    // --------------------------------------- MAIN_LATEST CHANGES ------------------------------------------

    $('.main-lates__title').after($('.main-lates__text'));

    $('.main-difference').after($('.main-lates__rate'));

    $('.main-lates__rate a').text("0% & long term Finance options available");

    var phone = $('.f-contacts__phone');
    $('footer').append(phone);
    $('.f-contacts__phone').prepend('<span></span>');

    $('.f-contacts__phone').after($('.f-newsletter'));
    $('.f-newsletter').after($('.f-information'));
    $('.f-information').after($('.f-customer-service'));
    $('.f-customer-service').after($('.f-follow-us'));
    $('.f-follow-us').after($('.f-created__link'));
    $('.f-column').remove();
    $('.f-follow-us__text').remove();

    var pInfoTitle = $('.f-information__title').html();
    $('.f-information__title').after('<a href="#" class="f-information__title">');
    $('a.f-information__title').html(pInfoTitle);
    $('p.f-information__title').remove();

    var pCustTitle = $('.f-customer-service__title').html();
    $('.f-customer-service__title').after('<a href="#" class="f-customer-service__title">');
    $('a.f-customer-service__title').html(pCustTitle);
    $('p.f-customer-service__title').remove();

    $('.f-information__title, .f-customer-service__title').on('click', function(e) {
      e.preventDefault();
      $(this).siblings('ul').slideToggle(400);
    });


  } else {
      $('.header-mobile').remove();
  }



});
