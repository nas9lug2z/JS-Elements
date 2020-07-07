const navTriggerEl = document.querySelector(".hamburger");
const contentEl = document.querySelector(".content");
const navEl = document.querySelector("nav");
const hamgurgerBarsEl = document.querySelectorAll(".hamburger span");


function toggleNav() {
    navTriggerEl.addEventListener("click", function() {
        navEl.classList.toggle("open");
        contentEl.classList.toggle("shift");
        rotateHamb();
    })
}

function rotateHamb() {
    for (let item of hamgurgerBarsEl){
        item.classList.toggle("change");
    }
}

toggleNav()