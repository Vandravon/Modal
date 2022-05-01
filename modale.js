const modal = document.querySelector(".modal");
const modalTrigger = document.querySelectorAll(".modal-trigger");

modalTrigger.forEach(trigger => trigger.addEventListener("click", modalToogle));

function modalToogle() {
    modal.classList.toggle("modal-active")
};