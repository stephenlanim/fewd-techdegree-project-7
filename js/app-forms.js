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
const $settingsForm = $('#settingsForm');
const $onOffSwitch = $('.onoffswitch-inner');
const $switchCheckbox = $('.onoffswitch-checkbox');
const $emailNotifSwitch = $('#emailNotifSwitch');
const $privacySwitch = $('#privacySwitch');
const $timezone = $('#timezone');
const $timezoneOption = $('#timezone option');
const $saveSettingsBtn = $('#saveSettingsBtn');
const $cancelChangesBtn = $('#cancelChangesBtn');

// When user clicks "save" button...
$settingsForm.on('submit', function (e) {
  // Stop form from submitting normally
  e.preventDefault();

  // Save email notifications switch "checked" status to local storage
  localStorage.setItem('savedEmailSetting', $emailNotifSwitch.prop('checked'));

  // Save public switch "checked" status to local storage
  localStorage.setItem('savedPrivacySetting', $privacySwitch.prop('checked'));

  // Save selected timezone option to local storage
  localStorage.setItem('savedTimezoneSelection', $('#timezone option:selected').index());

});


// Utility function for checking what values are in local storage for the user settings properties
function checkSavedSettings() {
  // Check saved settings
  console.log(localStorage.getItem('savedEmailSetting'));
  console.log(localStorage.getItem('savedPrivacySetting'));
  console.log(localStorage.getItem('savedTimezoneSelection'));
}

// checkSavedSettings()


// Function to get form settings from local storage
function setSavedSettings() {

  // Lesson Learned: Using localStorage.getItem('') always returns a string instead of a pure boolean value. So I had to convert that value into a boolean for its assigned value in the .prop() method to work properly. Below I show two different methods: 1) using a manual boolean assignment in an if/else statement; 2) using the JSON.parse() method to directly convert the string into a JavaScript object (in this case a boolean).

  // Get local storage for email notifications switch
  const storedEmailSetting = localStorage.getItem('savedEmailSetting');

  // Set email-notifications switch "checked" status to what's in local storage
  if (storedEmailSetting == "true") {
    $emailNotifSwitch.prop('checked', true);
    // console.log('truthy');
  }
  else if (storedEmailSetting == "false") {
    $emailNotifSwitch.prop('checked', false);
    // console.log('fasley');
  }

  // Get local storage for public switch
  const storedPrivacySetting =  JSON.parse(localStorage.getItem('savedPrivacySetting'));
  // Set email-notifications switch "checked" status to what's in local storage
  $privacySwitch.prop('checked', storedPrivacySetting);

  // Get local storage for selected timezone option
  const storedTimezoneSelection = JSON.parse(localStorage.getItem('savedTimezoneSelection'));
  // Set "selected" timezone option to what's in local storage
  $('#timezone option').eq(storedTimezoneSelection).prop('selected', true);

}


$('document').ready(function(){
  setSavedSettings();
});

// $cancelChangesBtn.on('click', function () {
//   setSavedSettings();
// });



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
