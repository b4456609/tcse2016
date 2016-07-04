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
    $('body').on('input propertychange', '.floating-label-form-group', function(e) {
        $(this).toggleClass('floating-label-form-group-with-value', !!$(e.target).val());
    }).on('focus', '.floating-label-form-group', function() {
        $(this).addClass('floating-label-form-group-with-focus');
    }).on('blur', '.floating-label-form-group', function() {
        $(this).removeClass('floating-label-form-group-with-focus');
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
    setTimeout(function() {
      showDirectionMap(25.135122, 121.746055, 25.128556, 121.742833,'nightmarket-map');
    }, 1000);
});

$('#park').on('show.bs.modal', function() {
    setTimeout(function() {
      showDirectionMap(25.135122, 121.746055, 25.133681, 121.751808,'park-map');
    }, 1000);
});

$('#nine').on('show.bs.modal', function() {
    setTimeout(function() {
      showDirectionMap(25.140166, 121.797577, 25.110071, 121.845254,'nine-map');
    }, 1000);
});

$('#valley').on('show.bs.modal', function() {
    setTimeout(function() {
      showDirectionMap(25.140166, 121.797577, 25.145148, 121.798677,'valley-map');
    }, 1000);
});

$('#park-near').on('show.bs.modal', function() {
    setTimeout(function() {
      showDirectionMap(25.140166, 121.797577, 25.144111, 121.803394,'park-near-map');
    }, 1000);
});

function showDirectionMap(x1, y1, x2, y2,id) {
    var mapOptions = {
        zoom: 16,
        scrollwheel: false,
        draggable: !('ontouchend' in document),
        center: new google.maps.LatLng(0.5*(x1+x2), 0.5*(y1+y2)),
        styles: [{
            'stylers': [{
                'hue': '#1993af'
            }]
        }, {
            'featureType': 'road',
            'elementType': 'labels',
            'stylers': [{
                'visibility': 'off'
            }]
        }, {
            'featureType': 'road',
            'elementType': 'geometry',
            'stylers': [{
                'lightness': 100
            }, {
                'visibility': 'simplified'
            }]
        }]
    };

    var mapElement = document.getElementById(id);
    var map = new google.maps.Map(mapElement, mapOptions);

    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    directionsDisplay.setMap(map);

    directionsService.route({
        origin: { lat: x1, lng: y1 },
        destination: { lat: x2, lng: y2 },
        travelMode: google.maps.TravelMode.WALKING
    }, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            console.log('Directions request failed due to ' + status);
        }
    });
}

  // lazyload
  $(function() {
    $('.img-responsive').lazyload({
      effect : 'fadeIn'
    });
  });
