const btnMenu = document.getElementById("menu-hamburger");
const nav = document.querySelector("nav");

btnMenu.addEventListener('click', () => {
    nav.classList.toggle("active");
    if(nav.classList.contains("active")){
        btnMenu.classList.remove("fa-bars");
        btnMenu.classList.add("fa-x");
    }else{
        btnMenu.classList.remove("fa-x");
        btnMenu.classList.add("fa-bars");
    }
})