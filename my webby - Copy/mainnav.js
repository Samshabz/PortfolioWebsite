document.addEventListener("DOMContentLoaded", function() {
    // Toggle the 'show' class for the hamburger menu
    document.querySelector('.hamburger-menu').addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
    });

    // Highlight the current tab based on the URL
    var links = document.querySelectorAll('nav ul li a');
    links.forEach(function(link) {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});
