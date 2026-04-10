function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// IMAGE POPUP
function openImage(img) {
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup-img").src = img.src;
}

function closeImage() {
    document.getElementById("popup").style.display = "none";
}

// SCROLL ANIMATION (ADVANCED)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});
