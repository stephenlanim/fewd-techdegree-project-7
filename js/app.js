/* ======================================
    Dashboard
   ====================================== */
// Variables
const pageURL = window.location.href;
// const $navURL = $(this).attr('href');

// Make nav link active
// If nav link URL matches current page URL...
// if (pageURL.includes($navURL)) {
//   // add class "active" to nav link
//   $('.nav__item').addClass('active');
// }

// // Loop through each nav item
// $('.nav__item').each( function (index, navURL) {
//   const $navURL = $(this).attr('href');
//
// // If nav link URL matches current page URL...
//   if ($navURL === 'index.html') {
//     // add class "active" to nav link
//     $(this).addClass('active');
//   }
//   // else remove "active" class from nav link
//   else {
//     $(this).removeClass('active');
//   }
//
// });

// if (pageURL.includes('index.html') || pageURL.includes('64157')) {
//   // $('.nav_item').addClass('active');
//   console.log("It's in there.");
// }


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
