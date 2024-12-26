// Scroll-based animations
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});
