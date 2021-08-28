// from data.js
var tableData = data;

// Using D3 to select HTML elements

var table = d3.select("table");
var tbody = table.select("tbody");
var filterbutton = d3.select("#filter-btn");
var filterform = d3.select('form');

// YOUR CODE HERE!

// basic init fucntion to have table populated
function init() {
    // createtable funcion
    createTable();
};

// * Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
function createTable(tableData, tbody) {
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
filterbtn.on("click", runFilter());
filterform.on("submit", runFilter());

// Filter function
function runFilter() {
    
    // Prevent page from refreshing
    d3.event.preventDefault();

    // Var to select datetime html element in the filter form
    var inputElement = d3.select("#datetime");

    // var to get the value from datetime filter form
    var inputDate = inputElement.property("value");

    var filteredData = tableData.filter(alien => al)


};

// * Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.


// Call init funciton for default look
init();