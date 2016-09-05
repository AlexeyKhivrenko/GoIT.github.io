$(function() {
    // Инициализация слайдера
    $('.jcarousel').jcarousel({
        // Базовые настройки скрипта пишутся здесь
    });
    // Инициализация прокрутки слайдера
    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });
    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
    // Автопрокрутка слайдера
    $('.jcarousel').jcarouselAutoscroll({
        interval: 3000,
        target: '+=1',
        autostart: true
    });

    $('.jcarousel')
    .on('jcarousel:reload jcarousel:create', function () {
        var carousel = $(this),
            width = carousel.innerWidth();

        if (width >= 900) {
            width = width / 3;
        } else if (width >= 350) {
            width = width / 2;
        }

        carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
    })
    .jcarousel({
        wrap: 'circular'
    });

    $('select').niceSelect();

    $('input').iCheck({
      checkboxClass: 'icheckbox_polaris',
      radioClass: 'iradio_polaris',
      increaseArea: '-10%' // optional
    });

    $('#test-check1').iCheck('destroy');

    // ---------------------------------------------------------
    // Slide Down Menu
    // добавить обработчик события hover
    $('nav ul li').hover(
        function() {
            $(this).find('ul:first').stop(true, true);
            $(this).find('ul:first').slideDown();
        },
        function() {
            $(this).find('ul:first').slideUp('fast');
        }
    );
    // всем элементам меню с вложенностью добавить символ &raquo;
    $('.topmenu li:has(ul)').find('a:first').append('&raquo;');

});
