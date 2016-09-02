$(function() {

  $('.tabs li').on('click', function(event) {
    if ($(this).hasClass('active')) {
      return false;
    }
    if ($('.tabs li').hasClass('active')) {
      $('.tabs li').removeClass('active');
    }
    $(this).toggleClass('active');
    var number = $(this).index();
    var numberOfTab = '.boxTab' + number;
    $('.boxTabs p').hide();
    $(numberOfTab).show();
  });




// ---------------------------------------------------------------------

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
