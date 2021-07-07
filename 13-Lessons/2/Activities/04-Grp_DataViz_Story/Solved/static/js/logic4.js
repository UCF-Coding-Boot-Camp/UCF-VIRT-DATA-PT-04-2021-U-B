// Store our API endpoint inside queryUrl
var fireDistrictsLink = "static/data/Fire_Districts.geojson";
var fireDepartmentLink = "static/data/Fire_Departments.geojson";

// Function that will determine the color of each district
function chooseColor(district) {
  switch (district) {
  case 1:
    return "#6A5ACD";
  case 3:
    return "red";
  case 4:
    return "orange";
  case 6:
    return "green";
  case 7:
    return "purple";
  case 8:
    return "#5F9EA0";
  case 9:
    return "#228B22";
  case 11:
    return "#B0C4DE";
  case 12:
    return "#3CB371";
  default:
    return "black";
  }
}

// Perform a GET request to the query URL
d3.json(fireDistrictsLink, function(data) {  
  console.log(data);
  // Send the data.features object to the createFeatures function 
  createFeatures(data.features);

});

//  Create the createFeatures function to hold the data.features object
function createFeatures(fireDistrictData) {

  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the place and time of the earthquake
  function onEachFeature(features, layer) {
    layer.bindPopup("<h2>Fire District: " + features.properties.DISTRICT + "</h2>");
  }

  // Create a GeoJSON layer containing the features array on the earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array
  var fireDistricts = L.geoJSON(fireDistrictData, {
    onEachFeature: onEachFeature,
    style: function(features) {
      return {
        color: "white",
        fillColor: chooseColor(features.properties.DISTRICT),
        fillOpacity: 0.5,
        weight: 1.5
      };
    }
  });

  // Send our earthquakes layer to the createMap function
  createMap(fireDistricts);
}

// Create the wifi locations layer for our map.
let fireStationLocations = new L.LayerGroup();

// Retrieve the wifi locations GeoJSON data.
d3.json(fireDepartmentLink, function(data) {
  console.log(data);
  // Creating a geoJSON layer with the retrieved data
 L.geoJson(data, {
    onEachFeature: function(features, layer){
      layer.bindPopup("<h3>" + features.properties.GEOADDRESS + "</h3> <hr> <h4>Fire Dept: " + features.properties.LOCNAME + "</h4>")
    }
  }).addTo(fireStationLocations);

  // Add the wifiLocations layer to our map.
  fireStationLocations.addTo(map);
});

// Create the createMap function to hold 
// the map layers, basemaps, overlay object, map object, and layer control.
function createMap(fireDistricts) {

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
    "Fire Districts": fireDistricts,
    "Fire Stations": fireStationLocations
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [42.32, -71.10],
    zoom: 11.5,
    layers: [streetmap, fireDistricts, fireStationLocations]
  });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}