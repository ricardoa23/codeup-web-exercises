(function () {
  mapboxgl.accessToken = keys.mapbox;
  let map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/ricardoa11/cld97tp9h000s01mzzfbtye7k",
    zoom: 10,
    center: [-98.4916, 29.4252],
    projection: "globe",
  });

  let marker = new mapboxgl.Marker();

  let coordinates = { lng: -98.4916, lat: 29.4252 };

  map.addControl(
    new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      marker: false,
    })
  );
  console.log(coordinates);
  map.on("moveend", function (e) {
    mapSearchCoord = map.getCenter();
    coordinates.lng = mapSearchCoord.lng;
    coordinates.lat = mapSearchCoord.lat;
    marker.setLngLat(coordinates).addTo(map);
    console.log(coordinates);
    $.get(`https://api.openweathermap.org/data/2.5/forecast`, {
      APPID: keys.weatherMap,
      lat: coordinates.lat,
      lon: coordinates.lng,
      units: "imperial",
    })
      .done(function (data) {
        $("#weather-data").empty().append(creatingDataCards(data));
      })
      .fail(function (jqXhr, status, error) {
        console.log(jqXhr);
        console.log(status);
        console.log(error);
      });
  });

  // add marker
  map.on("click", addMarker);
  //display SA weather on load
  $.get(`https://api.openweathermap.org/data/2.5/forecast`, {
    APPID: keys.weatherMap,
    lat: coordinates.lat,
    lon: coordinates.lng,
    units: "imperial",
  })
    .done(function (data) {
      $("#weather-data").empty().append(creatingDataCards(data));
    })
    .fail(function (jqXhr, status, error) {
      console.log(jqXhr);
      console.log(status);
      console.log(error);
    });
  //updates data on click
  map.on("click", apiCall);
  // creates data on click
  function creatingDataCards(data) {
    let html = "";
    for (let i = 0; i < data.list.length; i += 8) {
      let date = new Date(data.list[i].dt * 1000);
      date = date.toLocaleDateString("en-US");
      html += `<div class="weather-cards">
    <div class="date">${date}</div>
    <div ><img src="http://openweathermap.org/img/w/${
      data.list[i].weather[0].icon
    }.png" /></div>
    <h4>Weather Description: ${data.list[i].weather[0].description}</h4>
    <p>High: ${parseInt(data.list[i].main.temp_max)}&#8457</p>
    <p>Low: ${parseInt(data.list[i].main.temp_min)}&#8457</p>
    <p>Feels Like: ${parseInt(data.list[i].main.feels_like)}&#8457</p>
    <p>Pressure: ${parseInt(data.list[i].main.pressure)} hPa</p>
    </div>`;
      console.log(data);
    }
    return html;
  }

  function addMarker(event) {
    coordinates = event.lngLat;
    marker.setLngLat(coordinates).addTo(map);
    // console.log("Lng:", coordinates.lng, "Lat:", coordinates.lat);
    return coordinates;
  }

  function apiCall(event) {
    $.get(`https://api.openweathermap.org/data/2.5/forecast`, {
      APPID: keys.weatherMap,
      lat: coordinates.lat,
      lon: coordinates.lng,
      units: "imperial",
    })
      .done(function (data) {
        $("#weather-data").empty().append(creatingDataCards(data));
      })
      .fail(function (jqXhr, status, error) {
        console.log(jqXhr);
        console.log(status);
        console.log(error);
      });
  }

  console.log(coordinates);
})();

// function searchUpdate(data, userInput) {
//   data = data.city.name;
//   data = data.tolowerCase();
//   userInput = document.querySelector('#search-bar').value;
//   userInput = userInput.tolowerCase();
//   if (data === userInput) {
//     coordinates.lat = data.city.coord.lat;
//     coordinates.lng = data.city.coord.lon;
//     map.flyTo()
//   }
// }
