const addInput = document.querySelector("#add");
const ulList = document.querySelector("ul");
const searchForm = document.querySelector("#search");

//remove item with a cross button
ulList.addEventListener('click', (e) => {
                if (e.target.classList.contains("cross") === true) {
                    let itemToBeRemoved = e.target.parentElement;
                    ulList.removeChild(itemToBeRemoved);
                }
                else if (e.target.classList.contains("task") === true) {
                    e.target.firstChild.classList.toggle("done");
                }
                else if (e.target.classList.contains("text") === true) {
                    e.target.classList.toggle("done");
                }
        });

//add new item
addInput.addEventListener('keyup', (e) => {
            if (addInput.value !== "" && e.keyCode === 13) {
                let newTask = document.createElement('li');
                newTask.className = 'task';
                newTask.innerHTML = '<span class="text">' + addInput.value + '</span><span class="cross">X</span>'
                ulList.appendChild(newTask);
                addInput.value = "";
            }
        })

//filter function
searchForm.addEventListener('input', e => {
    var text = e.target.value.toLowerCase();
    var items = ulList.getElementsByTagName("li")
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) === -1) {
            item.style.display = "none";
        }
        else {
            item.style.display = "flex";
        }
    } );
});

function saveToLocalStorage() {
    localStorage.setItem("word", "heloo");
    console.log(localStorage)
}

saveToLocalStorage();