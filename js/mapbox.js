// (function() {

let restaurants = [
  {
    name: "Paesanos Riverwalk",
    address: [
      {
        streetNumber: "111 W Crockett St # 101",
        cityAndState: "San Antonio, TX",
        zipCode: 78205
      }
    ],
    lng: -98.48908327338614,
    lat: 29.42540918817583,
    type: "Italian"
  },
  {
    name: "Thai Lao 78",
    address: [
      {
        streetNumber: "6531 Farm-To-Market Rd 78 #102",
        cityAndState: "San Antonio, TX",
        zipCode: 78244
      }
    ],
    lng: -98.3600321887262,
    lat: 29.48165039108956,
    type: "Thai"
  },
  {
    name: "Pollos Asados los Nortenos",
    address: [
      {
        streetNumber: "4822 Walzem Rd",
        cityAndState: "San Antonio, TX",
        zipCode: 78218
      }
    ],
    lng: -98.39695314416903,
    lat: 29.515610819517537,
    type: "Mexican"
  }
];

mapboxgl.accessToken = keys.mapbox;
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [-98.49542639905354, 29.424632538592306], // starting position [lng, lat]
  zoom: 11, // starting zoom
});



let testMarker = new mapboxgl.Marker()
    .setLngLat([restaurants[0].lng, restaurants[0].lat])
    .addTo(map);

//
//
// let marker =
    function markersFunction(input) {
  let newMarker;
  restaurants.forEach((restaurant) => {
    newMarker = new mapboxgl.Marker()
      .setLngLat([restaurant.lng, restaurant.lat])
      .addTo(map);
    return newMarker;
  });
}


  markersFunction(restaurants)
// });