const todoInputEl = document.querySelector(".todo-input");
const todoListEl = document.querySelector(".todo__list");
const todoItemEls = document.querySelectorAll(".todo__item");


function addListItem () {
    todoInputEl.addEventListener("keypress", function (event) {
        if (event.keyCode === 13) {
            let newListItem = createListItem(todoInputEl.value);
            todoListEl.appendChild(newListItem);
            todoInputEl.value = "";
        }
    })
}


function createListItem (text) {
    const newListEl = document.createElement("li");
    newListEl.textContent = text;
    newListEl.classList.add("todo__item");
    return newListEl;
}

//doesn't work.
// function toggleDone () {
//     for (let elem of todoItemEls) {
//         elem.addEventListener("click", function() {
//             elem.classList.toggle("done");
//         })
//     }
// }

function toggleDone() {
    todoListEl.addEventListener("click", function(event) {
        if (event.target.classList.contains("todo__item")){
            event.target.classList.toggle("done");
        }
    })
}


addListItem();
toggleDone();


