function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: 59.93, lng: 30.32}
  });

  var image = '../img/icon-map-pin.svg';
  var beachMarker = new google.maps.Marker({
    position: {lat: 59.93, lng: 30.32},
    map: map,
    icon: image
  });
}
