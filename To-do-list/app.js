const todoInputEl = document.querySelector(".todo-input");
const todoListEl = document.querySelector(".todo__list");
const todoItemEls = document.querySelectorAll(".todo__item");


//add cross for all items

function showCross () {
    todoListEl.addEventListener("mouseover", function(event) {
        if (event.target.classList.contains("todo__item")) {
            event.target.classList.add("close");
        }
    })
}

function hideCross() {
    todoListEl.addEventListener("mouseout", function(event) {
        if (event.target.classList.contains("todo__item")) {
            event.target.classList.remove("close");
        }
    })
}

function addListItem () {
    todoInputEl.addEventListener("keypress", function (event) {
        if (event.keyCode === 13) {
            let newListItem = createListItem(todoInputEl.value);
            todoListEl.insertBefore(newListItem, todoListEl.childNodes[0]);
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

hideCross();
showCross();
addListItem();
toggleDone();

// 1. create a css of a cros or word delete on hover
// 2. create an event for the parent
// 3. loop it?
