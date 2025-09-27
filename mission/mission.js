// Created using the beginning JavaScript from the assignment as a template
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.classList.add("dark");
        logo.src = "byui-logo-dark.png";
    } else {
        document.body.classList.remove("dark");
        logo.src = "byui-logo-blue.webp";
    }
}