/* ======================================
    Dashboard
   ====================================== */

/* ===== Normal Alert ===== */
// See alerts.js for source code
const notificationMsg = '<span><strong>Alert:</strong> You have 1 unread message. Check notifications.</span> <span class="close-x">&times;</span>';

// Create an alert message box, place it before the widgets section, and insert the above alert message.
alertMessage('alert', 'widgets', notificationMsg);


/* ===== Traffic Chart ===== */

var $trafficCanvas = $('canvas#trafficChart');
var trafficLineChart = new Chart($trafficCanvas, {
   type: 'line',
   data: {
       labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
       datasets: [{
           label: '# of Votes',
           data: [12, 19, 3, 5, 2, 3],
           backgroundColor: 'rgba(116, 119, 191, 0.4)',
           borderColor: 'rgb(116, 119, 191)',
           borderWidth: 1,
           pointRadius: 6,
           pointBackgroundColor: '#fff',
           pointBorderWidth: 2,
           pointBorderColor: '#7477bf'
       }]
   },
   options: {
       maintainAspectRatio: false,
       scales: {
           yAxes: [{
               ticks: {
                   beginAtZero:true
               }
           }]
       }
   },
   responsive: true
});

$trafficCanvas.parent().css({'width': '80vw','height': '40vh'});


/* ===== Daily Traffic Chart ===== */

var $dailyTrafficCanvas = $('canvas#dailyTrafficChart');
var dailyTrafficBarChart = new Chart($dailyTrafficCanvas, {
   type: 'bar',
   data: {
       labels: ["S", "M", "T", "W", "T", "F", "S"],
       datasets: [{
           label: '# of Votes',
           data: [50, 75, 150, 100, 200, 175, 75],
           // categoryPercentage: 0.4,
           backgroundColor: 'rgb(116, 119, 191)',
           borderRadius: 10,
           borderWidth: 1
       }]
   },
   options: {
       maintainAspectRatio: false,
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
   },
   responsive: true
});

$dailyTrafficCanvas.parent().css({'width': '80%','height': '40vh'});


/* ===== Mobile Users Chart ===== */

var $mobileUsersCanvas = $('canvas#mobileUsersChart');
var mobileUserDonutChart = new Chart($mobileUsersCanvas, {
   type: 'doughnut',
   data: {
       labels: ["Photos", "Tablets", "Desktop"],
       datasets: [{
           label: '# of Votes',
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
       maintainAspectRatio: false,
       scales: {
           yAxes: [{
               display: false
           }]
       },
       legend: {
         position: 'right'
       }
   },
   responsive: true
});

$mobileUsersCanvas.parent().css({'width': '80%','height': '40vh'});

// Sample 2

//    var data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//   datasets: [{
//     label: "Dataset #1",
//     backgroundColor: "rgba(255,99,132,0.2)",
//     borderColor: "rgba(255,99,132,1)",
//     borderWidth: 2,
//     hoverBackgroundColor: "rgba(255,99,132,0.4)",
//     hoverBorderColor: "rgba(255,99,132,1)",
//     data: [65, 59, 20, 81, 56, 55, 40],
//   }]
// };
//
// var options = {
//   maintainAspectRatio: false,
//   scales: {
//     yAxes: [{
//       stacked: true,
//       gridLines: {
//         display: true,
//         color: "rgba(255,99,132,0.2)"
//       }
//     }],
//     xAxes: [{
//       gridLines: {
//         display: false
//       }
//     }]
//   }
// };
//
// Chart.Bar('chart', {
//   options: options,
//   data: data
// });

/* ===== Message User ===== */
const $searchUser = $('#searchUser');
const $messageUser = $('#messageUser');
const $sendBtn = $('#sendBtn');
const $messageForm = $('#messageForm');

// When user submits message
$messageForm.on('submit', function (e) {

  // Stop form from submitting normally
  e.preventDefault();


  // If either searchUser or messageUser input is empty
  if ($searchUser.val() === '' || $messageUser.val() === '') {

    /* ----- Error Alert ----- */
    // See alerts.js for source code
    const errorMessage = 'You must provide both a message recipient and a message before submitting the form.</span> <span class="close-x">&times;</span>';

    // Create error message box, place it before the Message User form, and insert the above error message.
    alertMessage('error', 'messageForm', errorMessage);

  }
  else {
    const $errorMsg = $('#error');

    // Remove error message
    $errorMsg.remove();

    /* ----- Confirmation Alert ----- */
    // See alerts.js for source code
    const confirmationMessage = 'Your message was sent successfully.</span> <span class="close-x">&times;</span>';

    // Create confirmation message box, place it before the Message User form, and insert the above confirmation message.
    alertMessage('confirmation', 'messageForm', confirmationMessage);

  }
});
