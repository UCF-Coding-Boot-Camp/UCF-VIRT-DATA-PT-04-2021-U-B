// Submit Button handler
function handleSubmit() {
  // Select the input value from the form
  var city = d3.select("#cityInput").node().value;

  // clear the input value
  d3.select("#cityInput").node().value = "";

  // Build the plot with the new stock
  buildPlot(city);
}

function buildPlot(city) {
  var apiKey = "YOUR KEY HERE";

  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`

  d3.json(url).then(function(data) {
    console.log(data);

    var times = data.list.map(x => x.dt_txt);
    var temps = data.list.map(x => x.main.temp);

    var trace1 = {
      type: "scatter",
      mode: "lines",
      x: times,
      y: temps,
      line: {
        color: "#17BECF",
      }
    };

    var plotData = [trace1];

    var layout = {
      title: `${data.city.name} 5-day forecast`,
    };

    Plotly.newPlot("plot", plotData, layout);
  })

}

// Add event listener for submit button
d3.select("#submit").on("click", handleSubmit);
