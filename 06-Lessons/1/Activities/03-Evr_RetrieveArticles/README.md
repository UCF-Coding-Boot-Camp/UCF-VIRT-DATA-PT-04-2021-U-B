# Instructions

* Save the NYT API endpoint to a variable. Make sure you include the right query parameter to retrieve JSON data!

* Register for and save your API Key to a variable.

* Decide on a search term, and save it to a variable.

* Limit your search to articles published within a range of dates—for example, only articles published in 2014. _Hint_: Read the documentation on `end_date`.

* Build your query URL, and save it to a variable.

* Retrieve a response from the NYT API with a GET request.

* Take a look at the documentation. How do you get a hold of the articles in the response?

* Traverse through the returned JSON to retrieve the list of articles and store it in a variable.

* Print a `snippet` from each article and separate using dashes (`-`).

* As a bonus, try to figure out how we could get 30 results. _Hint_: Look up the `page` query parameter. If you get a message saying you've exceeded your rate limit, don't fret—you've solved the problem.

* **Warning:** Be sure not to print out any of the query URLs. The query URLs will include your API key and if pushed to a public repository, it becomes a security risk for you as someone could steal and use your key. 

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.
