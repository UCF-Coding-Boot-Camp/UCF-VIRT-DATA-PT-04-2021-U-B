# Justice League API - Continued

* In this activity, you will add an additional API route that returns json for a Python Dictionary containing an individual superheroes information.

## Instructions

* Using the last activity as a starting point, add code to allow for getting a specific hero's information based on their superhero name.

* The functionality for the new `<superhero>` route closely mirrors that of the `<real_name>` route from the instructor demonstration.

* The new route is identical to the `<real_name>` route; the only difference is that you'll substitute `<real_name>` with `<superhero>`, and add `superhero` before defining the parameter to capture.

* As an alternative to defining the two **specific** routes, you can define a route that takes **two** variable rules: `<key>` and `<value>`, i.e., `@app.route("/api/v1.0/justice-league/<key>/<value>")`.

- - -

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.
