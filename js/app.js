/* ======================================
    Dashboard Functionality
   ====================================== */

/* ===== Notification List ===== */
const $notifList = $('#notifList');

// When alert bell is clicked
$('.bell').on('click', function() {
  
  // If notification list is not visible...
  if ($notifList.css('display') === 'none') {
    // Show notification list
    $notifList.slideDown(300);
  }
  // else, if notification list is visible
  else {
    // Hide the notification list
    $notifList.slideUp(300);
  }
});

/* ===== User Alert ===== */
// See alerts.js for source code.
const notificationMsg1 = '<span><strong>Alert:</strong> You have <strong>3</strong> unread notifications.</span> <span class="close-x">&times;</span>';

// Create an alert message box, place it before the widgets section, and insert the above alert message.
alertMessage('alert', 'userAlerts', notificationMsg1);

/* ===== Search Autocomplete ===== */

// Array of members
const memberDirectory = [
  'Dale Byrd',
  'Victoria Chambers',
  'Dan Oliver',
  'Dawn Wood'
]

// Apply autocomplete to searchUser input
$('#searchUser').autocomplete({source: memberDirectory});
