const todoInputEl = document.querySelector(".todo-input");
const todoListEl = document.querySelector(".todo__list");
const todoItemEl = document.querySelectorAll(".todo__item");


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

createListItem();
addListItem();

