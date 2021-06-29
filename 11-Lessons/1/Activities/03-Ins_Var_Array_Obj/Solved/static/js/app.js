// JavaScript is case sensitve and the following will create two separate variables
let STATE = "CA"
let state = "ca"
console.log(STATE)
console.log(state)

// String Variable
let city = "San Francisco";
console.log(city);

// Integer Variable
let zip = 94123;
console.log(zip);

// Float Variable
let latitude = 37.77;
console.log(latitude);

// Float Variable
let longitude = -122.43;
console.log(longitude);

// Boolean Variable
let inCalifornia = true;
console.log(inCalifornia);

// Example Array
let cityArray = ["San Francisco", 94123, [37.77, -122.43], inCalifornia];
console.log(cityArray);

// Example Object
let cityObject = {
    city: "San Francisco",
    zip: 94123,
    location: [37.77, -122.43],
    inCalifornia: true
};
console.log(cityObject);
var location1 = [37.77, -122.43];

// Example Oject from Variables
let cityObject2 = {
    city: city,
    zip: zip,
    location: location1,
    inCalifornia: inCalifornia
};
console.log(cityObject2);