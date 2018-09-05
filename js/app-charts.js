/* ======================================
    App Charts

    Note: See the Chart.js plugin documentation for source code.
   ====================================== */

/* ===== Global Chart Configuration ===== */

Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;

/* ===== Traffic Charts ===== */

// Hourly Traffic Line Graph
var $hourlyTrafficCanvas = $('canvas#hourlyTrafficLineGraph');
// Control chart display dimensions
$hourlyTrafficCanvas.parent().css({'width': '80vw','height': '40vh'});

var hourlyTrafficLineChart = new Chart($hourlyTrafficCanvas, {
   type: 'line',
   data: {
       labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
       datasets: [{
           label: '# of Visitors',
           data: [3, 2, 0, 0, 0, 0, 1, 4, 8, 12, 24, 21, 28, 23, 27, 22, 18, 11, 9, 9, 7, 7, 4, 5],
           backgroundColor: 'rgba(116, 119, 191, 0.4)',
           borderColor: 'rgb(116, 119, 191)',
           borderWidth: 1,
           pointRadius: 6,
           pointBackgroundColor: '#fff',
           pointBorderWidth: 2,
           pointBorderColor: '#7477bf',
           tension: 0
       }]
   },
   options: {
       scales: {
           yAxes: [{
               ticks: {
                   beginAtZero:true
               }
           }]
       },
       legend: {
         display: true
       }
   }
});

// Daily Traffic Line Graph
var $dailyTrafficCanvas = $('canvas#dailyTrafficLineGraph');
// Control chart display dimensions
$dailyTrafficCanvas.parent().css({'width': '80vw','height': '40vh'});

var dailyTrafficLineChart = new Chart($dailyTrafficCanvas, {
   type: 'line',
   data: {
       labels: ["Aug 12", "Aug 13", "Aug 14", "Aug 15", "Aug 16", "Aug 17", "Aug 18"],
       datasets: [{
           label: '# of Visitors',
           data: [50, 75, 150, 100, 200, 175, 245],
           backgroundColor: 'rgba(116, 119, 191, 0.4)',
           borderColor: 'rgb(116, 119, 191)',
           borderWidth: 1,
           pointRadius: 6,
           pointBackgroundColor: '#fff',
           pointBorderWidth: 2,
           pointBorderColor: '#7477bf',
           tension: 0
       }]
   },
   options: {
       scales: {
           yAxes: [{
               ticks: {
                   beginAtZero:true
               }
           }]
       },
       legend: {
         display: true
       }
   }
});


// Weekly Traffic Line Graph
var $weeklyTrafficCanvas = $('canvas#weeklyTrafficLineGraph');
// Control chart display dimensions
$weeklyTrafficCanvas.parent().css({'width': '80vw','height': '40vh'});

var weeklyTrafficLineChart = new Chart($weeklyTrafficCanvas, {
   type: 'line',
   data: {
       labels: ["July 8-14", "July 15-21", "July 22-28", "July 29 - Aug 4", "Aug 5-11", "Aug 12-18"],
       datasets: [{
           label: '# of Visitors',
           data: [500, 1000, 750, 1200, 800, 1335],
           backgroundColor: 'rgba(116, 119, 191, 0.4)',
           borderColor: 'rgb(116, 119, 191)',
           borderWidth: 1,
           pointRadius: 6,
           pointBackgroundColor: '#fff',
           pointBorderWidth: 2,
           pointBorderColor: '#7477bf',
           tension: 0
       }]
   },
   options: {
       scales: {
           yAxes: [{
               ticks: {
                   beginAtZero:true
               }
           }]
       },
       legend: {
         display: true
       }
   }
});

// Monthly Traffic Line Graph
var $monthlyTrafficCanvas = $('canvas#monthlyTrafficLineGraph');
// Control chart display dimensions
$monthlyTrafficCanvas.parent().css({'width': '80vw','height': '40vh'});

var monthlyTrafficLineChart = new Chart($monthlyTrafficCanvas, {
   type: 'line',
   data: {
       labels: ["March 2018", "April 2018", "May 2018", "June 2018", "July 2018", "Aug 2018"],
       datasets: [{
           label: '# of Visitors',
           data: [2703, 2843, 3157, 2984, 3550, 2242],
           backgroundColor: 'rgba(116, 119, 191, 0.4)',
           borderColor: 'rgb(116, 119, 191)',
           borderWidth: 1,
           pointRadius: 6,
           pointBackgroundColor: '#fff',
           pointBorderWidth: 2,
           pointBorderColor: '#7477bf',
           tension: 0
       }]
   },
   options: {
       scales: {
           yAxes: [{
               ticks: {
                   beginAtZero:true
               }
           }]
       },
       legend: {
         display: true
       }
   }
});



/* ===== Daily Traffic Chart ===== */

var $dailyTrafficCanvas = $('canvas#dailyTrafficChart');

// Control chart display dimensions
$dailyTrafficCanvas.parent().css({'width': '80%','height': '40vh'});

// Create and configure chart
var dailyTrafficBarChart = new Chart($dailyTrafficCanvas, {
   type: 'bar',
   data: {
       labels: ["S", "M", "T", "W", "T", "F", "S"],
       datasets: [{
           label: '# of Visitors',
           data: [50, 75, 150, 100, 200, 175, 210],
           backgroundColor: 'rgb(116, 119, 191)',
           borderRadius: 10,
           borderWidth: 1
       }]
   },
   options: {
       scales: {
           yAxes: [{
               ticks: {
                   beginAtZero:true
               }
           }]
       },
       legend: {
         display: false
       }
   }
});


/* ===== Mobile Users Chart ===== */

var $mobileUsersCanvas = $('canvas#mobileUsersChart');
// Control chart display dimensions
$mobileUsersCanvas.parent().css({'width': '80%','height': '40vh'});

// Create and configure chart
var mobileUserDonutChart = new Chart($mobileUsersCanvas, {
   type: 'doughnut',
   data: {
       labels: ["Photos", "Tablets", "Desktop"],
       datasets: [{
           label: '# of Users',
           data: [15, 20, 65],
           backgroundColor: [
               '#74b1bf',
               '#81c98f',
               '#7477bf'
           ],
           borderWidth: 0
       }]
   },
   options: {
       scales: {
           yAxes: [{
               display: false
           }]
       },
       legend: {
         position: 'right'
       }
   }
});

/* ===== Chart Switcher ===== */
const $chartSwitches = $('.chart-switch');
const $trafficLineGraphs = $('.traffic-line-graph');

function showChart() {
// Note: The chart switches and line graphs are matched by their shared index/instance among their respective classes (.chart-switch and .traffic-line-graph) in the HTML.

// Loop through chart switches
  for (let i = 0; i < $chartSwitches.length; i++) {
    // If the current chart switch is checked
    if ($chartSwitches.eq(i).attr('checked')) {
      // Hide all other line graphs
      $trafficLineGraphs.hide();
      // console.log($trafficLineGraphs.eq(i));
      // Show the line graph that matches the index of the checked chart switch
      $trafficLineGraphs.eq(i).show();
    }
  }
}

// Show checked switch's matching chart upon page loading
showChart();

// Function to show matching chart when switch is clicked
$chartSwitches.on('click', function(e) {

    // Remove "checked" status from all switches
    $chartSwitches.attr('checked', false);

    // Add "checked" status to clicked switch
    $(this).attr('checked', true);
    // Show the cart that matches with the checked switch
    showChart();

});
