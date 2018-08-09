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

$('.tooltip div').append('<p class="help"></p>');


$('input').hover(function() {
  $(this).siblings('p').animate({opacity: "show", top:'-10px', left: 260}, "slow");
  var hoverText = $(this).attr('title');
  $(this).siblings('p').text(hoverText);
}, function() {
  $(this).siblings('p').animate({opacity: "hide", top:'-10px', left: 260}, "fast");
});

$('.btn').on('click', function() {
  var firstNameText = $('#firstname').attr('title');
  $('#firstname').siblings('p').text(firstNameText).animate({opacity: "show", top:'-10px', left: 260}, "slow");
  var lastNameText = $('#lastname').attr('title');
  $('#lastname').siblings('p').text(lastNameText).animate({opacity: "show", top:'-10px', left: 260}, "slow");
  var addressText = $('#address').attr('title');
  $('#address').siblings('p').text(addressText).animate({opacity: "show", top:'-10px', left: 260}, "slow");
});


});
