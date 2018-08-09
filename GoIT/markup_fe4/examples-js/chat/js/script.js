$(function() {
    if (localStorage.getItem('chatHistory')) {

        $('.wrapFieldChatUser1').html(localStorage.getItem('chatHistory'));

    }


    var myMes = 1;
    var somMes = 1;

    var time = new Date();
    var chatTime = time.getFullYear() + "/" + time.getMonth() + "/" + time.getDate() + " " + time.getHours() + ":" + time.getMinutes();

    $('.btn1').on('click', function() {


        var textInFieldUser2 = $('.fieldForInputTextUser1').val();

        var yourMessage = $("<p>").addClass('yourMessage' + myMes);
        var somebodysMessage = $("<p>").addClass('somebodysMessage' + somMes);
        var addDateUser = $('<p class="dateOfMainUserMessage"></p>').html(chatTime);
        var addtextMainUser = $('<p class="mainUserMessage"></p>');

        var addDateUser2 = $('<p class="dateUser2messages"></p>').html(chatTime);
        var addTextFieldUser2 = $('<p class="user2messages"></p>');

        yourMessage.appendTo('.wrapFieldChatUser1');
        somebodysMessage.appendTo('.wrapFieldChatUser2');
        addDateUser.appendTo('.yourMessage' + myMes);
        addtextMainUser.html('You: ' + textInFieldUser2).appendTo('.yourMessage' + myMes);

        addDateUser2.appendTo('.somebodysMessage' + somMes);
        addTextFieldUser2.html('Somebody: ' + textInFieldUser2).appendTo('.somebodysMessage' + somMes);

        myMes++;
        somMes++;
        textInFieldUser2 = $('.fieldForInputTextUser1').val("");

        var chatHistory = $('.wrapFieldChatUser1').html();
        localStorage.setItem('chatHistory', chatHistory);
    });

    $('.btn2').on('click', function() {


        var textInFieldUser1 = $('.fieldForInputTextUser2').val();

        var yourMessage = $("<p>").addClass('yourMessage' + myMes);
        var somebodysMessage = $("<p>").addClass('somebodysMessage' + somMes);

        var addDateUser = $('<p class="dateOfMainUserMessage"></p>').html(chatTime);
        var addtextMainUser = $('<p class="mainUserMessage"></p>');

        var addDateUser2 = $('<p class="dateUser2messages"></p>').html(chatTime);
        var addTextFieldUser2 = $('<p class="user2messages"></p>');

        yourMessage.appendTo('.wrapFieldChatUser2');
        somebodysMessage.appendTo('.wrapFieldChatUser1');

        addDateUser.appendTo('.yourMessage' + myMes);
        addtextMainUser.html('You: ' + textInFieldUser1).appendTo('.yourMessage' + somMes);

        addDateUser2.appendTo('.somebodysMessage' + somMes);
        addTextFieldUser2.html('Somebody: ' + textInFieldUser1).appendTo('.somebodysMessage' + somMes);

        myMes++;
        somMes++;
        textInFieldUser1 = $('.fieldForInputTextUser2').val("");

    });



});
