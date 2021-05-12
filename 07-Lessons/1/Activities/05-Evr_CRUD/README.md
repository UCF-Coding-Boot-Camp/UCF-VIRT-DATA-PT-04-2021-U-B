## Using CRUD: Seek, Create, Update, and Destroy

In this activity, you will be utilizing CRUD operations (Create, Read, Update, Delete) on the provided data.

### Instructions

* Create a new database named `GlobalFirePower` in pgAdmin.

* Create a table by copying the code provided in `schema.sql` into a new query window in pgAdmin. Import the data from `GlobalFirePower.csv` using the Import/Export tool.

* Alter the table to add an `id` as the `PRIMARY KEY`. 

* Find the rows that have a `ReservePersonnel` of 0 and delete these rows from the dataset.

* Every country in the world at least deserves one `FighterAircraft`—it only seems fair. Let's add one to each nation that has none.

* Oh no! By updating this column, the values within `TotalAircraftStrength` column are now off for those nations! We need to [add 1](https://stackoverflow.com/a/2680352) to the original number.

* Find the [Averages](https://www.w3schools.com/sql/sql_count_avg_sum.asp) for `TotalMilitaryPersonnel`, `TotalAircraftStrength`, `TotalHelicopterStrength`, and `TotalPopulation`, and rename the columns with their designated average.

* Add the following data for each column into the `firepower` table with the name of a country of your choice.

  > Country, TotalPopulation, TotalMilitaryPersonnel, TotalAircraftStrength, TotalHelicopterStrength
  > 'country_name', 60069024, 524358, 457, 183

  ---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.