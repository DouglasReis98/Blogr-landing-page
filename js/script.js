const btnMenu = document.getElementById("menu-hamburger");
const nav = document.querySelector("nav");
const menu_li = document.querySelectorAll("#menu > li");
const menuSpan = document.querySelectorAll("#menu li span i");
const dropdown = document.querySelectorAll(".dropdown");

btnMenu.addEventListener('click', () => {
    nav.classList.toggle("active");
    if(nav.classList.contains("active")){
        btnMenu.classList.remove("fa-bars");
        btnMenu.classList.add("fa-x");
    }else{
        btnMenu.classList.remove("fa-x");
        btnMenu.classList.add("fa-bars");
    }
});

function menu(){
for (let i = 0; i < menu_li.length; i++) {

menu_li[i].addEventListener('mouseover', () => {
    dropdown[i].style.display = "block";
    menuSpan[i].style.transform = "rotate(180deg)";
});

menu_li[i].addEventListener('mouseout', () => {
    dropdown[i].style.display = "none";
    menuSpan[i].style.transform = "rotate(0deg)";
});
    
}

}

menu();