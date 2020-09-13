// from data.js
var tableData = data;

// Reference to table body
var tbody = d3.select("tbody");


// Append table for each sighting
function popTable(d) {
    d.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        })
    });
}


// Filter by date form
var button = d3.select("#filter-btn");
var form = d3.select("form");
button.on("click", filterByDate);
form.on("submit", filterByDate);
function filterByDate() {
    d3.event.preventDefault();
    tbody.html("")
    var inputEle = d3.select(".form-control");
    var inputVal = inputEle.property("value");
    var filteredData = tableData.filter(item => item.datetime === inputVal);
    popTable(filteredData);
}


popTable(tableData);
