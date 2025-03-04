// JavaScript for interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Example: Add event listeners or dynamic content here
    console.log('Website loaded successfully!');

    const menuToggle = document.getElementById('menu-toggle');
    const slidebar = document.getElementById('slidebar');

    menuToggle.addEventListener('click', function() {
        if (slidebar.style.left === '0px') {
            slidebar.style.left = '-250px'; // Hide the slidebar
        } else {
            slidebar.style.left = '0px'; // Show the slidebar
        }
    });
});
