// from data.js
var tableData = data;

// Reference to table body
var tbody = d3.select("#ufo-table");

// 
data.forEach((tableData) => {
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    })
});
