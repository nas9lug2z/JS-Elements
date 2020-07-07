const triggerEl = document.querySelector(".trigger");
const popupEl = document.querySelector(".modal");
const closeEl = document.querySelector("button.close");

//popup on click
triggerEl.addEventListener("click", popup);
function popup() {
    popupEl.classList.add("open");
}

//close it on click of cross

closeEl.addEventListener("click", closeFun);

function closeFun() {
    popupEl.classList.remove("open");
}

