const list = document.querySelector(".todo__list");
const item = document.querySelectorAll(".todo__item");
const input = document.querySelector(".todo-input");


function addNewItem () {
    input.addEventListener("keypress", function (event) {
        //define input value to a variable
        const text = input.value;
        //create an element with a cross
        const toDo = `<li class="todo__item"><span class="text">${text}</span><div class="cross-div"><span class="cross first-bar"></span><span class="cross second-bar"></span></div></li>`
        //check if ENTER is pressed
        if (event.keyCode === 13) {
            //check if input is not empty
            if (text !== ""); {
                list.insertAdjacentHTML("afterbegin", toDo);
                input.value = "";
            }
        }
    })
}

//creating function to cross out done event

function toggleChecked () {
    list.addEventListener("click", function(event) {
        if (event.target.classList.contains("text") || event.target.classList.contains("text done")){
            event.target.classList.toggle("done");
        }
    })
}


function deleteItem() {
    list.addEventListener("click", function(event) {
        const targetEl = event.target;
        const parentEl = targetEl.parentElement;
        if (targetEl.classList.contains("cross-div")){
            parentEl.classList.toggle("display-none");
        }
    })
}


deleteItem();
toggleChecked();
addNewItem();
