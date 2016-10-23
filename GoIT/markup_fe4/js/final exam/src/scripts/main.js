$(function() {

  $('.slider').glide();

    //masonry plagin


    $('.grid-sm-size').masonry({
        columnWidth: 300,
        itemSelector: '.grid-small',
        fitWidth: true,
        gutter: 0,
    });

    $('.grid-tablet-size').masonry({
        columnWidth: 236,
        itemSelector: '.grid-tablet',
        gutter: 20,
        fitWidth: true
    }, {
        columnWidth: 492,
        itemSelector: '.grid-tablet--width2'
    });

    $('.grid-lg-size').masonry({
        columnWidth: 300,
        itemSelector: '.grid-lg',
        gutter: 20,
        fitWidth: true
    }, {
        columnWidth: 620,
        itemSelector: '.grid-lg--width2'
    });

    $('.grid-received-images').masonry({
        itemSelector: '.received-images',
        fitWidth: true
    });

    //content modifacation

    $('.header-middle__btn').on('click', function(e) {
        e.preventDefault();
        var top = $('.partners-search').offset().top;

        $('body, html').animate({
            scrollTop: top
        }, 1100);
    });

    //function which help to do shuffle with arrays
    function shuffle(array) {
        var arrayLength = array.length;
        var newArray = [];
        for (var i = 0; i < arrayLength; i++) {
            var check = array[Math.floor(Math.random(arrayLength) * arrayLength)];
            if (!newArray.includes(check)) {
                newArray[i] = check;
            } else {
                i--;
            }
        }
        return newArray;
    }

    $('.partners__btn').on('click', function(e) {
        e.preventDefault();

        var partners = $('.partner').show().get();
        var newPartners = $.makeArray(shuffle(partners));

        $('.partners__box').empty();
        $('.partners__box').html(newPartners);
        if ($('.partner').length >= 4) {
            $('.partner').slice(3, ($('.partner').length - 1));
        } //shuffle and show only 4 elemets

    });
    // When in partners__box "partner" elements more then 4, show only 4 elements, anothers hides
    if ($('.partner').length >= 4) {
        $('.partner').slice(3, ($('.partner').length - 1)).hide();
    }

    $('form').on('submit', function(e) {
        e.preventDefault();
        $('.grid-received-images').remove();

        var receivedImg = [];
        var search = $('.partners-search__input').val();
        var amount = 20; // 7 - amount of pictures

        $.getJSON("http://api.pixplorer.co.uk/image?word=" + search + "&amount=" + amount + "&size=tb",
            function(data) {

                      console.log(data);
                      $('.activities__options').hide();

                      $('<div class="grid-received-images"</div>').css({
                        'margin': '0 auto'
                      }).insertBefore('.partners-search');

                for (var key in data.images) {

                    receivedImg[key] = data.images[key].imageurl;
                    $('<div class="received-imgs-wrap"><img src="' + data.images[key].imageurl + '"/><p class="received-imgs-text">' + search + '</p></div>').addClass('received-images').css({
                      'vertical-align': 'top',
                      'margin': '20px',
                      'display': 'inline-block'
                    }).appendTo('.grid-received-images');


                }

              });

    });

});
