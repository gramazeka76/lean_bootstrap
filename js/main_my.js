$(document).ready(function(){
//create a Latlng object containing the coordinate for center of the map 
    var latlng = new google.maps.LatLng(55.757238, 37.678571);
// prepare the map properties
    var options = {
        zoom: 15,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        navigationControl: true,
        mapTypeControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true
      };
// initialize the map object
    var map = new google.maps.Map(document.getElementById('google_map'), options);
// addMarker
    var marker1 = new google.maps.Marker({position: latlng, map: map});
// add listener for a click on the pin
    google.maps.event.addEventListener(marker1, 'click', function(){
        infowindow.open(map, marker1);
    });
// add information window
    var infowindow = new google.maps.InfoWindow({
        content: '<div class="info"><strong>This is my company</strong><br /><br />My company address is here<br /> 32846 Sydney</div>'
    });
});