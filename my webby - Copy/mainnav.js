

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav ul');
    
    var links = document.querySelectorAll('nav ul li a');
    links.forEach(function(link) {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });

    hamburgerMenu.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevents event from bubbling up
      navMenu.classList.toggle('showa'); // Toggle the 'showa' class on the nav menu
      document.body.classList.toggle('no-scroll'); // Toggle the 'no-scroll' class on the body
    });
  
    // Close menu when clicking outside of it
    document.addEventListener('click', function(event) {
      if (!hamburgerMenu.contains(event.target)) {
        navMenu.classList.remove('showa'); // Remove the 'showa' class
        document.body.classList.remove('no-scroll'); // Remove the 'no-scroll' class
      }
    });
  });
  