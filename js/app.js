/* ======================================
    Dashboard
   ====================================== */
// Variables
const pageURL = window.location.href.toLowerCase();

// Make nav link active
// Loop through each nav item
$('.nav-item').each( function (index, navURL) {
  const $navURL = $(this).attr('href').toLowerCase();

// If nav link URL matches current page URL...
  if (pageURL.includes($navURL)) {
    // add class "active" to nav link
    $(this).addClass('active');
  }
  // If current page URL is the home page without "index.html" specified
  else if (pageURL.endsWith('fewd-techdegree-project-7/')) {
    // add class "active" to the first nav link (for the dashboard)
    $('.nav-item:first-child').addClass('active');
  }
  // else remove "active" class from nav link
  else {
    $(this).removeClass('active');
  }
});
