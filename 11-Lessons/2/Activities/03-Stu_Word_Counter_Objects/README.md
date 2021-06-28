# Word Counter

## Instructions

* Create a function in JavaScript that counts the number of occurrences of each word in a string. 

* The function should take in a string as its parameter and creates an array with the split string. 

* Start the word frequency counter as an empty object.

* The `forEach()` method is used to iterate through the split string array.

* Use a conditional statement to determine if the word is in the word frequency counter object, if so, add to the frequency counter. If not, then initialize the word as a key in the word frequency counter object and set the value to one. 

* Call the function with a test string.  

## Hints

* Use an object to hold word frequency in key-value pairs. For example, the following will be the frequency list for the string **"I yam what I yam and always will be what I yam"**

  ```js
  {
    I: 3,
    always: 1,
    and: 1,
    be: 1,
    what: 2,
    will: 1,
    yam: 3
  }
  ```

- - -

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.