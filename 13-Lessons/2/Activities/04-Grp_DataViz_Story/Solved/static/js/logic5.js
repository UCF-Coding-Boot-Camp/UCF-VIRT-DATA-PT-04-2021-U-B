// Creating a map object
var myMap = L.map("map", {
  center: [42.32, -71.10],
  zoom: 11.5
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Use this link to get the geojson data.
var wifiLink = "static/data/Wicked_Free_Wi-Fi_Locations.geojson";

// Grabbing our GeoJSON data..
d3.json(wifiLink, function(data) {
  console.log(data);
  // Creating a geoJSON layer with the retrieved data
  L.geoJson(data, {
    onEachFeature: function(features, layer){
      layer.bindPopup("<h3>" + features.properties.Address + "</h3> <hr> <h4>Neighborhood: " + features.properties.Neighborhood + "</h4>")
    }
  }).addTo(myMap);
});
