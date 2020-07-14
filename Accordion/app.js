const accorItems = document.querySelectorAll(".accordion__item");


function accordionToggle () {
    for (elem of accorItems) {
        let accHeader = elem.firstElementChild;
        accHeader.addEventListener("click", function() {
            let accDetails = this.nextElementSibling;
            if (accDetails.style.maxHeight) {
                accDetails.style.maxHeight = null;
                this.lastElementChild.innerHTML = "+"
            }
            else {
                accDetails.style.maxHeight = accDetails.scrollHeight + "px";
                this.lastElementChild.innerHTML = "-"
            }
        })
    }
}

accordionToggle();