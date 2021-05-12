## Distinct Queries

In this activity, you will practice using `DISTINCT ON ()` with joins and filtering with the `WHERE` clause.

### Instructions

1. Retreive the latest rental for each customer's first and last name and email address. 

2. Retrieve the latest rental date for each title. 

   * **Hint:** Join the `rental` and `inventory` tables on `inventory_id` and then join the `film` table with the `inventory` table on `film_id`. 

## Bonus

* The last query only returned 958 movies, which means 42 movies are not being rented. We know that there are 1,000 movies in the `film` table. Retrieve the film titles of the 42 movies that are not in the `inventory` table. 

* **Hint:** You won't need to use `DISTINCT ON ()` for this solution. Determine if the `film_id` from the `film` table is `NOT IN` the `inventory` table. 

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.