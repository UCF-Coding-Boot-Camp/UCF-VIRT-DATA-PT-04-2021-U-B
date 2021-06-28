// Getting a reference to the button on the page with the id property set to `click-me`
var button1 = d3.select("#click-me1");
var button2 = d3.select("#click-me2");
var button3 = d3.select("#click-me3");

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#input-field");

// This function is triggered when the button is clicked
function handleClick() {
  console.log("Hi, button1 was clicked!");

  // We can use d3 to see the object that dispatched the event
  console.log(d3.event.target);
}

// We can use the `on` function in d3 to attach an event to the handler function
button1.on("click", handleClick);

// You can also define the click handler inline
button2.on("click", function() {
  console.log("Hi, button2 was clicked!");
  console.log(d3.event.target);
});

// Event handlers are just normal functions that can do anything you want
button3.on("click", function() {
  console.log("Hi, button3 was clicked!");
  console.log(d3.event.target);
  d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
});

// Input fields can trigger a change event when new text is entered.
inputField.on("change", function() {
  var newText = d3.event.target.value;
  console.log(newText);
});
