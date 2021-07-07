# Basic Map

In this activity we will create a basic map with Leaflet.

## Instructions

* Open the `logic.js` file in your editor and notice the following key aspects of the app:

  1. **Map Object:**

     `L.map` accepts two arguments:

     1. The `id` of the HTML element which Leaflet should insert the map into.

     2. An object containing initial options for the new map ("center" and "zoom" in this example).

  2. **Tile Layer:**

     The tile layer serves as a background image for the map. Leaflet doesn't provide us with a tile layer out of the box. Instead, it gives us the option to use various tile layer APIs. Here we're using the Mapbox API. We configure our tile layer by passing in a formatted queryURL to the tileLayer method, and then adding our layer to our map with the `addTo` method. We will invoke the `addTo` method whenever we want to add something to a map!

* Mapbox is a free API, but you'll need to create a free account at <https://mapbox.com> and [generate a token](https://www.mapbox.com/studio/account/tokens/) in order to use it.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.
