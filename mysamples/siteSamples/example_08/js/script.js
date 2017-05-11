/*---Google Map---*/

function initialize() {

    var styleArray = [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#212121"
                }
            ]
        },
        {
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#212121"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#bdbdbd"
                }
            ]
        },
        {
            "featureType": "poi",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#181818"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#1b1b1b"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#1a0b14"
                },
                {
                    "weight": 3.5
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#291344"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#373737"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "weight": 1
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#3c3c3c"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#4e4e4e"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#3d3d3d"
                }
            ]
        }
    ]

    var latLng = new google.maps.LatLng(38.708583262467076, -77.02309018402672);

    var mapOptions = {
        disableDefaultUI: true,
        zoom: 15,
        center: new google.maps.LatLng(38.707283262467076, -77.01009018402672),
        styles: styleArray,
        scrollwheel: false
    };

    var map = new google.maps.Map(document.getElementById('map'),
        mapOptions);

    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: ' ',
        label: {
            fontFamily: 'Fontawesome',
            text: '\uf041',
            fontSize: "3.6em",
            color: '#ff6e40'
        }
    });

    marker.setMap(map);


    google.maps.event.addListener(map, 'click', function(event){
        this.setOptions({scrollwheel:true});
    });
}

$(function() {

    $('.img-wrap').on('mouseenter', function() {
        $(this).find($('.work-hover')).show();
    }).on('mouseleave', function() {
        $(this).find($('.work-hover')).hide();
    })

    var mq = window.matchMedia( "(min-width: 768px)" );

    $('.menu a').on('click', function(e) {
        var $navHeight = $('.header-content').outerHeight(true);
        e.preventDefault();
        if (!mq.matches) {
            $('.menu-wrap').hide();
        }
        var selector = $(this).attr('href');
        var top = $(selector).offset().top + 2 - $navHeight;

        $('body,html').animate({
            scrollTop: top
        }, 1100);

    });

    $('.burger').on('click', function() {
        $('.menu-wrap').slideToggle(400);
    })

    /*---Bottom arrow back top---*/

    var scrollTrigger = 100,
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.back-top').addClass('show');
            } else {
                $('.back-top').removeClass('show');
            }
        };
    backToTop();

    $(window).on('scroll', function () {
        backToTop();
    });

    $('.back-top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    /*---Slider---*/

    $('.preview').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: false,
        cssEase: 'linear',
        nextArrow: '<i class="fa fa-chevron-right next-btn"></i>',
        prevArrow: '<i class="fa fa-chevron-left prev-btn"></i>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            },
        ]
    });

});
