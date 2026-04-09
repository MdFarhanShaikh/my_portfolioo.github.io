const text = "A passionate student and developer."; let index = 0;

function typeEffect() { if (index < text.length) { document.getElementById("typing").innerHTML += text.charAt(index); index++; setTimeout(typeEffect, 50); } }

typeEffect();

