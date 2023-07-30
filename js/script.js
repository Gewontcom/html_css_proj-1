let burger = document.querySelector('.header-menu-icons-burger');
let cross = document.querySelector('.header-menu-icons-cross');
let menu = document.querySelector('.header-menu');


burger.addEventListener('click', function() {
    burger.style.display = "none";
    cross.style.display = "block";
    menu.style.display = "flex";
})


cross.addEventListener('click', function() {
    burger.style.display = "block";
    cross.style.display = "none";
    menu.style.display = "none";
})