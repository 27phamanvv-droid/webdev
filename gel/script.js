// Animate image on load
window.onload = function () {
    const img = document.getElementById("images/image.jpg");
    img.style.transform = "scale(1.05)";
};

// Button click anitation
const buttons = document.querySelectorAll(".link-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        btn.style.transform = "scale(0.9)";
        
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);
    });
});

// Small floating animation for the haslambrockgpt image
let floatUp = true;
setInterval(() => {
    const img = document.getElementById("heroimg");

    if (floatUp) {
        img.style.transform = "translateY(-5px)";
    } else {
        img.style.transform = "translateY(5px)";
    }

    floatUp = !floatUp;
}, 800);