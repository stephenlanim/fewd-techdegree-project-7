/* ======================================
    Alert Message Scripts

      Note: Styles can be found in alert.css
   ====================================== */

// Function for creating an alert message
function alertMessage(alertType, placementBefore, message) {

  // create div element for alert message
  let $alertType = $('<div></div>');

  // add class and ID to alert message for styling and DOM manipulation
  $alertType.attr('class', `${alertType}`).attr('id', `${alertType}`);

  // Insert message text into alert message
  $alertType.html(message);

  // Insert alert message before DOM object
  $alertType.insertBefore('#' + `${placementBefore}`);

  // Start alert message as hidden upon page load, then display it
  $('#' + `${alertType}` + '')
    .hide()
    .slideDown(500);

  // When alert message is clicked...
  $alertType.on('click', function(){

    // Remove alert message
    $alertType.remove();

  });

}
