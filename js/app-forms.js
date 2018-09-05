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
    // See alerts.js for source code.
    const errorMessage = 'You must provide both a message recipient and a message before submitting the form.</span> <span class="close-x">&times;</span>';

    // Create error message box, place it before the Message User form, and insert the above error message.
    alertMessage('error', 'msgFormAlerts', errorMessage);

  }
  else {
    const $errorMsg = $('#error');

    // Remove error message
    $errorMsg.remove();

    /* ----- Confirmation Alert ----- */
    // See alerts.js for source code.
    const confirmationMessage = 'Your message was sent successfully.</span> <span class="close-x">&times;</span>';

    // Create confirmation message box, place it before the Message User form, and insert the above confirmation message.
    alertMessage('confirmation', 'msgFormAlerts', confirmationMessage);

  }
});

/* ===== User Settings ===== */
const $onOffSwitch = $('.onoffswitch-inner');
const $switchCheckbox = $('.onoffswitch-checkbox');
const $notifSwitch = $('#notificationsSwitch');
const $publicSwitch = $('#publicSwitch');

// Function to turn any settings switch on and off when clicked
function turnOnOff() {
  // When any settings switch is clicked...
  $onOffSwitch.on('click', function(e) {
    // Note: the clicked object is a nephew <span> of the actual <input> checkbox. (Other note: I don't think "nephew" is an official web development term, but you know what I mean.)
    const $thisSwitch = $(this).parent().parent().find($switchCheckbox);
    // If the switch is already on...
    if ($thisSwitch.attr('checked')) {
      // Turn switch to off
      $thisSwitch.attr('checked', false);
      // console.log("It's now OFF.");
    }
    else {
      // Turn switch to on
      $thisSwitch.attr('checked', true);
      // console.log("It's back ON.");
    }

  });
}

turnOnOff();

// localStorage.

// When user clicks "save" button...
