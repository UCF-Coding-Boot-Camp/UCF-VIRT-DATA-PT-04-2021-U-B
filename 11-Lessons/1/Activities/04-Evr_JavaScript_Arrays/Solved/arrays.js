// A JavaScript array is much like a Python list
// Here, start with a blank array
var lettersArray = ["a", "b", "c", "d"];

// Display the array in console
console.log("An array of letters:");
console.log(lettersArray);

// Use indexing to access an array item
console.log("Use indexing to access an array item:");
var firstLetter = lettersArray[0];
var secondLetter = lettersArray[1];
console.log(firstLetter);
console.log(secondLetter);


// Use push() to append an item to an array
lettersArray.push("e");
lettersArray.push("f");
console.log("Use push() to append an item to an array:");
console.log(lettersArray);
console.log("==========");

// Use slice() to return selected items of an array
console.log("Use slice() to return selected items of an array");
var slicedArray1 = lettersArray.slice(1);
// Return the first three items of an array
var slicedArray2 = lettersArray.slice(0, 3);
// Return the second and third items of an array
var slicedArray3 = lettersArray.slice(1, 3);

console.log(slicedArray1);
console.log(slicedArray2);
console.log(slicedArray3);

console.log("==========");

// Use join() to return items of an array into a single string
var joinedArray = lettersArray.join("");
console.log("Use join() to return items of an array into a single string:");
console.log(joinedArray);

anotherJoinedArray = lettersArray.join("***");
console.log(anotherJoinedArray);
console.log("==========");

// A JavaScript string
var soundOfMusic = "The hills are alive with the sound of music";

console.log("This is a string:");
console.log(soundOfMusic);

// Use indexing to access a string character
console.log("Use indexing to access a string character:");
console.log(soundOfMusic[0]);
console.log(soundOfMusic[3]);

// Split a string into an array of substrings
// Here, split the string where spaces are found
var soundArray = soundOfMusic.split(" ");

console.log("Use split() to split a string into an array of substrings:");
console.log(soundArray);