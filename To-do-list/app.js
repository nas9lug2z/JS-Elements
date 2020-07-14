const todoInputEl = document.querySelector(".todo-input");
const todoListEl = document.querySelector(".todo__list");
const todoItemEls = document.querySelectorAll(".todo__item");




function addListItem () {
    todoInputEl.addEventListener("keypress", function (event) {
        if (event.keyCode === 13) {
            let newListItem = createListItem(todoInputEl.value);
            todoListEl.insertBefore(newListItem, todoListEl.childNodes[0]);
            todoInputEl.value = "";
        }
    })
}


// function createListItem (text) {
//     const newListEl = document.createElement("li");
//     newListEl.textContent = text;
//     newListEl.classList.add("todo__item");
//     return newListEl;
// }

function createListItem (text) {
    const itemContent = <li class="todo__item">
                            <span class="text">{$text}</span>
                            <div class="cross-div">
                                <span class="cross first-bar"></span>
                                <span class="cross second-bar"></span>
                            </div>
                        </li>


}



function toggleDone() {
    todoListEl.addEventListener("click", function(event) {
        if (event.target.classList.contains("todo__item")){
            event.target.classList.toggle("done");
        }
    })
}





// hideCross();
// showCross();
addListItem();
toggleDone();

// 1. create a css of a cros or word delete on hover
// 2. create an event for the parent
// 3. loop it?
