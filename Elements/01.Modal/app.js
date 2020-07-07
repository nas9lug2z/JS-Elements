const triggerEl = document.querySelector(".trigger");
const popupEl = document.querySelector(".modal");
const closeEl = document.querySelector(".close");

function main() {
    function popup() {
    popupEl.classList.toggle("open");
    }
    //popup on click
    triggerEl.addEventListener("click", popup);

    //close it on click of cross or outside
    closeEl.addEventListener("click", popup);

    //we target outside area by adding function(event) with attribute event.target
    window.addEventListener("click", function(event) {
        if (event.target === popupEl) {
            popup();
        }
    });
}

main();