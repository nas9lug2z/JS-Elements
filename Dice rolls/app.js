//VERSION 0 

// const buttonEl = document.querySelector(".button");

// //add all img to an array of objects
// const imgArr = [];
// imgArr.push(document.querySelector(".dice1"));
// imgArr.push(document.querySelector(".dice2"));
// imgArr.push(document.querySelector(".dice3"));
// imgArr.push(document.querySelector(".dice4"));
// imgArr.push(document.querySelector(".dice5"));
// imgArr.push(document.querySelector(".dice6"));


// //get random number from 0 to 5 =>> that'why it is * 6 and FLOOR
// function getRandomIntInclusive() {
//     return Math.floor((Math.random() * 6));
//   }

// function main() {
//     buttonEl.addEventListener("click", roll);

//     function roll() {
//         let randomNum = getRandomIntInclusive();
//         for (let i=0; i<6; i++){
//             if (i === randomNum) {
//                 imgArr[i].classList.add("show");
//             }
//             else {
//                 imgArr[i].classList.remove("show");
//             }
//         }
//     }
// }

// main();


//VERSION 1

const buttonEl = document.querySelector(".button");
const diceImg = document.querySelector(".diceimg");

//get random number from 0 to 5 =>> that'why it is * 6 and FLOOR
function getRandomIntInclusive() {
    return 1 + Math.floor(Math.random() * 6);
  }

function main() {
    buttonEl.addEventListener("click", function() {
        let randomNum = getRandomIntInclusive();
        diceImg.src = `images/dice${randomNum}.png`;
    });
}

main();