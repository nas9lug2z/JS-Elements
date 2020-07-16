let days = document.querySelector(".timer__days");
let hours = document.querySelector(".timer__hours");
let minutes = document.querySelector(".timer__minutes");
let seconds = document.querySelector(".timer__seconds");

const today = Date();

//have to add rangeMax instead of set in HTML
function countTime(time, speed, rangeMax) {
    setInterval(function() {
        timeNum = Number(time.innerHTML);
        if (timeNum === 0) {
            clearInterval(countTime);
        }
        else if (timeNum === 1) {
            timeNum--;
            time.nextElementSibling.innerHTML += "s";
            time.innerHTML =  "0" + timeNum;
        }
        else if (timeNum === 2) {
            timeNum--;
            time.nextElementSibling.innerHTML = time.nextElementSibling.innerHTML.slice(0, this.length-1);
            time.innerHTML =  "0" + timeNum;
        }
        else if (timeNum <= 10) {
            timeNum--;
            time.innerHTML =  "0" + timeNum;
        }
        else {
            timeNum--;
            time.innerHTML = timeNum;
        }
    }, speed);
}


countTime(days, 1000);
countTime(hours, 1000);
countTime(minutes, 1000);
countTime(seconds, 1000);