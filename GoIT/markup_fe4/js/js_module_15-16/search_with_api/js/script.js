$(function() {

    $("form").on("submit", function(e) {

        var search = $(".search").val();

        $.getJSON("https://www.googleapis.com/customsearch/v1?key=AIzaSyBFBGvioil72TMHARrEgqbu5boYRF5MZmw&cx=000978185509461210800:vyaidmyxf6i&q=" + search + '"',
            function(data) {
                if ($('.site')) {
                    $('.site').remove();
                }
                $('<div class="results_quantity"></div>').html('Результатов: примерно ' + data.searchInformation.formattedTotalResults + '( ' + data.searchInformation.formattedSearchTime + ' сек. )').appendTo('.content');
                for (var i = 0; i < data.items.length; i++) {

                    var site = $("<div class='site'>").css('padding', '20px 10px');
                    site.appendTo($('.content'));

                    var title = $("<h3 class='title'>");
                    title.appendTo(site);

                    $('<a>').css('text-decoration', 'none').attr({
                        'href': 'http://' + data.items[i].displayLink,
                        'target': '_blank'
                    }).html(data.items[i].title).appendTo(title);

                    $('<p>').addClass('address').css({
                        'font-family': '14px',
                        'color': '#009900'
                    }).html(data.items[i].displayLink).appendTo(site);
                    var text = $('<p>').addClass('text').css({
                        'font-family': '12px',
                        'color': '#545454'
                    });

                    text.appendTo(site);

                    $('<span class="text">' + data.items[i].htmlSnippet + '</span>').appendTo(text);

                }
            });

    });

});
