let days = document.querySelector(".timer__days");
let hours = document.querySelector(".timer__hours");
let minutes = document.querySelector(".timer__minutes");
let seconds = document.querySelector(".timer__seconds");


// const daysLeft = 5;
// const hoursLeft = 3;
// const minutesLeft = 23;
// const secondsLeft = 55;

// days.innerHTML = daysLeft;
// hours.innerHTML = hoursLeft + daysLeft*24;



function getTimeDifference (start, end) {
    let milliseconds = Math.floor(end.getTime() - start.getTime());
    //round up the days left
    let daysLeft = Math.floor(milliseconds / 8.64e+7);
    //find out how many hours left without full  days
    let hoursLeft = Math.floor ((milliseconds - (daysLeft * 8.64e+7)) / 3.6e+6 );
    //find out how many minutes left without full hours
    let minutesLeft = Math.floor( (milliseconds - (daysLeft * 8.64e+7) - (hoursLeft *3.6e+6)) / 60000);
    //find out seconds
    let secondsLeft = Math.floor ( (milliseconds - (daysLeft * 8.64e+7) - (hoursLeft *3.6e+6) - (minutesLeft * 60000)) / 1000);
    return {
        rDays: daysLeft,
        rHours: hoursLeft,
        rMinutes: minutesLeft,
        rSeconds: secondsLeft
    }
}

let timer = setInterval(function() {
    const startDate = new Date();
    const endDate = new Date("August 06, 2020 07:30:00");
    let timeDiffObj = getTimeDifference(startDate, endDate);
    days.textContent = timeDiffObj.rDays;
    hours.textContent = timeDiffObj.rHours;
    minutes.textContent = timeDiffObj.rMinutes;
    seconds.textContent = timeDiffObj.rSeconds;
}, 1000)

;


// function countTime(time, speed, range) {
//     timeNum = Number(time.innerHTML);

//     //function of countdown. Has to have implemented rounds.
//     setInterval(function() {

//         //create a loop for rounds countdown
//         for (let i = roundsCounter; i > 0; i--) {
//             timeNum === remainder;
//             console.log(timeNum);
//         }

//         //function of countdown without limits
//         if (timeNum === 0) {
//             clearInterval(countTime);
//         }
//         else if (timeNum === 1) {
//             timeNum--;
//             time.nextElementSibling.innerHTML += "s";
//             time.innerHTML =  "0" + timeNum;
//         }
//         else if (timeNum === 2) {
//             timeNum--;
//             time.nextElementSibling.innerHTML = time.nextE lementSibling.innerHTML.slice(0, this.length-1);
//             time.innerHTML =  "0" + timeNum;
//         }
//         else if (timeNum <= 10) {
//             timeNum--;
//             time.innerHTML =  "0" + timeNum;
//         }
//         else {
//             timeNum--;
//             time.innerHTML = timeNum;
//         }




//     }, speed);
// }

// countTime(days, 1000);
// countTime(hours, 1000, 24);
// countTime(minutesToEnd + daysToEnd*1440, 1000, 60);
// countTime(secondstoEnd + daysToEnd*86400, 1000, 60);