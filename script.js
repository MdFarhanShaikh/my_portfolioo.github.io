// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Scroll Animation
window.addEventListener("scroll", () => {
    let elements = document.querySelectorAll(".fade");

    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            el.classList.add("show");
        }
    });
});