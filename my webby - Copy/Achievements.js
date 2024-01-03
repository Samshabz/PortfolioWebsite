$(document).ready(function() {
    // Initialize swipe for achievements carousel
    initializeSwipe('#achievementCarousel');
});

function initializeSwipe(carouselId) {
    $(carouselId).swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') $(this).carousel('next');
            if (direction == 'right') $(this).carousel('prev');
        },
       // allowPageScroll: "vertical"
    });
}
    