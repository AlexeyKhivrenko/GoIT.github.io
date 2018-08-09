$(function() {
  tab1 = $('.tab1');
  tab2 = $('.tab2');
  tab3 = $('.tab3');
  boxTab1 = $('.boxTab1');
  boxTab2 = $('.boxTab2');
  boxTab3 = $('.boxTab3');


  $('.tabs li').on('click', function() {
    if ($(this).hasClass('active')) {
      return false;
    }
    $(this).toggleClass('active');
  });

  function checkTab1() {
      if (tab1.hasClass('active')) {
        tab1.removeClass('active');
        boxTab1.hide();
      }
  }

  function checkTab2() {
      if (tab2.hasClass('active')) {
        tab2.removeClass('active');
        boxTab2.hide();
      }
  }

  function checkTab3() {
      if (tab3.hasClass('active')) {
        tab3.removeClass('active');
        boxTab3.hide();
      }
  }

  tab1.on('click', function() {
    checkTab2();
    checkTab3();
    boxTab1.show();
  });

  tab2.on('click', function() {
    checkTab1();
    checkTab3();
    boxTab2.show();
  });

  tab3.on('click', function() {
    checkTab1();
    checkTab2();
    boxTab3.show();
  });

  $("input[name='firstName']").on('mouseover', function() {
    $('.helpField1').show();
  });
  $("input[name='firstName']").on('mouseleave', function() {
    $('.helpField1').hide();
  });
  $("input[name='lastName']").on('mouseover', function() {
    $('.helpField2').show();
  });
  $("input[name='lastName']").on('mouseleave', function() {
    $('.helpField2').hide();
  });
  $("input[name='adress']").on('mouseover', function() {
    $('.helpField3').show();
  });
  $("input[name='adress']").on('mouseleave', function() {
    $('.helpField3').hide();
  });

  $('.btn').on('click', function() {
    $('.help').show();
  });


});
