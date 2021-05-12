# Google Complex (Airport)

In this activity, you are tasked with creating a DataFrame containing the rating of every airport in the top 100 metropolitan areas according to Google Users.

## Instructions

* Using [05-Stu_Google_Complex/Airport_Ratings.ipynb](Unsolved/Airport_Ratings.ipynb) as a starting point, utilize the Google Geocoding API, the Google Places API, and Python/Jupyter to create a script that lists the "Airport Rating" of the major "International Airport" in each of the top 100 metropolitan areas found in [05-Stu_Google_Complex/Cities.csv](Resources/Cities.csv).

* Your final `ipynb` file should contain each of the following headers: 

  1. `City`

  2. `State`

  3. `Lat`

  4. `Lng`

  5. `Airport Name`

  6. `Airport Address`

  7. `Airport Rating`

### Hints

* You will need to obtain the lat/lng of each airport prior to sending it through the Google Places API to obtain the rating.

* When using the Google Places API, be sure to use the term "International Airport" to ensure that the data received is for the major airport in the city and not a regional airport.

* Use a try-except to skip airports for which there are no Google user's ratings.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.