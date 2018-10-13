function initMap() {
  map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 3,
    center: {lat: 0, lng: 144},
    mapTypeId: google.maps.MapTypeId.HYBRID
  });

map.data.loadGeoJson('flightmap.geojson');
}