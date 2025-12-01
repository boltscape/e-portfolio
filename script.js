
// JavaScript to track mouse movement and move the light effect
document.addEventListener('mousemove', function(e) {
    const cursorLight = document.getElementById('cursor-light');
    
    // Move the light to follow the cursor
    cursorLight.style.left = `${e.pageX - 750}px`; // Adjust based on light size (700px / 2)
    cursorLight.style.top = `${e.pageY - 750}px`; // Adjust based on light size (700px / 2)
 });


 document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        root: null, // Observe the entire viewport
        threshold: 0.2, // Trigger when 20% of the element is in view
    };

    const fadeInElements = document.querySelectorAll('.project-card, .intro h1, .projects-section h2');
    
    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); // Add the fade-in class when in view
            }
        });
    }, observerOptions);

    fadeInElements.forEach(element => fadeInObserver.observe(element));
});
