$(document).ready(function() {
    $(".top-menu").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1100);
    });

    $('.reviews').owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 10, //Отступ от картино если выводите больше 1
        nav: false, //Отключил навигацию
        autoplay: true, //Автозапуск слайдера
        smartSpeed: 100000, //Время движения слайда
        autoplayTimeout: 200000, //Время смены слайда
        responsive: { //Адаптация в зависимости от разрешения экрана
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1366: {
                items: 3
            }
        }
    });

    $('#gallery').click(function () {
        $('#myModal').modal({
            show: true
        });
        $('#myModal').on('shown.bs.modal', function () {
          $('.slider').owlCarousel({
              loop: true, //Зацикливаем слайдер
              margin: 10, //Отступ от картино если выводите больше 1
              nav: true, //Отключил навигацию
              autoplay: false, //Автозапуск слайдера
              smartSpeed: 1000, //Время движения слайда
              autoplayTimeout: 3000, //Время смены слайда
              responsive: { //Адаптация в зависимости от разрешения экрана
                  0: {
                      items: 1
                  },
              }
          });
        });
    });

});
