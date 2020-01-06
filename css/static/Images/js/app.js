// import the data from data.js
const tableData= data;

// Reference the HTML table using d3
// ------------------------------------
// 1. Declare a variable with tbody
// 2. Use d3.select to tell JavaScript 
// to look for the <tbidt> tags in the HTML
var tbody= d3.select("tbody");

// Takes two numbers and adds them
//function addition(a,b){
//    return a + b;
}

// Function can call other functions
//function doubleAddition(c,d){
//    var total = addition(c,d) * 2;\
//    return total;
//}




//  - Starting a new function 
// and Clearing the tables
function buildTable(data) {
    tbody.html(" ");


// Full code
// * Looped through each object in the array
// * Appended a row to the HTML table
// * Added each value from the object into a cell
data.forEach((dataRow)) => {
    let row= tbody.append("tr");
    Object.values(dataRow).forEach((val))=> {
        let cell= row.append("td");
        cell.text(val);
    });
);
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  // Build the table when the page loads
  buildTable(tableData);