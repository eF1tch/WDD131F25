const toggleButton = document.querySelector(".menu-toggle");
const menuLinks = document.querySelector(".menu-links");

toggleButton.addEventListener("click", function() {
    menuLinks.classList.toggle("active");
});
