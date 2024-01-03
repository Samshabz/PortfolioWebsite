document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('nav ul li a');
    links.forEach(function(link) {
        if (link.href === window.location.href) {
            link.parentElement.classList.add('active');
        }
    });
});
