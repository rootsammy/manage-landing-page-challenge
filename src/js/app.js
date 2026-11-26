import "../input.css";

let menuIcon = document.querySelector(".menu-icon");
let xIcon = document.querySelector(".x-icon");
let mobileMenu = document.querySelector(".mobile-nav");

// Show nav
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("hidden");
    xIcon.classList.toggle("hidden");
    mobileMenu.classList.remove("-translate-y-100")
    mobileMenu.classList.toggle("hidden");
});

// Hide nav
xIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("hidden");
    xIcon.classList.toggle("hidden");
    mobileMenu.classList.add("-translate-y-100")
    mobileMenu.classList.toggle("hidden");
})
