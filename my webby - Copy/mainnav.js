document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('nav ul');

  // Apply the fade-in effect when the page loads
  document.body.classList.add('fade-in');

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

document.addEventListener('DOMContentLoaded', (event) => {
  const links = document.querySelectorAll('a');
  const mainContent = document.querySelector('.container');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      if (this.target === '_blank') {
        return; // Do nothing for links with target="_blank"
      }
      event.preventDefault();
      const href = this.href;

      mainContent.classList.add('fade-out');

      setTimeout(() => {
        window.location.href = href;
      }, 200); // Match this to the CSS transition duration
    });
  });
});
