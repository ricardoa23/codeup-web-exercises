// (function() {

let restaurants = [
  {
    name: "Paesanos Riverwalk",
    address: "111 W Crockett St # 101, San Antonio, TX 78205",
    lng: -98.48908327338614,
    lat: 29.42540918817583,
    type: "Italian"
  },
  {
    name: "Thai Lao 78",
    address: "6531 Farm-To-Market Rd 78 #102, San Antonio, TX 78244",
    lng: -98.3600321887262,
    lat: 29.48165039108956,
    type: "Thai"
  },
  {
    name: "Pollos Asados los Nortenos",
    address:"4822 Walzem Rd, San Antonio, TX 78218",
    lng: -98.39695314416903,
    lat: 29.515610819517537,
    type: "Mexican"
  }
];

mapboxgl.accessToken = keys.mapbox;
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: [-98.49542639905354, 29.424632538592306],
  zoom: 11, 
});



let testMarker = new mapboxgl.Marker()
    .setLngLat([restaurants[0].lng, restaurants[0].lat])
    .addTo(map);

    function markersFunction(input) {
  let newMarker;
  restaurants.forEach((restaurant) => {
    geocode(restaurant.address, keys.mapbox).then(function () {
    newMarker = new mapboxgl.Marker()
      .setLngLat([restaurant.lng, restaurant.lat])
      .addTo(map);
    let popup = new mapboxgl.Popup().setHTML(`
      <h4>${restaurant.name}</h4>
      <p>${restaurant.type}</p>
      <p>${restaurant.address}</p>`)
      newMarker.setPopup(popup)
  });
  
  });
}
  markersFunction(restaurants)
// });