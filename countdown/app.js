let days = Number(document.querySelector(".timer__day").innerHTML);
let hours = Number(document.querySelector(".timer__hour").innerHTML)


const today = Date();
console.log(today)
console.log(hours)

function countDays() {
    setInterval(function() {
        if (days === 0) {
            document.querySelector(".timer__day").nextElementSibling.innerHTML = "Days";
            clearInterval(countDays);
        }
        else if (days === 2) {
            days--;
            document.querySelector(".timer__day").nextElementSibling.innerHTML = "Day";
            document.querySelector(".timer__day").innerHTML =  "0" + days;
        }
        else if (days < 10) {
            days--;
            document.querySelector(".timer__day").innerHTML =  "0" + days;
        }
        else {
            days--;
            document.querySelector(".timer__day").innerHTML = days;
        }
    }, 1000);
}


function countHours() {
    setInterval(function() {
        if (hours === 0) {
            document.querySelector(".timer__hour").nextElementSibling.innerHTML = "Hours";
            clearInterval(countHours);
        }
        else if (hours === 2) {
            hours--;
            document.querySelector(".timer__hour").nextElementSibling.innerHTML = "Hour";
            document.querySelector(".timer__hour").innerHTML =  "0" + hours;
        }
        else if (hours < 10) {
            hours--;
            document.querySelector(".timer__hour").innerHTML =  "0" + hours;
        }
        else {
            hours--;
            document.querySelector(".timer__hour").innerHTML = hours;
        }
    }, 1000);
}

countHours();
countDays();
