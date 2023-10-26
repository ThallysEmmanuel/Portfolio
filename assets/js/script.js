const mobileMenu = document.querySelector(".mobile-menu");
const navMenu = document.querySelector(".nav-menu");

mobileMenu.addEventListener("click", ( ) => {
    mobileMenu.classList.toggle('active')
    navMenu.classList.toggle('active');
})