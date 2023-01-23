mapboxgl.accessToken = keys.mapbox;
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/ricardoa11/cld97tp9h000s01mzzfbtye7k",
  zoom: 10,
  center: [-98.4916, 29.4252],
  projection: 'globe'
});

  let marker = new mapboxgl.Marker();
  
 let coordinates = {lat:29.4252, lng: -98.4916};

  function addMarker (event) {
  coordinates = event.lngLat;
    marker.setLngLat(coordinates).addTo(map);
    console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat);
    return coordinates;
  }
  map.on('click', addMarker);

  console.log(coordinates);
$.get(`https://api.openweathermap.org/data/2.5/forecast`, {
    APPID: keys.weatherMap,
    lat: coordinates.lat,
    lon: coordinates.lng,
    units: "imperial"
}).done(function(data) {
  for (let i = 0; i < data.list.length; i += 8) {
    console.log(data)
  }
});



