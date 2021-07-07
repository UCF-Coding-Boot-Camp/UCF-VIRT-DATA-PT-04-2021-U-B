# Layers

In this activity we will utilize overlay and base layers in a Leaflet map.

## Instructions

1. Open [layers.html](Solved/index.html) in your web browser and notice how using the layer control in the top right corder of the screen, you can toggle the markers on or off. Notice how we can also switch between light and dark maps.

2. Open [logic.js](Solved/logic.js) in your editor and notice how we create markers for cities.

3. Then we create two tile layers:

   1. A light map. This is the same, day-time map we've been using so far.

   2. A dark map. This is a dark, night-time version of the map we've been using so far.

4. We then create two objects: `baseMaps` and `overlayMaps`.

   1. `baseMaps` contains layers that can be shown only one a time. In this case, we can either show light maps or dark maps, but never both at the same time. One base layer must always be visible.

   2. `overlayMaps` contains layers that can appear simultaneously with other layers of the same type and can be toggled off completely. Generally this refers to markers. Note how we can toggle cities on and off.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.