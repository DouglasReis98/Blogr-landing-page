const btnMenu = document.getElementById("menu-hamburger");
const nav = document.querySelector("nav");

btnMenu.addEventListener('click', () => {
    nav.classList.toggle("active");
})