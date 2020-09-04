const button = document.querySelector(".trigger");
const modal = document.querySelector(".modal");
const cross = document.querySelector(".cross");
const container = document.querySelector(".container");

button.addEventListener('click', openModal);
cross.addEventListener('click', close);
window.addEventListener('click', close)

function openModal() {
    modal.classList.remove("close");
}

function close(e) {
    if (e.target === cross || (e.target !== modal && e.target === container))
        modal.classList.add("close");
}