var currentProject = 1;
var projectCount = 5;
function switchProject(projectNumber) {
  // Check if the project number is valid

  if (projectNumber > projectCount) {
    projectNumber = 1;
  }

  if (projectNumber < 1) {
    projectNumber = projectCount;
  }

  if (projectNumber < 1 || projectNumber > projectCount) {
    return;
  }


  



  // Update the current project number
  currentProject = projectNumber;

  // Remove active class from all buttons
  var buttons = document.getElementsByClassName("secondary-nav-button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // Hide all projects
  var projects = document.getElementsByClassName("project");
  for (var j = 0; j < projects.length; j++) {
    projects[j].style.opacity = '0';
    setTimeout(function(project) {
      project.classList.add("hidden");
    }, 0, projects[j]); // Delay hiding until after the transition
  }

  setTimeout(function() {
    // Show the selected project
    var selectedProject = document.getElementById("project" + currentProject);
    selectedProject.classList.remove("hidden");
    // Force reflow/repaint to ensure the transition starts
    void selectedProject.offsetWidth;
    selectedProject.style.opacity = '1';
  }, 0); // This matches the duration of the opacity transition


  // Show the selected project
  var selectedProject = document.getElementById("project" + projectNumber);
  selectedProject.classList.remove("hidden");

  // Add active class to the selected button
  buttons[projectNumber - 1].classList.add("active");

  // Disable or enable the arrows as necessary
  var arrowLeft = document.querySelector(".arrow-left");
  var arrowRight = document.querySelector(".arrow-right");
  //arrowLeft.style.visibility = (projectNumber === 1) ? "hidden" : "visible";
  //arrowRight.style.visibility = (projectNumber === projectCount) ? "hidden" : "visible";


}

// Switch to Project 1 by default
switchProject(1);



$(document).ready(function() {
  // Assuming your .container element is the swipe target
  $('.container').swipe({
    swipeLeft: function(event, direction, distance, duration, fingerCount) {
      // Trigger next project
      switchProject(currentProject + 1);
    },
    swipeRight: function(event, direction, distance, duration, fingerCount) {
      // Trigger previous project
      switchProject(currentProject - 1);
    },
    threshold: 5
  });
});


$(document).ready(function() {
  initializeSwipe('body');
  initializeSwipe('html');

  initializeSwipe('#carouselProject1');
  initializeSwipe('#carouselProject2');
  initializeSwipe('#carouselProject3');
  initializeSwipe('#carouselProject4');
  initializeSwipe('#carouselProject5');
  // ... add more initializeSwipe calls for additional project carousels
});

function initializeSwipe(carouselId) {
  $(carouselId).swipe({
      swipeStart: function(event, direction, distance, duration, fingerCount) {
          isSwiping = true; // Set flag on swipe start
      },
      swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
          event.stopPropagation(); // Stop event bubbling
          if (direction == 'left') $(this).carousel('next');
          if (direction == 'right') $(this).carousel('prev');
      },
      swipeEnd: function(event, direction, distance, duration, fingerCount) {
          isSwiping = false; // Reset flag on swipe end
      },
      allowPageScroll: "vertical",
      threshold: 5
  });
}


function openFullscreen(fullscreenId) {
  document.getElementById(fullscreenId).style.display = 'flex';
  document.body.classList.add('no-scroll');
  document.querySelector('.contenta').classList.add('blur-background');
}

function closeFullscreen(fullscreenId) {
  document.getElementById(fullscreenId).style.display = 'none';
  document.body.classList.remove('no-scroll');
  document.querySelector('.contenta').classList.remove('blur-background');
}
