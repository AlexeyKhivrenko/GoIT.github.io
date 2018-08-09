$(function() {
"use strict";

var page = $('#page').html();

var test = {
    question1: {
        'title': 'What is HTML?',
        'answers': [
            'Hypertext Markup Language',
            'Objective Programming Language',
            'How To Make Landingpage'
        ],
        'check': 0
    },
    question2: {
        'title': 'What is CSS?',
        'answers': [
            'Censor Sold Solar System',
            'Central Sugar Station',
            'Cascading Style Sheets'
        ],
        'check': 2
    },
    question3: {
        'title': 'What is JavaScript?',
        'answers': [
            'Analog of Java with more functions',
            'High-level interpreted programming language',
            'Language of Javas in Star Wars'
        ],
        'check': 1
    }
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
var modalInside = $('<div>').addClass('modalInside').appendTo('.modal');

function modalOpen() {
    if (count == 1) {
        point = ' point!';
    } else {
        point = ' points!';
    }
    modalWrap.show();
    modalInside.html('You got ' + count + point);
    modal.show();
    modalInside.show();
}

function modalCLose() {
    count = 0;
    modalWrap.hide();
    modal.hide();
    modalInside.hide();
}

$('.btn').on('click', function(e) {
    e.preventDefault(e);
    modalCLose();

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            searchOfQuestions = 'question' + (i + 1) + '_' + (j + 1);
            if ($('input#' + searchOfQuestions).is(":checked")) {
                text = $("label[for='" + searchOfQuestions + "']").html();

                if (text == test.question1.answers[test.question1.check]) {
                    count++;
                }
                if (text == test.question2.answers[test.question2.check]) {
                    count++;
                }
                if (text == test.question3.answers[test.question3.check]) {
                    count++;
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
