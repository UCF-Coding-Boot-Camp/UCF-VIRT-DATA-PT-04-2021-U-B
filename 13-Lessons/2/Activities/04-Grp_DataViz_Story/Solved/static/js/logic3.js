// Store our API endpoint inside queryUrl
var policeDistrictslink = "static/data/Police_Districts.geojson";
var policeStationslink = "static/data/Boston_Police_Stations.geojson";

// Function that will determine the color of each district
function chooseColor(district) {
  switch (district) {
  case "A15":
    return "#6A5ACD";
  case "A7":
    return "red";
  case "A1":
    return "orange";
  case "C6":
    return "green";
  case "D4":
    return "purple";
  case "D4":
    return "#5F9EA0";
  case "D14":
    return "#228B22";
  case "E13":
    return "#B0C4DE";
  case "E5":
    return "#3CB371";
  case "B3":
    return "#4B0082";
  case "C11":
      return "#FFD700";
  case "E18":
    return "#00BFFF";
  case "B2":
      return "#FF7F50";
  default:
    return "black";
  }
}

// Perform a GET request to the query URL
d3.json(policeDistrictslink, function(data) {  
  // Send the data.features object to the createFeatures function 
  createFeatures(data.features);

});

//  Create the createFeatures function to hold the data.features object
function createFeatures(policeDistrictData) {

  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the place and time of the earthquake
  function onEachFeature(features, layer) {
    layer.bindPopup("<h2>Police District: " + features.properties.DISTRICT_ + "</h2>");
  }

  // Create a GeoJSON layer containing the features array on the earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array
  var policeDistricts = L.geoJSON(policeDistrictData, {
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
  createMap(policeDistricts);
}

// Create the wifi locations layer for our map.
let policeStationLocations = new L.LayerGroup();

// Retrieve the wifi locations GeoJSON data.
d3.json(policeStationslink, function(data) {
  console.log(data);
  // Creating a geoJSON layer with the retrieved data
 L.geoJson(data, {
    onEachFeature: function(features, layer){
      layer.bindPopup("<h3>" + features.properties.ADDRESS + "</h3> <hr> <h4>Neighborhood: " + features.properties.NEIGHBORHOOD + "</h4>")
    }
  }).addTo(policeStationLocations);

  // Add the wifiLocations layer to our map.
  policeStationLocations.addTo(map);
});

// Create the createMap function to hold 
// the map layers, basemaps, overlay object, map object, and layer control.
function createMap(policeDistricts) {

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
    "Police Districts": policeDistricts,
    "Police Stations": policeStationLocations
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [42.32, -71.10],
    zoom: 11.5,
    layers: [streetmap, policeDistricts, policeStationLocations]
  });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}
