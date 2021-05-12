# Hot Airport Reviews

In this activity you will create a heatmap for ratings of airports.

## Instructions

* If you haven't yet, navigate to your [Google Developer's Console](https://console.developers.google.com/) and enable the __Maps JavaScript API__.

* Install `gmaps`

* If it's not already running, start your virtual environment.

  * On Windows: `activate PythonData`

  * On Mac: `source activate PythonData`

* Then, from the command line run: `conda install -c conda-forge gmaps`

* Using the starter notebook and the airport CSV in the Resources folder, create a heat map of the airports across the country.

  * Use the latitude and longitude to place the airport

  * Use the rating to weight the heatmap.

  * Be sure to handle `NaN` values and data type in your Airport Ratings.

  * Refer to the [gmaps documentation](http://jupyter-gmaps.readthedocs.io/en/latest/tutorial.html#heatmaps) for instructions on how to implement heatmaps.

  ![Airport Heatmap](Images/08-Airport_Heatmap.png)

## BONUS

* Explore the [documentation](http://jupyter-gmaps.readthedocs.io/en/latest/tutorial.html#base-maps) to plot the map as two more types of maps.

  ![Hybrid Map](Images/08-Hybrid_Map.png)

  ![Terrain Map](Images/08-Terrain_Map.png)

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.