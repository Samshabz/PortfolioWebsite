$(document).ready(function() {
  // Initialize the carousel
  $('#achievementCarousel').carousel({
      // Carousel options (if any)
  });

  // Initialize TouchSwipe for the carousel
  $('#achievementCarousel').swipe({
      swipeLeft: function(event, direction, distance, duration, fingerCount) {
          $(this).carousel('next');
      },
      swipeRight: function(event, direction, distance, duration, fingerCount) {
          $(this).carousel('prev');
      },
      threshold: 0
  });

  // Optional: Carousel slide change event
  $('#achievementCarousel').on('slide.bs.carousel', function () {
      console.log('Carousel slide changed');
  });
});
