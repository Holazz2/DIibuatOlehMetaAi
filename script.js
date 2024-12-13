// Efek scrolling
window.addEventListener("scroll", function() {
    const scroll = window.scrollY;
    document.querySelector("header").style.backgroundColor = `rgba(51, 51, 51, ${scroll / 100})`;
});

// Menu navigasi
document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const target = event.target.getAttribute("href");
        document.querySelector(target).scrollIntoView({ behavior: "smooth" });
    });
});