# City Population Layers

In this activity we will expand upon the previous exercise by adding an overlay layer to represent the state's population. This layer will appear on the map as white circle vectors.

## Instructions

1. Open the [logic.js](Unsolved/logic.js) file inside of the Unsolved folder.

2. Add logic to this file to accomplish the following:

   1. Create a layer group for city markers and a separate layer group for state markers. All of the markers have been created for you already and stored in the `cityMarkers` and `stateMarkers` arrays. Store these layer groups in variables named `cities` and `states`.

   2. Create a `baseMaps` object to contain the `streetmap` and `darkmap` tiles, which have been already defined.

   3. Create an `overlayMaps` object to contain "State Population" and "City Population" layers.

   4. Add a `layers` key to the options object inside of the `L.map` method and set its value to an array containing our `streetmap`, `states`, and `cities` layers. These will determine which layers are displayed when the map first loads.

   5. Finally, create a layer control and pass in the `baseMaps` and `overlayMaps` objects. Add the layer control to the map.

## Hints

* If you get stuck refer to the [Leaflet Layers Control Docs](http://leafletjs.com/examples/layers-control/)

* If successful, you should be able to toggle between Street Map and Dark Map base layers, as well as turn State Population and City Population overlay layers on and off.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.