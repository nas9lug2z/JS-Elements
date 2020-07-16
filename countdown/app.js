let days = document.querySelector(".timer__days");
let hours = Number(document.querySelector(".timer__hours").innerHTML);



const today = Date();
console.log(today)
console.log(hours)

function countTime(time, range) {
    setInterval(function() {
        timeNum = Number(time.innerHTML);
        if (timeNum === 0) {
            clearInterval(countTime);
        }
        else if (timeNum === 1) {
            timeNum--;
            time.nextElementSibling.innerHTML = "Days";
            time.innerHTML =  "0" + timeNum;
        }
        else if (timeNum === 2) {
            timeNum--;
            time.nextElementSibling.innerHTML = "Day";
            time.innerHTML =  "0" + timeNum;
        }
        else if (timeNum < 10) {
            timeNum--;
            time.nextElementSibling.innerHTML = "Days";
            time.innerHTML =  "0" + timeNum;
        }
        else {
            timeNum--;
            time.nextElementSibling.innerHTML = "Days";
            time.innerHTML = timeNum;
        }
    }, 1000);
}


// function countHours() {
//     setInterval(function() {
//         if (hours === 0) {
//             document.querySelector(".timer__hours").nextElementSibling.innerHTML = "Hours";
//             clearInterval(countHours);
//         }
//         else if (hours === 2) {
//             hours--;
//             document.querySelector(".timer__hours").nextElementSibling.innerHTML = "Hour";
//             document.querySelector(".timer__hours").innerHTML =  "0" + hours;
//         }
//         else if (hours < 10) {
//             hours--;
//             document.querySelector(".timer__hours").innerHTML =  "0" + hours;
//         }
//         else {
//             hours--;
//             document.querySelector(".timer__hours").innerHTML = hours;
//         }
//     }, 1000);
// }

// countHours();
countTime(days, 07);
