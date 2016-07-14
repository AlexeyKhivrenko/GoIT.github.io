var wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.appendChild(wrapper);

var header = document.createElement('div');
header.className = 'header';
wrapper.appendChild(header);

var tittle = document.createElement('span');
tittle.className = 'tittle';
tittle.innerHTML = 'Тест по программированию';
header.appendChild(tittle);

var main = document.createElement('div');
main.className = 'main';
wrapper.appendChild(main);

var ol = document.createElement('ol');
main.appendChild(ol);

var qwestFirst = document.createElement('li');
qwestFirst.innerHTML = 'Вопрос №1';
ol.appendChild(qwestFirst);

var qwestFirstAnswerUL = document.createElement('ul');
qwestFirst.appendChild(qwestFirstAnswerUL);

var qwestFirstAnswerLI = document.createElement('li');
qwestFirstAnswerUL.appendChild(qwestFirstAnswerLI);

var answFirst = document.createElement('INPUT');
answFirst.setAttribute('type', 'checkbox');
qwestFirstAnswerLI.appendChild(answFirst);

var answFirstLabel = document.createElement('label');
answFirstLabel.innerHTML = 'Вариант ответа №1';
qwestFirstAnswerLI.appendChild(answFirstLabel);

var qwestSecondAnswerLI = qwestFirstAnswerLI.cloneNode(true);
qwestFirstAnswerUL.appendChild(qwestSecondAnswerLI);
cloneNode(answFirstLabel).innerHTML = 'Вариант ответа №2';

// var footer = document.createElement('div');
// footer.className = 'footer';
// wrapper.appendChild(footer);
