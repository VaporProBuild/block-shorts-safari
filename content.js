// content.js

// Function to hide YouTube Shorts elements
function hideYouTubeShorts() {
    // Find all elements with the class 'ytd-shelf-renderer' which is common in YouTube Shorts
    var shortsElements = document.querySelectorAll('.ytd-shelf-renderer');

    // Loop through each element and hide it
    shortsElements.forEach(function(element) {
        element.style.display = 'none';
    });
}

// Run the function when the page is loaded
window.onload = function() {
    hideYouTubeShorts();
};
