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
    projects[j].classList.add("hidden");
  }

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
    threshold: 0
  });
});
