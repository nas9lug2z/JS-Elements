const loadingBar = document.querySelector(".loading-bar__item");
//1000ms = 1s. setInterval(function, interval)


//loading until 100
    // let width = 1;
    // let bar = setInterval(function() {
    //     if (width >= 100) {
    //         clearInterval(bar);
    //     }
    //     else {
    //         width++;
    //         loadingBar.style.width = width + "%";
    //     }
    // }, 25);


//loading by clicking button 30 or 60

const button30 = document.querySelector(".button-30");
const button60 = document.querySelector(".button-60");



button30.addEventListener("click", function() {
        let width = 1;
        let bar = setInterval(function() {
            if (width >= 30) {
                clearInterval(bar);
            }
            else {
                width++;
                loadingBar.style.width = width + "%";
            }
    }, 25)
});

    button60.addEventListener("click", function() {
        let width = 1;
        let bar = setInterval(function() {
            if (width >= 60) {
                clearInterval(bar);
            }
            else {
                width++;
                loadingBar.style.width = width + "%";
            }
    }, 25)
});
