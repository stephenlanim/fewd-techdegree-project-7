/* ======================================
    Dashboard Functionality
   ====================================== */

/* ===== User Alert ===== */
// See alerts.js for source code.
const notificationMsg1 = '<span><strong>Alert:</strong> You have 1 unread message. Check notifications.</span> <span class="close-x">&times;</span>';

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
