// JavaScript for interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Example: Add event listeners or dynamic content here
    const feedbackButtons = document.querySelectorAll('button[title^="Rate"]');
    const feedbackTextarea = document.querySelector('textarea');
    const submitButton = document.querySelector('button[type="button"].self-center');

    feedbackButtons.forEach(button => {
        button.addEventListener('click', function() {
            const rating = this.getAttribute('title').split(' ')[1]; // Get the rating from the button title
            console.log(`User rated: ${rating} stars`);
        });
    });

    submitButton.addEventListener('click', function() {
        const feedbackMessage = feedbackTextarea.value;
        console.log(`User feedback: ${feedbackMessage}`);
        // Here you can add functionality to send the feedback to a server or process it further
    });

    console.log('Website loaded successfully!');

    // Navbar toggler functionality
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.getElementById('navbarNav');

    navbarToggler.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show'); // Toggle the visibility of the navbar
    });

    // Sidebar toggle functionality
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
