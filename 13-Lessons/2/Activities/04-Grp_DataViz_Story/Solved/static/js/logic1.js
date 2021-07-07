// Store our API endpoint inside queryUrl
var neighborhoodLink = "static/data/Boston_Neighborhoods.geojson";
var wifiLink = "static/data/Wicked_Free_Wi-Fi_Locations.geojson";

// Perform a GET request to the query URL
d3.json(neighborhoodLink, function(data) {
  console.log(data);
  
  // Send the data.features object to the createFeatures function 
  createFeatures(data.features);
});

//  Create the createFeatures function to hold the data.features object
function createFeatures(neighborhoodData) {

  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the place and time of the earthquake
  function onEachFeature(features, layer) {
    layer.bindPopup("<h2>" + features.properties.Name 
    + "</h2><hr><h3>Neighborhood ID: " + features.properties.Neighborhood_ID + "</h3>");
  }

  // Create a GeoJSON layer containing the features array on the earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array
  var neighborhoods = L.geoJSON(neighborhoodData, {
    onEachFeature: onEachFeature
  });

  // Send our neighborhoods layer to the createMap function
  createMap(neighborhoods);
}

// Create the wifi locations layer for our map.
let wifiLocations = new L.LayerGroup();

// Retrieve the wifi locations GeoJSON data.
d3.json(wifiLink, function(data) {
  console.log(data);
  // Creating a geoJSON layer with the retrieved data
 L.geoJson(data, {
    onEachFeature: function(features, layer){
      layer.bindPopup("<h3>" + features.properties.Address + "</h3> <hr> <h4>Neighborhood: " + features.properties.Neighborhood + "</h4>")
    }
  }).addTo(wifiLocations);

  // Add the wifiLocations layer to our map.
  wifiLocations.addTo(map);
});


// Create the createMap function to hold 
// the map layers, basemaps, overlay object, map object, and layer control.
function createMap(neighborhoods) {

  // Define streetmap and darkmap layers
  var streetmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
  };

  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    "Boston Neighborhoods": neighborhoods,
    "Public Wi-Fi": wifiLocations
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [42.32, -71.10],
    zoom: 11.5,
    layers: [streetmap, neighborhoods, wifiLocations]
  });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}
