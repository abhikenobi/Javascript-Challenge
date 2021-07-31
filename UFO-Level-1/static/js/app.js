// from data.js
var tableData = data;

// Using D3 to select HTML elements

var table = d3.select("table");
var tbody = table.select("tbdoy");
var filterbtn = d3.select("#filter-btn");

// YOUR CODE HERE!

data.forEach((alienReport) => {
    var row = tbody.append("tr");
    Object.entries(alienReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
// * Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

// * Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.