// Use D3 to append table row (tr) for each data entry in data.js
// data.forEach(function(alienReport) {
//     console.log(alienReport);
//     var row = tbody.append("tr");
// });

// var makeTable = (data, tbody) => {
//     data.forEach((alienReport) => {
//         var row = tbody.append("tr");
//         console.log(alienReport);
//         Object.entries(alienReport).forEach(([key, value]) => {
//             var cell = row.append("td");
//             cell.text(value);
//         });
//     });
// };

var tableData = data;

// Using D3 to select HTML elements

var table = d3.select("table");
var tbody = table.select("tbody");
var filterbtn = d3.select("#filter-btn");


data.forEach((alienReport) => {
    var row = tbody.append("tr");
    Object.entries(alienReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});