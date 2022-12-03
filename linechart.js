// JavaScript source code
google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Set Data
    var data = google.visualization.arrayToDataTable([
        ['Month', 'Market'],
        ['jan', 7], ['feb', 7.5], ['mar', 7.25], ['apr', 8]

    ]);
    // Set Options
    var options = {
        title: 'Portfolio',
        hAxis: { title: 'Month' },
        vAxis: { title: 'Market' },
        legend: 'none'
    };
    // Draw
    var chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);

    var chart = new google.visualization.LineChart(document.getElementById('myChart1'));
    chart.draw(data, options);

    var chart = new google.visualization.LineChart(document.getElementById('myChart2'));
    chart.draw(data, options);
}