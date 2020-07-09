const buttonEl = document.querySelector(".button");

//add all img to an array of objects
const imgArr = [];
imgArr.push(document.querySelector(".dice1"));
imgArr.push(document.querySelector(".dice2"));
imgArr.push(document.querySelector(".dice3"));
imgArr.push(document.querySelector(".dice4"));
imgArr.push(document.querySelector(".dice5"));
imgArr.push(document.querySelector(".dice6"));


//get random number
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function main() {
    buttonEl.addEventListener("click", roll);

    function roll() {
        let randomNum = getRandomIntInclusive(0, 5);
        for (let i=0; i<6; i++){
            if (i === randomNum) {
                imgArr[i].classList.add("show");
            }
            else {
                imgArr[i].classList.remove("show");
            }
        }
    }
}

main();