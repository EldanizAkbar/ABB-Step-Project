let burger = document.getElementsByClassName('header__burger')[0];
let firstLine = document.getElementsByClassName('header__burger-line')[0];
let secondLine = document.getElementsByClassName('header__burger-line')[1];
let thirdLine = document.getElementsByClassName('header__burger-line')[2];
let menu = document.getElementsByClassName('header__menu')[0];

burger.addEventListener('click', () => {
    firstLine.classList.toggle('header__burger-line_invisible');
    secondLine.classList.toggle('header__burger-line_direction_right');
    thirdLine.classList.toggle('header__burger-line_direction_left-up');
    menu.classList.toggle('header__menu_active');
})

// let menuBtn = document.querySelector('#menu-btn');
// let navbar = document.querySelector('.header .navbar');

// document.querySelector('#menu-btn').onclick = () => {
//     menuBtn.classList.toggle('fa-x');
//     navbar.classList.toggle('active');
// }
// window.onscroll = () => {
//     navbar.classList.remove('active');
// }