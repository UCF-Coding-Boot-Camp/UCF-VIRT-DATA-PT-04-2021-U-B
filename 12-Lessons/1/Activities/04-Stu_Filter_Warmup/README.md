# Fastest Growing Cities

## Instructions

In this activity, you will use functional programming techniques to create plots for cities with the fastest population growth.

The top 15 cities with the greatest increase in population from 2016 to 2017 are given in the `data.js ` file. Complete the following: 

* From the dataset, use `filter()` to select only cities whose population grew by more than 15,000 people between 2016 and 2017. Note that you will also have to create a custom filtering function.

* In order to define the data for each plot point in a trace, use the `map()` method with arrow functions on the filtered dataset.

* Use Plotly to create a bar chart of the populations of the filtered cities.

## Bonus

* Create a chart of the *rate* of population growth (% of 2016 population) of the filtered cities.

* Create an array that has the 2016 population for each of the filtered cities.

* Create an array for the increase in population for each of the filtered cities.

* Use a for loop to handle two different conditions, i.e., to iterate through the two arrays above.

* Create a variable that calculates the rate by dividing the increase in population by the 2016 population while iterating through the for loop, and then adds that variable to an empty list.

**Hint:** 

You will need to use the `parseInt()` method to convert the populations from a string to a number before you can subtract or divide them.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.
