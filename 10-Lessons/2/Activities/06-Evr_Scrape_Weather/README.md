# Weather in Costa Rica

In this activity, you will scrape data into a mongo database and then use that data to build a new webpage.

## Instructions

1. Complete the code in `scrape_costa.py` to scrape typical min and max temperatures from the [Costa Rica Vacation Page](https://visitcostarica.herokuapp.com/). The `scrape_info` function should return the typical min and max temperatures as a Python Dictionary.

2. In `app.py`, complete the `/scrape` route to store the Python dictionary as a document in a mongo database collection.

3. In `app.py`, complete the `/` route to read one entry from mongo and render the flask template with the mongo data.

## Bonus

* If time remains, try to scrape the image source from the Vacation page. Note that this will require building a path that consists of the website url and the relative image path.

* Web scraping often includes data from multiple sources. Try and incorporate data from a secondary webpage into your scraper.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.