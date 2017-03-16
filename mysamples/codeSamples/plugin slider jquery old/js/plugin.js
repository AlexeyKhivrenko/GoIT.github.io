(function($) {

    $.fn.myCarousel = function(options) {
        var defaults = $.extend({ //defaults settings
            leftBtn: '.carousel-arrow-left',
            rightBtn: '.carousel-arrow-right',
            autoPlay: false, //true or false
            delay: 1000
        }, options);

        var carouselList = $('.carousel-list');
        var pixelsOffset = $('.carousel-list').find('li').outerWidth();
        var elementsCount = carouselList.find('li').length;
        var leftBtn = $(defaults.leftBtn),
            rightBtn = $(defaults.rightBtn);

        var currentLeftValue = 0;
        var minimumOffset = - ((elementsCount - 3) * pixelsOffset);
        var maximumOffset = 0;

        leftBtn.on('click', function() {
                if (currentLeftValue != maximumOffset) {
                    currentLeftValue += pixelsOffset;
                    carouselList.animate({
                        left: currentLeftValue + "px"
                    }, 500);
                  } else {
                    carouselList.find('li').eq(-1).clone().prependTo($('.carousel-list')).css({'margin-left' : '-' + pixelsOffset + 'px'});
                    carouselList.find('li').eq(-1).remove();

                    carouselList.find('li').eq(0).animate({'margin-left': '0'}, 500);

                  }

                return false; //отмена повтороного всплывтия события
        });

        rightBtn.on('click', function() {
            if (currentLeftValue != minimumOffset) {
                    currentLeftValue -= pixelsOffset;
                    carouselList.animate({
                        left: currentLeftValue + "px"
                    }, 500);
            } else {
              carouselList.find('li').eq(0).clone().appendTo($('.carousel-list'));
              carouselList.find('li').eq(0).remove();

              carouselList.find('li').eq(0).css({'margin-left': pixelsOffset + 'px'});
              carouselList.find('li').animate({'margin-left': '0'}, 500);

            }
            return false; //отмена повтороного всплывтия события
        });

        function aPlay() {
            return rightBtn.click();
        }

        if (defaults.autoPlay) {
            var timeOfPlaying = setInterval(aPlay, defaults.delay);
        }

        return this;

    };
})(jQuery);
