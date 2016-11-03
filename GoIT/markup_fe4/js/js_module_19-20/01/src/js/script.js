$(function() {

    var $navHeight = $('.navigation').outerHeight(true);
    var $headerHeight = $('header').outerHeight(true);

    $('<div class="hidden-box"></div>').insertBefore('.navigation').css('height', $navHeight).hide();

    $(window).on('scroll', function() {
        var $scrollTop = $(this).scrollTop();
        if ($scrollTop >= ($headerHeight)) {
            $('.navigation').addClass('fixed');
            $('.navigation').css('background-color', '#2a2d32');
            $('.nav-menu__item:first-child').css('border-left', '1px solid black');
            $('.hidden-box').show();
        } else {
            $('.navigation').removeClass('fixed');
            $('.navigation').css('background-color', '#fff');
            $('.nav-menu__item:first-child').css({
                'border-left': '0'
            });
            $('.hidden-box').hide();
        }


        if ($scrollTop <= $('header').position().top + $navHeight + $headerHeight) {
          $('.nav-menu__item:first-child a').css('background', '#248cec');
        } else {
          $('.nav-menu__item:first-child a').css('background', '#2a2d32');
        }

        if (($scrollTop >= $('.slider').position().top) && ($scrollTop < Math.floor($('.services').position().top - $navHeight))) {
          $('.nav-menu__item:nth-child(2) a').css('background', '#248cec');
        } else {
          $('.nav-menu__item:nth-child(2) a').css('background', '#2a2d32');
        }

        if (($scrollTop >= Math.floor($('.services').position().top - $navHeight)) && ($scrollTop < Math.floor($('.news').position().top - $navHeight))) {
          $('.nav-menu__item:nth-child(3) a').css('background', '#248cec');
        } else {
          $('.nav-menu__item:nth-child(3) a').css('background', '#2a2d32');
        }

        if (($scrollTop >= Math.floor($('.news').position().top - $navHeight)) && ($scrollTop < $('.partners').position().top)) {
          $('.nav-menu__item:nth-child(4) a').css('background', '#248cec');
        } else {
          $('.nav-menu__item:nth-child(4) a').css('background', '#2a2d32');
        }

    });


    $('.nav-menu a').on('click', function(e) {
        e.preventDefault();
        var selector = $(this).attr('href');
        var top = $(selector).offset().top - $navHeight;

        $('body,html').animate({
            scrollTop: top
        }, 1100);

    });

    $('.search').on('focus', function() {
        $(this).data('placeholder', $(this).attr('placeholder'));
        $(this).attr('placeholder', '');
    });
    $('input,textarea').blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });

    $(".slider").owlCarousel({

        slideSpeed: 1000,
        paginationSpeed: 1000,
        singleItem: true,
        autoPlay:true,
        autoplayTimeout:3000,

    });

    $('.features-box__more').on('click', function(e) {
        e.preventDefault();
        $(this).hide();
        $(this).siblings('.features-box__text').css({
            'height': 'auto',
            'overflow': 'visible'
        });
    });

    $('.accordion__panel').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('active-accordion-panel').siblings(".accordion-panel__contant").toggle();
    });

    $('#search').on('submit', function(e) {
      e.preventDefault();
      var searchText = $('.search').val();
      window.location.href = "http://web-answers.ru";
    });

});
