(function($) {

    $.fn.myCarousel = function(options) {
      var defaults = $.extend({ //defaults settings
        leftBtn : '.carousel-arrow-left',
        rightBtn : '.carousel-arrow-right',
        autoPlay: false, //true or false
        delay: 500
      }, options);
      console.log(options);

        var elementsList = $('.carousel-list');
        var leftBtn = $(defaults.leftBtn), rightBtn = $(defaults.rightBtn);

        var pixelsOffset = 205;
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        var minimumOffset = - ((elementsCount - 3) * pixelsOffset);
        var maximumOffset = 0;
        var prevent = 0;

        leftBtn.click(function(event) {
          event = prevent++;
          if (event == 1) {
              if (currentLeftValue != maximumOffset) {
                  currentLeftValue += 205;
                  elementsList.animate({
                      left: currentLeftValue + "px"
                  }, 500);
              }
              prevent = 0; //для предотвращения множестенного клика
              return false; //отмена повтороного всплывтия события
          }

        });

        rightBtn.click(function(event) {
          event = prevent++;
          if (event == 1) {
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= 205;
                elementsList.animate({
                    left: currentLeftValue + "px"
                }, 500);
            }
            prevent = 0;
            return false; //отмена повтороного всплывтия события
          }
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
