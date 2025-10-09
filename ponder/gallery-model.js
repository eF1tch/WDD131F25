const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    
// Code to show modal  - Use event parameter 'e' - Added notes to code to help learn

    if (e.target.tagName === 'IMG') { //checks if the element clicked was an image

        const lowResSrc = e.target.src; //gets the source of the image
        const highResSrc = lowResSrc.replace("-sm","-full");//Changed the filepath from -sm to -full
        modalImage.src = highResSrc; //sets the models source to the high res image
        modal.showModal(); //Opens the model

    }
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});