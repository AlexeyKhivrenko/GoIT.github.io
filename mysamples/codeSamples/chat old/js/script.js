$(function() {

    var chatHistory;


    if (localStorage.getItem('myKey')) {

      $('.wrapFieldChatUser').html("");
      $('.wrapFieldChatUser').html(localStorage.getItem('myKey'));

    }

    var time = new Date();
    var chatTime = time.getFullYear() + "/" + time.getMonth() + "/" + time.getDate() + " " + time.getHours() + ":" + time.getMinutes();

    $('.btn1').on('click', function() {

      var textInFieldUser1 = $('.fieldForInputTextUser1').val();

      var addDateUser = $('<p class="dateOfUserMessage"></p>').html(chatTime);
      addDateUser.appendTo('.wrapFieldChatUser');

      var user1 = $("<p>").addClass('user1Message');
      user1.html("User1: " + textInFieldUser1).appendTo('.wrapFieldChatUser');

      chatHistory = $('.wrapFieldChatUser').html();
      localStorage.setItem('myKey', chatHistory);
      console.log(localStorage.getItem('myKey'));
    });

    $('.btn2').on('click', function() {

        var textInFieldUser1 = $('.fieldForInputTextUser2').val();

        var addDateUser = $('<p class="dateOfUserMessage"></p>').html(chatTime);
        addDateUser.appendTo('.wrapFieldChatUser');

        var user1 = $("<p>").addClass('user2Message');
        user1.html("User2: " + textInFieldUser1).appendTo('.wrapFieldChatUser');

        chatHistory = $('.wrapFieldChatUser').html();
        localStorage.setItem('myKey', chatHistory);
        console.log(localStorage.getItem('myKey'));
    });

//     var foo = localStorage.getItem("bar");
// // ...
// localStorage.setItem("bar", foo);



});
