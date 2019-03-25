// Everything OK?
console.log('OK');

// Active Navbar
$(function(){
    $('a').each(function() {
      if ($(this).prop('href') == window.location.href) {
        $(this).addClass('current');
      }
    });
  });


  // Get Current Year
var today = new Date();
var year = today.getFullYear();

console.log( today, year  );

// Show Current Year
$('span').text(year);


// Light Gallery

$('#gallery').lightGallery({
    share: false,
    download:false,
    mode:'lg-zoom-in-out'
})
;

