const toggleButton = document.querySelector(".menu-toggle");
const menuLinks = document.querySelector(".menu-links");
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

function toggleMenu() {
    menuLinks.classList.toggle("active");
}
toggleButton.addEventListener("click", toggleMenu)

function handleResize() {
    const menu = document.querySelector(".menu-links")
    if (window.innerWidth > 1000){
        menu.classList.add("active");
    }
    else {
        menu.classList.remove("active")
    } 
}
window.addEventListener("resize", handleResize);

function openModal(e) {
    const img = e.target.closest('img');
    if (!img) return;
        const lowResSrc = img.getAttribute('src');
        const highResSrc = lowResSrc.replace("-sm","-full");
        modalImage.src = highResSrc;
        modal.showModal();
}
gallery.addEventListener('click', openModal);

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});