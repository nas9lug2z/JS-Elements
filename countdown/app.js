let days = document.querySelector(".timer__days");
let hours = document.querySelector(".timer__hours");
let minutes = document.querySelector(".timer__minutes");
let seconds = document.querySelector(".timer__seconds");

const today = Date();

// const daysLeft = 5;
// const hoursLeft = 3;
// const minutesLeft = 23;
// const secondsLeft = 55;

// days.innerHTML = daysLeft;
// hours.innerHTML = hoursLeft + daysLeft*24;



function getTimeDifference (start, end) {

}

console.log(new Date())


//function of input should be string with 0 in case  it is smaller than
function addInitialZero() {
}




// function countTime(time, speed, range) {
//     timeNum = Number(time.innerHTML);
//     let roundsCounter = Math.floor(timeNum/range);
//     console.log(roundsCounter);
//     let remainder = timeNum % range;
//     console.log(remainder);
//     //creating a rounds variable in order to count rounds
//     if (timeNum >= range) {

//         for (let i = roundsCounter; i > 0; i--) {
//             timeNum = remainder;
//             console.log(timeNum);
//         }
//     }

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
//             time.nextElementSibling.innerHTML = time.nextElementSibling.innerHTML.slice(0, this.length-1);
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