document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.style.zIndex = navLinks.classList.contains('active') ? 1003 : 1002; // Adjust z-index
    });

    navLinks.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            navLinks.classList.remove('active');
            menuToggle.style.zIndex = 1002; // Reset z-index
        }
    });
});
