const task = document.querySelectorAll(".task");
const addInput = document.querySelector("#add");
const ulList = document.querySelector("ul");
const searchInput = document.querySelector("#search");

ulList.addEventListener('click', (e) => {
                if (e.target.classList.contains("cross") === true) {
                    e.target.parentNode.style.display = "none";
                }
                else if (e.target.classList.contains("task") === true) {
                    e.target.firstChild.classList.toggle("done");
                }
                else if (e.target.classList.contains("text") === true) {
                    e.target.classList.toggle("done");
                }
        });

addInput.addEventListener('keypress', (e) => {
            if (addInput.value !== "" && e.keyCode === 13) {
                let newTask = document.createElement('li');
                newTask.className = 'task';
                newTask.innerHTML = '<span class="text">' + addInput.value + '</span><span class="cross">X</span>'
                ulList.appendChild(newTask);
                addInput.value = "";
            }
        })

