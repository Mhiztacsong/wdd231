document.addEventListener("DOMContentLoaded", () => {
    const dialogBox = document.getElementById("dialog-box");
    const dialogText = document.getElementById("dialog-text");
    const closeModal = document.querySelector(".close");
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", () => {
            dialogText.textContent = button.getAttribute("data-info");
            dialogBox.showModal()
        });
    });

    closeModal.addEventListener("click", () => {
        dialogBox.close();
    });

    window.addEventListener("click", (event) => {
        if (event.target === dialogBox) {
            dialogBox.close();
        }
    });
});
