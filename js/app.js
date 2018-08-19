/* ======================================
    Dashboard
   ====================================== */
// Variables
const pageURL = window.location.href.toLowerCase();

// Make nav link active
// Loop through each nav item
$('.nav__item').each( function (index, navURL) {
  const $navURL = $(this).attr('href').toLowerCase();

// If nav link URL matches current page URL...
  if (pageURL.includes($navURL)) {
    // add class "active" to nav link
    $(this).addClass('active');
  }
  // else remove "active" class from nav link
  else {
    $(this).removeClass('active');
  }
});
