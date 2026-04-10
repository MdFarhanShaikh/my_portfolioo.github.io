// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true // Animations repeat on scroll
});

// Apply animations to specific elements
sr.reveal('.reveal');
sr.reveal('.reveal-left', { origin: 'left' });
sr.reveal('.reveal-right', { origin: 'right' });
sr.reveal('.reveal-bottom', { origin: 'bottom' });

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark/Light Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
});
