# Instructions

* Use the inspector to explore the database and print out the table names stored within it.

* Using the inspector, print out the column names and types for each of the tables contained within the SQLite file.

* Reflect the database into a SQLAlchemy class and start a session that can be used to query the database.

* Query Emojis for `emoji_char`, `emoji_id`, and `score` and save the query results

* Retrieve the "Top 10" `emoji_id` and `scores` from the query using list comprehensions for the `emoji_id` and the `scores`, respectively.  

* Using Matplotlib, create a horizontal bar chart and plot the emoji score in descending order. Use `emoji_char` as the y-axis labels and plot only the top 10 emojis ranked by score.

* Create the same kind of chart using Pandas to plot the data instead of Matplotlib.

* **Hints:**
  * First, load the top 10 results into a Pandas Dataframe. 
  * Set the index to the `emoji_id`.
  * Use `iloc[::-1]` on the DataFrame to reverse the order of emoji score and then use `plot.barh()`. 

## Bonus

* Use Pandas `read_sql_query` to load a query statement directly into a DataFrame.

- - -

### Copyright

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.
