// DARK MODE
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// TYPING EFFECT
const text = "Md. Farhan Shaikh";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 100);
    }
}
typingEffect();

// IMAGE POPUP
function openImage(img) {
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup-img").src = img.src;
}

function closeImage() {
    document.getElementById("popup").style.display = "none";
}

// CLICK RIPPLE
document.addEventListener("click", function(e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";

    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
});
