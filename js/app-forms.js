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
    alertMessage('error', 'messageForm', errorMessage);

  }
  else {
    const $errorMsg = $('#error');

    // Remove error message
    $errorMsg.remove();

    /* ----- Confirmation Alert ----- */
    // See alerts.js for source code.
    const confirmationMessage = 'Your message was sent successfully.</span> <span class="close-x">&times;</span>';

    // Create confirmation message box, place it before the Message User form, and insert the above confirmation message.
    alertMessage('confirmation', 'messageForm', confirmationMessage);

  }
});
