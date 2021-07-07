# Markers

In this activity we will add markers to a Leaflet map.

## Instructions

1. Notice how we can create a new marker using the `L.marker` method. To do this, we pass two arguments into `L.marker`:

   1. An array containing coordinates for where the marker should be placed.

   2. An object containing initial options for the marker. (`draggable` and `title` in this example).

2. The `L.marker` method returns a new marker object, which we can run the `addTo` method on, and pass it a reference to our map.

3. Then, we add a popup to the new marker using the `bindPopup` method and pass in text we want to appear when the marker is clicked.

4. Open [markers.html](Solved/index.html) in your web browser to view the newly created marker on the map.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.