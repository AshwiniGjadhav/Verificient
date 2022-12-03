// Load Google's charting functions
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

// Put the JSON array into a variable
const json = [
    { "condiment": "Bitcoin", "number": 47 },
    { "condiment": "Ethereum", "number": 70 },
    { "condiment": "Monero", "number": 30 }
];

// Draw the chart and set the chart values
function drawChart() {

    // Set the columns for the Google Chart in the first line of the array
    var condArray = [['Condiment', 'Number']];
    // Loop through the JSON array, set up the value pair & push to the end of condArray
    for (i = 0; i < json.length; i++) {
        condArray.push([json[i].condiment, json[i].number]);
    }

    // Set the Google Chart options (title, width, height, and colors can be set)
    var options = {
        'width': 400,
        'height': 200
    };

    // Convert condArray into the DataTable that Google Charts needs and put it in a var
    var data = google.visualization.arrayToDataTable(condArray)

    // Display chart inside of the empty div element using the DataTable and Options set
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}