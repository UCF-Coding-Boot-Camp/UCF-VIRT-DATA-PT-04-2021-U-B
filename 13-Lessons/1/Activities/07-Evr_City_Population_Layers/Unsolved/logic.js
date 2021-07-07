// Function to determine marker size based on population
function markerSize(population) {
  return population / 40;
}

// An array containing all of the information needed to create city and state markers
var locations = [
  {
    coordinates: [40.7128, -74.0059],
    state: {
      name: "New York State",
      population: 19795791
    },
    city: {
      name: "New York",
      population: 8550405
    }
  },
  {
    coordinates: [34.0522, -118.2437],
    state: {
      name: "California",
      population: 39250017
    },
    city: {
      name: "Lost Angeles",
      population: 3971883
    }
  },
  {
    coordinates: [41.8781, -87.6298],
    state: {
      name: "Michigan",
      population: 9928300
    },
    city: {
      name: "Chicago",
      population: 2720546
    }
  },
  {
    coordinates: [29.7604, -95.3698],
    state: {
      name: "Texas",
      population: 26960000
    },
    city: {
      name: "Houston",
      population: 2296224
    }
  },
  {
    coordinates: [41.2524, -95.9980],
    state: {
      name: "Nebraska",
      population: 1882000
    },
    city: {
      name: "Omaha",
      population: 446599
    }
  }
];

// Define arrays to hold created city and state markers
var cityMarkers = [];
var stateMarkers = [];

// Loop through locations and create city and state markers
for (var i = 0; i < locations.length; i++) {
  // Set the marker radius for the state by passing population into the markerSize function
  stateMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "white",
      fillColor: "white",
      radius: markerSize(locations[i].state.population)
    })
  );

  // Set the marker radius for the city by passing population into the markerSize function
  cityMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "purple",
      fillColor: "purple",
      radius: markerSize(locations[i].city.population)
    })
  );
}

// Create base layers

// Streetmap Layer
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY
});

// Create two separate layer groups below. One for city markers, and one for states markers

// Create a baseMaps object to contain the streetmap and darkmap

// Create an overlayMaps object here to contain the "State Population" and "City Population" layers

// Modify the map so that it will have the streetmap, states, and cities layers
L.map("map", {
  center: [
    37.09, -95.71
  ],
  zoom: 5
});

// Create a layer control, containing our baseMaps and overlayMaps, and add them to the map
