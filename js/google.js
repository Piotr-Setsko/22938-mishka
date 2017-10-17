function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: {lat: 59.938896, lng: 30.323089}
  });

  var image = "../img/icon-map-pin.svg";

  var beachMarker = new google.maps.Marker({
    position: {lat: 59.938896, lng: 30.323089},
    title: 'г. Санкт-Петербург, \nул. Большая Конюшенная, \nд. 19/8, офис 101',
    map: map,
    icon: image
  });
}
