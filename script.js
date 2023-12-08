// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the dark mode toggle button and the document body
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // Check for dark mode preference in local storage
  const darkMode = localStorage.getItem('darkMode');
  
  // Apply dark mode class to body and navigation if the preference is true
  if (darkMode === 'true') {
    body.classList.add('dark-mode');
    document.querySelector(".Navigation").classList.add("dark-mode");
  }

  // Add a click event listener to the dark mode toggle button
  darkModeToggle.addEventListener("click", function () {
    // Toggle the dark mode class on both the body and navigation
    body.classList.toggle("dark-mode");
    document.querySelector(".Navigation").classList.toggle("dark-mode");

    // Save the dark mode preference to local storage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode.toString());

    // Get the current image source
    const currentImageSrc = document.querySelector("#darkModeToggle img").src;

    // Define the light and dark mode image sources
    const lightModeImage = "imgs/darkmode.png";
    const darkModeImage = "imgs/lightmode.png";

    // Determine which mode is active and switch the image source accordingly
    const newImageSrc = isDarkMode ? darkModeImage : lightModeImage;

    // Update the image source
    document.querySelector("#darkModeToggle img").src = newImageSrc;
  });
});
