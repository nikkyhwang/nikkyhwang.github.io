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

// Light Gallery
$('#gallery-1').lightGallery({
    thumbnail:false,
    share: false,
});

$('#gallery-2').lightGallery({
    share: false,
    download:false,
    mode:'lg-zoom-in-out',
});