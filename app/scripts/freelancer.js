/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(function() {
    $('body').on('click', '.page-move a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 90
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.nav-item').click(function() {
    $('.navbar-toggle:visible').click();
});

$('#keelung-nightmarket').on('show.bs.modal', function() {
    console.log("modal show");
    setTimeout(nightmarketMap, 1000);
});

function nightmarketMap() {
    var mapOptions = {
        zoom: 16,
        scrollwheel: false,
        draggable: !("ontouchend" in document),
        center: new google.maps.LatLng(25.1321,121.7444304),
        styles: [{
            "stylers": [{
                "hue": "#1993af"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "lightness": 100
            }, {
                "visibility": "simplified"
            }]
        }]
    };

    var mapElement = document.getElementById('nightmarket-map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(25.128556, 121.742833),
        map: map,
        title: '基隆廟口'
    });

    var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(25.135122, 121.746055),
        map: map,
        title: '長榮桂冠酒店'
    });
}
