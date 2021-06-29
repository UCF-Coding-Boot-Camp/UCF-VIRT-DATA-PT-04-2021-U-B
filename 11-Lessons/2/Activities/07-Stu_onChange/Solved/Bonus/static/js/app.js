// grab references to the input element and the output div
let text = d3.select("#text");
let output = d3.select(".output");

function counter(text) {

  // convert text to lowercase characters (chars)
  let chars = text
    .toLowerCase()
    .replace(/\s+/g, "")
    .split("");

  let counts = {};
  chars.forEach((char) => {
    if (char in counts) {
      counts[char] += 1;
    }
    else {
      counts[char] = 1;
    }
  });

  return counts;
}

// Function to handle input change
function handleChange(event) {
  // grab the value of the input field
  let value = d3.event.target.value;

  // clear the existing output
  output.html("");

  let frequencyCounts = counter(value);
  Object.entries(frequencyCounts).forEach(([key, value]) => {
    let li = output.append("li").text(`${key}: ${value}`);
  });

}

text.on("change", handleChange);
