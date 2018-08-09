var wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.appendChild(wrapper);

var page = {
  title: 'Тест по программированию',
  qwestions: ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'],
  answers: [['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'], ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'], ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']],
  button: ['Проверить мои результаты'],

  inputTitle : function() {

    var titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    titleDiv.innerHTML = this.title;
    wrapper.appendChild(titleDiv);

  },

  inputQwestions : function() {

    var qwestionsInsideFunction = this.qwestions.length;

    var formInsideFunct = document.createElement('form');
    formInsideFunct.action = '#';
    wrapper.appendChild(formInsideFunct);

    var numberList = document.createElement('ol');
    formInsideFunct.appendChild(numberList);

    for (var i=0; i<qwestionsInsideFunction; i++) {

      var listItem = document.createElement('li');
      listItem.innerHTML = this.qwestions[i];
      numberList.appendChild(listItem);

      var ulInsideLi = document.createElement('ul');
      listItem.appendChild(ulInsideLi);

      var answersInsideFunction = this.answers.length;

      for (var j=0; j<answersInsideFunction; j++) {

        var liInsideUl = document.createElement('li');
        liInsideUl.innerHTML = this.answers[i][j];
        ulInsideLi.appendChild(liInsideUl);

        var checkboxes = document.createElement('input');
        checkboxes.type = 'checkbox';
        liInsideUl.insertBefore(checkboxes, liInsideUl.firstChild);

      }

    }
    var inputButton = document.createElement('input');
    inputButton.value = this.button;
    inputButton.type = 'button';
    formInsideFunct.appendChild(inputButton);
  }

};

page.inputTitle();
page.inputQwestions();
