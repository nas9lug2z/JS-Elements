const task = document.querySelectorAll(".task");
const addInput = document.querySelector("#add");
const ulList = document.querySelector("ul");





function toggleDone() {
    for (let item of task){
        item.addEventListener('click', (e) => {
                if (e.target.classList.contains("cross") !== true) {
                    item.firstChild.classList.toggle("done")
                }
                else {
                    item.parentNode.removeChild(item);
                }
        });
    }
}

function addNewTask() {
        addInput.addEventListener('keypress', (e) => {
            if (addInput.value !== "" && e.keyCode === 13) {
                let newTask = document.createElement('li');
                newTask.className = 'task';
                newTask.innerHTML = '<span class="text">' + addInput.value + '</span><span class="cross">X</span>'
                ulList.appendChild(newTask);
                console.log(newTask);
                toggleDone();
            }
        })
   

}

toggleDone();
addNewTask();
