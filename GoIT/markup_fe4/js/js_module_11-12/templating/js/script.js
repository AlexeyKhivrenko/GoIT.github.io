$(function() {
	var template = $('#page').html();

	var information = {
    person : {
      name : 'Хивренко Алексей Валерьевич',
      photo : '<img src="http://cs9445.userapi.com/u10326294/107077060/x_c914df6e.jpg" alt="loading.." />',
      speciality : 'Мастер делового администрирования (MBA)'
    },
    titleAnswers : ['Хочу учить фронтенд, потому что:', 'Мой контактный телефон:', 'Мой профиль вк:', 'Мой фидбек:'],
    answersFirst : ['интересно', 'востребованная проффесия', 'хорошая З\\П'],
    links : ['<a class="tel" href="tel:+380507347964">+380507347964</a>', '          <a class="link" href="https://vk.com/alexeykhivrenko" target="_blank">https://vk.com/alexeykhivrenko</a>'],
    feedback : 'Всем добра'

	};

	var content = tmpl(template, information);

	$('body').append(content);

});
