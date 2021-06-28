// A JavaScript object is similar to a Python dictionary
let movie = {
  name: "Star Wars",
  year: 1977,
  profitable: true,
  sequels: ["Episode IV – A New Hope ",
   "Episode V – The Empire Strikes Back", 
   "Episode VI – Return of the Jedi", 
   "Episode I – The Phantom Menace", 
   "Episode II – Attack of the Clones ", 
   "Episode III – Revenge of the Sith", 
   "Episode VII – The Force Awakens ", 
   "Episode VIII – The Last Jedi", 
   "Episode IX – The Rise of Skywalker"]
};

// JavaScript also allows value lookup via dot notation
console.log(movie.name);
console.log(movie.year);
console.log(movie.sequels[0]);

// JS also allows value lookup via bracket notation--note the similarity to Python
// console.log(movie["name"]);

// Add a key-value pair to an existing object
movie.rating = 8.5;
console.log(movie);

// Delete a key-value pair
delete movie.sequels;
console.log(movie);

// Check whether a key exists in an object
if (movie.rating !== undefined) {
  console.log("This movie has a rating!");
}

//  Loop through an object
for (const prop in movie) {
  console.log(movie[prop]);
}

// Built-in object methods in JavaScript
// An array of objects
let people = {
  mom: "wilma flintstone",
  dad: "fred flintstone",
  daughter: "pebbles",
  son: "bambam"
};

// Display the entire object, both keys and values
console.log(people);

// Display only the keys of the object
console.log(Object.keys(people));

// Display only the values of the object
console.log(Object.values(people));

// Display a key-value pair held in an array
console.log(Object.entries(people));
