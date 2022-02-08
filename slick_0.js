// Basic initialization is like this:
// $('.your-class').slick();

// I added some other properties to customize my slider
// Play around with the numbers and stuff to see
// how it works.
$(document).ready(function() {
    $(".promotions-carousel").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      centerPadding: '40px',
      centerMode: true,    
       
    });
  });