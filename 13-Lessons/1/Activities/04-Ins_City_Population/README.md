# City Population

In this activity we will practice using Leaflet circle vector layers to create a graduated circle map.

## Instructions

1. Notice how we've defined a `markerSize` function, which takes in a `population` argument and returns the `population` divided by 40. This function will be used to determine the radius, in pixels, of the circle layer for each city. We're dividing by 40 because the circles would be too large if we set their radius equal to the population without scaling down.

2. Notice that when we create each circle, we set its radius with the `markerSize` function.

3. We repeat this process for each city's marker.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.