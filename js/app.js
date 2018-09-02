/* ======================================
    Dashboard Functionality
   ====================================== */

/* ===== Normal Alert ===== */
// See alerts.js for source code.
const notificationMsg1 = '<span><strong>Alert:</strong> You have 1 unread message. Check notifications.</span> <span class="close-x">&times;</span>';

// Create an alert message box, place it before the widgets section, and insert the above alert message.
alertMessage('alert', 'widgets', notificationMsg1);

/* ===== Global Chart Configuration ===== */

Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;

/* ===== Traffic Chart ===== */

var $trafficCanvas = $('canvas#trafficChart');
// Control chart display dimensions
$trafficCanvas.parent().css({'width': '80vw','height': '40vh'});

var trafficLineChart = new Chart($trafficCanvas, {
   type: 'line',
   data: {
       labels: ["July 8-14", "July 15-21", "July 22-28", "July 29 - Aug 4", "Aug 5-11", "Aug 12-18"],
       datasets: [{
           label: '# of Visitors',
           data: [500, 1000, 750, 1200, 800, 1300],
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
         display: false
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
           data: [50, 75, 150, 100, 200, 175, 75],
           // categoryPercentage: 0.4,
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
