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
		smartSpeed: 1000, //Время движения слайда
		autoplayTimeout: 4000, //Время смены слайда
		responsive: { //Адаптация в зависимости от разрешения экрана
			0: {
				items: 1,
				slideBy: 1
			},
			768: {
				items: 2,
				slideBy: 2
			},
			1366: {
				items: 3,
				slideBy: 3
			}
		}
	});

	$('#myModal').on('shown.bs.modal', function(event) {		$('.slider').owlCarousel({
			loop: true, //Зацикливаем слайдер
			margin: 10, //Отступ от картино если выводите больше 1
			nav: false, //Отключил навигацию
			autoplay: true, //Автозапуск слайдера
			smartSpeed: 1000, //Время движения слайда
			autoplayTimeout: 4000, //Время смены слайда
			responsive: { //Адаптация в зависимости от разрешения экрана
				0: {
					items: 1
				}
			},
			navText: [
	"<i class='icon-chevron-left icon-white'><</i>",
	"<i class='icon-chevron-right icon-white'>></i>"
	],
		});
	});
});
