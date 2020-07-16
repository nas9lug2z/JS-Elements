let days = Number(document.querySelector(".timer__days").innerHTML);
let hours = Number(document.querySelector(".timer__hours").innerHTML)


const today = Date();
console.log(today)
console.log(hours)

function countTime(time, range) {
    setInterval(function() {
        if (time === 0) {
            document.querySelector(`.timer__${time}`).nextElementSibling.innerHTML = "Days";
            clearInterval(countDays);
        }
        else if (days === 2) {
            days--;
            document.querySelector(".timer__days").nextElementSibling.innerHTML = "Day";
            document.querySelector(".timer__days").innerHTML =  "0" + days;
        }
        else if (days < 10) {
            days--;
            document.querySelector(".timer__days").innerHTML =  "0" + days;
        }
        else {
            days--;
            document.querySelector(".timer__days").innerHTML = days;
        }
    }, 1000);
}


function countHours() {
    setInterval(function() {
        if (hours === 0) {
            document.querySelector(".timer__hours").nextElementSibling.innerHTML = "Hours";
            clearInterval(countHours);
        }
        else if (hours === 2) {
            hours--;
            document.querySelector(".timer__hours").nextElementSibling.innerHTML = "Hour";
            document.querySelector(".timer__hours").innerHTML =  "0" + hours;
        }
        else if (hours < 10) {
            hours--;
            document.querySelector(".timer__hours").innerHTML =  "0" + hours;
        }
        else {
            hours--;
            document.querySelector(".timer__hours").innerHTML = hours;
        }
    }, 1000);
}

countHours();
countTime(days, 07);
