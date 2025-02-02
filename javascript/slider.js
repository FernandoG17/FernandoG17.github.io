const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
});

document.getElementById("prevBtn").addEventListener("click", () => {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].classList.add("active");
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".slide-in");

    function checkVisibility() {
        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Run once on page load
});

