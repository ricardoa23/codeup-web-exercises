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

  map.on("moveend", function (e) {
    mapSearchCoord = map.getCenter();
    coordinates.lng = mapSearchCoord.lng;
    coordinates.lat = mapSearchCoord.lat;
    marker.setLngLat(coordinates).addTo(map);
    apiCall(e);
  });
  // Loads weather on load
  map.on("load", function (e) {
    apiCall(e);
  });
  // add marker
  map.on("click", function (e) {
    addMarker(e);
    apiCall(e);
  });

  function creatingDataCards(data) {
    let html = "";
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    for (let i = 0; i < data.list.length; i += 8) {
      let date = new Date(data.list[i].dt * 1000);
      date = date.toLocaleDateString("en-US", options);
      html += `<div class="card bg-secondary-subtle m-2">
    <div class="card-header bg-secondary fs-4 text-center">${date}</div>
    <div class="d-flex justify-content-center">
    <img id="wicon"src="http://openweathermap.org/img/w/${
      data.list[i].weather[0].icon
    }.png" />
      </div>
    <p class="text-center text-uppercase fs-5 fw-bold">${
      data.list[i].weather[0].description
    }</p>
    <p class="text-center my-1">High ${parseInt(
      data.list[i].main.temp_max
    )}&#8457</p>
    <p class="text-center my-1">Low ${parseInt(
      data.list[i].main.temp_min
    )}&#8457</p>
    <p class="text-center my-1">Feels Like ${parseInt(
      data.list[i].main.feels_like
    )}&#8457</p>
    <p class="text-center my-1">Pressure ${parseInt(
      data.list[i].main.pressure
    )} hPa</p>
    </div class="card-footer">`;
    }
    return html;
  }

  function addMarker(event) {
    coordinates = event.lngLat;
    marker.setLngLat(coordinates).addTo(map);
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

})();
