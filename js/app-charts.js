/* ======================================
    App Charts

    Note: See the Chart.js plugin documentation for source code.
   ====================================== */

/* ===== Global Chart Configuration ===== */

Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;

/* ===== Traffic Chart ===== */

var $trafficCanvas = $('canvas#weeklyTrafficLineGraph');
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

/* ===== Chart Switcher ===== */
const $chartSwitches = $('.chart-switch');
const $trafficLineGraphs = $('.traffic-line-graph');

// $('#hourlySwitch').on('click change', () => {
//   $trafficLineGraphs.hide();
//   $('#hourlyTrafficLineGraph').show();
// });
//
// $('#dailySwitch').on('click change', () => {
//   $trafficLineGraphs.hide();
//   $('#dailyTrafficLineGraph').show();
// });
//
// $('#weeklySwitch').on('click change', () => {
//   $trafficLineGraphs.hide();
//   $('#weeklyTrafficLineGraph').show();
// });
//
// $('#monthlySwitch').on('click change', () => {
//   $trafficLineGraphs.hide();
//   $('#monthlyTrafficLineGraph').show();
// });

// Show whichever chart is "checked" by default in the HTML
// Loop through chart switches
  // for (let i = 0; i < $chartSwitches.length; i++) {
  //   if ($chartSwitches.eq(i).attr('checked')) {
  //     // Hide all other charts
  //     $trafficLineGraphs.hide();
  //     // Show the chart corresponding with the checked switch
  //     $trafficLineGraphs.eq(i).show();
  //   }
  // }

function showChart() {
// Loop through chart switches
  for (let i = 0; i < $chartSwitches.length; i++) {
    if ($chartSwitches.eq(i).attr('checked')) {
      $trafficLineGraphs.hide();
      // console.log($trafficLineGraphs.eq(i));
      $trafficLineGraphs.eq(i).show();
    }
  }
}
showChart();

$chartSwitches.on('click', function(e) {
  // let clickedSwitch = e.target;
  // Loop through chart switches
    // for (let i = 0; i < $chartSwitches.length; i++) {
    //   if ($(e.target).eq(i)) {
    //     $trafficLineGraphs.hide();
    //     console.log($trafficLineGraphs.eq(i));
    //     $trafficLineGraphs.eq(i).show();
    //   }
    // }
    // $chartSwitches.each( function(index){
    //   if ($(this).eq(index)) {
    //       $trafficLineGraphs.hide();
    //       console.log($trafficLineGraphs.eq(index));
    //       $trafficLineGraphs.eq(index).show();
    //     }
    // });

    // Remove "checked" status from all switches
    $chartSwitches.attr('checked', false);

    // Add "checked" status to clicked switch
    $(this).attr('checked', true);
    // Show the cart that corresponds with the checked switch
    showChart();

});



// Hide all charts
// $trafficLineGraphs.hide();

// // when user selects/checks chart switch...
// $chartSwitch.each(
//   this.change( function (index) {
//
//     // Show corresponding chart and hide others
//     $trafficLineGraphs[index].show();
//
// }));
// $trafficLineGraphs.hide();
// if chart switch is checked...
// if ($('.chart-switch:checked').eq() === $trafficLineGraphs.eq()) {
  // Hide charts

  // Show corresponding chart
  // $trafficLineGraphs.show();

  // if this $chartSwitch's first 5 letters match chart's first 5 letters...

  // if index number of checked chart switch matches index number of chart
  // if ($chartSwitch.eq() ) {
  //
  // }


// }
