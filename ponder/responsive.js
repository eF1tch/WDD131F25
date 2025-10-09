// Target the menu button and the navigation.
// Add a click event listener to the menu button
// When the event happens:
//  Add and remove the hidden class from the nav.
//  Add and remove a class to change how the menu button looks.


const menu = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menu.addEventListener("click", openMenu);

function openMenu (){
    menu.classList.toggle("change");
    nav.classList.toggle("show")
}
// I need to change the Nav a css attribute from Display: none; to Display: clock; to show a stacked/styled nav