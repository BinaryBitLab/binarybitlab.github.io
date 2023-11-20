document.addEventListener('DOMContentLoaded', function() {
    // Get the element
    var iframeContainer = document.querySelector('.lsd');
  
    // Function to move the element up
    function moveUp() {
      iframeContainer.style.transform = 'translateY(-50%)';
    }
  
    // Set a timeout to call the moveUp function after 5 seconds
    setTimeout(moveUp, 1000);
  });
 
document.addEventListener('DOMContentLoaded', function() {
    // Get the element
    var secondSection = document.querySelector('.second-section');
  
    // Function to slide in from the right
    function slideIn() {
      secondSection.style.transform = 'translateX(calc(100% - ' + secondSection.offsetWidth + 'px))';
    }
  
    // Set a timeout to call the slideIn function after a delay (adjust as needed)
    setTimeout(slideIn, 1000);
  });
  