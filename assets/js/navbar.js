let lastScrollY = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
        navbar.classList.remove('visible'); // Hide on scroll down
    } else {
        navbar.classList.add('visible'); // Show on scroll up
    }
    lastScrollY = currentScrollY;
});
