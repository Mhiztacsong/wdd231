const openModal = document.querySelector('#open-modal');
const closeModal = document.querySelector('#close-modal');
const dialogBox = document.querySelector('#dialog-box');

openModal.addEventListener('click', () => {
    dialogBox.showModal();
})

closeModal.addEventListener('click', () => {
    dialogBox.close();
})