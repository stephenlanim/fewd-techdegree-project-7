/* ===== Message User ===== */
// Get message-user form objects
const $searchUser = $('#searchUser');
const $messageUser = $('#messageUser');
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
// Get settings form objects
const $settingsForm = $('#settingsForm');
const $switchCheckbox = $('.onoffswitch-checkbox');
const $emailNotifSwitch = $('#emailNotifSwitch');
const $privacySwitch = $('#privacySwitch');
const $cancelChangesBtn = $('#cancelChangesBtn');

/* ----- Form Submission ----- */
// When user clicks "save" button...
$settingsForm.on('submit', function (e) {
  // Stop form from submitting normally
  e.preventDefault();

  // Save email notifications switch "checked" status to local storage
  localStorage.setItem('savedEmailSetting', $emailNotifSwitch.prop('checked'));

  // Save privacy switch "checked" status to local storage
  localStorage.setItem('savedPrivacySetting', $privacySwitch.prop('checked'));

  // Save selected timezone option to local storage
  localStorage.setItem('savedTimezoneSelection', $('#timezone option:selected').index());

  /* ----- Saved Settings Alert ----- */
  // See alerts.js for source code.
  const settingsSavedMessage = 'Your settings were saved successfully.</span> <span class="close-x">&times;</span>';

  // Create confirmation message box, place it before the Message User form, and insert the above confirmation message.
  alertMessage('confirmation', 'settingsFormAlerts', settingsSavedMessage);

});


/* ----- Settings Local Storage ----- */
// Get initial values of local storage objects upon page loading
const initialEmailSetting = localStorage.getItem('savedEmailSetting');
const initialPrivacySetting =  JSON.parse(localStorage.getItem('savedPrivacySetting'));
const initialTimezoneSelection = JSON.parse(localStorage.getItem('savedTimezoneSelection'));

// Utility function for checking what values are in local storage for the user settings properties
function checkInitialSettings() {

  console.log(initialEmailSetting);
  console.log(initialPrivacySetting);
  console.log(initialTimezoneSelection);

}

checkInitialSettings();


// Function to get form settings from local storage
function setSavedSettings() {

  // Lesson Learned: Using localStorage.getItem('') always returns a string instead of a pure boolean value. So I had to convert that value into a boolean for its assigned value in the .prop() method to work properly. The method that worked consistenttly was using a manual boolean assignment in an if/else statement.
  // The second method I tried used the JSON.parse() method to directly convert the string into a JavaScript object (in this case a boolean). BUT if there was nothing yet in local storage, it returned null, which was treated the same as false, thus turning the switch off.
  // [Failed method: JSON.parse(localStorage.getItem('savedPrivacySetting'));]

  // Get local storage for email notifications switch
  const storedEmailSetting = localStorage.getItem('savedEmailSetting');

  // Set email-notifications switch's "checked" status to what's in local storage
  if (storedEmailSetting == "true") {
    $emailNotifSwitch.prop('checked', true);
    // console.log('truthy');
  }
  else if (storedEmailSetting == "false") {
    $emailNotifSwitch.prop('checked', false);
    // console.log('fasley');
  }


  // Get local storage for privacy switch
  const storedPrivacySetting = localStorage.getItem('savedPrivacySetting');

  // Set privacy switch's "checked" status to what's in local storage
  if (storedPrivacySetting == "true") {
    $privacySwitch.prop('checked', true);
    // console.log('truthy');
  }
  else if (storedPrivacySetting == "false") {
    $privacySwitch.prop('checked', false);
    // console.log('fasley');
  }

  // Get local storage for selected timezone option
  const storedTimezoneSelection = localStorage.getItem('savedTimezoneSelection');
  // Set "selected" timezone option to what's in local storage
  $('#timezone option').eq(storedTimezoneSelection).prop('selected', true);

}

// Set user settings to those saved in local storage upon page loading
$('document').ready(function(){
  setSavedSettings();
});

// Function to restore settings back to values when page loaded
function revertSettings() {
  localStorage.setItem('savedEmailSetting', initialEmailSetting);
  localStorage.setItem('savedPrivacySetting', initialPrivacySetting);
  localStorage.setItem('savedTimezoneSelection', initialTimezoneSelection);
}

// When user clicks cancel button...
$cancelChangesBtn.on('click', function () {
  revertSettings();

  /* ----- Cancel Changed Settings Alert ----- */
  // See alerts.js for source code.
  const settingsCancelMessage = 'Your settings were reverted back to their initial state before this session\'s changes.</span> <span class="close-x">&times;</span>';

  // Create confirmation message box, place it before the Message User form, and insert the above confirmation message.
  alertMessage('warning', 'settingsFormAlerts', settingsCancelMessage);
});


/* ----- Switches ----- */
// Function to turn any settings switch on and off when clicked
function turnOnOff() {

  // Lesson Learned: This function is unnecessary. I thought I needed it because I did not see the input:checkboxes change in Developer Tools Inspector when I clicked them. But the Inspector does not show the DOM object changes created by the browser, which does indeed check and uncheck the inputs.

  // When any settings switch is clicked...
  $switchCheckbox.on('change', function(e) {
    // Note: the clicked object is a nephew <span> of the actual <input> checkbox. (Other note: I don't think "nephew" is an official web development term, but you know what I mean.)
    // If the switch is already on...
    if ($(this).is(':checked')) {
      // Turn switch to off
      $(this).attr('checked', false);
      console.log("It's now OFF.");
    }
    else if ($(this).prop('checked') === false) {
      // Turn switch to on
      $(this).attr('checked', true);
      console.log("It's back ON.");
    }

  });
}

// Call function to turn settings switches on and off
// turnOnOff();
