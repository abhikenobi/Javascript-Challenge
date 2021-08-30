// from data.js
var tableData = data;

// Using D3 to select HTML elements

var table = d3.select("table");
var tbody = table.select("tbody");
var filterbutton = d3.select("#filter-btn");
var filterform = d3.select('#form');

// YOUR CODE HERE!

// basic init fucntion to have table populated
function init() {
    // createtable funcion
    createTable();
};

// Call init funciton for default look
init();

// * Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
function createTable() {
    data.forEach((alienReport) => {
        var row = tbody.append("tr");
        Object.entries(alienReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
// * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.
// Create event listeners
filterbutton.on("click", runFilter);
filterform.on("submit", runFilter);

// Filter function
function runFilter() {
    
    // Prevent page from refreshing
    d3.event.preventDefault();

    // var to get the value from datetime filter form
    var inputDate = d3.select("#datetime").property("value");

    var filteredData = tableData.filter(alienReport => alienReport.datetime === inputDate);

    console.log(filteredData);

    // Clear table body
    var tablebody = d3.select("table>tbody");
    tablebody.html("");

    // Use createTable function to populate filtered table on webpage
   filteredData.forEach((alienReport) => {
    var row = tbody.append("tr");
    Object.entries(alienReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};

// * Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.
