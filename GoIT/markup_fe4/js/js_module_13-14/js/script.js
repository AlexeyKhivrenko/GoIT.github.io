$(function() {
    "use strict";

    var page = $('#page').html();

    var test = {
        title: 'Тест',
        questions: ['Какой из этих предметов является инструментом симфонического оркестра?', 'Какого из этих стилей музыки не существует?', 'Прием игры на гитаре, при котором палец одновременно зажимает все струны?'],
        options: [
            ['Ножи', 'Вилки', 'Тарелки', 'Стаканы'],
            ['Дум', 'Блэк', 'Пилон', 'Джангл'],
            ['Диез', 'Бемоль', 'Мажор', 'Баррэ']
        ],
        answers: ['Тарелки', 'Пилон', 'Баррэ'],
        button: ['Проверить мои результаты']
    };

    var localTest = JSON.stringify(test);

    localStorage.setItem("easyTest", localTest);
    localTest = localStorage.getItem("easyTest");

    var testParse = JSON.parse(localTest);

    var content = $('form');
    content.html(tmpl(page, test));

    var searchOfQuestions;
    var text;
    var point;
    var count = 0;
    var modalWrap = $('<div>').addClass('modalWrap').appendTo('body');
    var modal = $('<div>').addClass('modal').appendTo('.modalWrap');


    function modalOpen() {

        if (count == 1) {
            point = ' point!';
        } else {
            point = ' points!';
        }
        $('.modalWrap').show();
        var pointCount = $('<p>').addClass('points').html('You have earned ' + count + point).appendTo('.modalInside');
        $('.modal').show();
        $('.modalInside').show();

    }

    function modalCLose() {
      if($('.modalInside')) {
          $('div.modalInside').remove();
      }
      count = 0;
      $('.modalWrap').hide();
      $('.modal').hide();
      $('.modalInside').hide();
    }

    $('.btn').on('click', function(e) {
        e.preventDefault(e);
        modalCLose();
        var modalInside = $('<div>').addClass('modalInside').appendTo('.modal');

        for (var i = 0; i < test.questions.length; i++) {

            var checkAnswers = $('<p>').addClass('answers').appendTo('.modalInside');

            for (var j = 0; j < test.options[i].length; j++) {
                searchOfQuestions = 'question_' + (i + 1) + '_' + (j + 1);

                if ($('input#' + searchOfQuestions).is(":checked")) {
                    text = $("label[for='" + searchOfQuestions + "']").html();
                    checkAnswers.html('Вопрос №' + (i + 1) + '<span class="answer'  + (i + 1) + 'Color">' + ' Answer: ' + text + '</span>');
                    if (text == test.answers[i]) {
                        $(".answer" + (i + 1) + "Color").css('color', 'green');
                        count++;
                    }
                    if (text != test.answers[i]) {
                      $(".answer" + (i + 1) + "Color").css('color', 'red');
                    }
                }

            }
        }
        modalOpen();
    });

    $('.modalWrap').on('click', function(e) {
      if ($('input:checked')) {
        $("input:checked").removeAttr('checked');
      }
      modalCLose();
    });

});
