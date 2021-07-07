// Array of names
var names = ["Jane", "John", "Jimbo", "Jedediah"];

// Slice the first two names
var left = names.slice(0, 2);
// Returns elements at index position 0 and 1, but not 2.
console.log(left);

// Slice the last two names
var right = names.slice(2, 4);
// Returns elements at index position 2 and 3, but not 4.
console.log(right);
