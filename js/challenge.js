document.addEventListener("DOMContentLoaded", () => {
    const timer = document.getElementById("counter");
    const minusButton = document.getElementById("minus");
    const plusButton = document.getElementById("plus");
    const heartButton = document.getElementById("heart");
    const pauseButton = document.getElementById("pause");
    const likes = document.getElementsByClassName("likes");

    let likesArray = new Array();

    let pageTimer = setInterval(upTick, 1000);


    plusButton.addEventListener("click", function() {
        const counter = timer.innerText;
        let temp = parseInt(counter);

        timer.innerText = ++temp;
    })

    minusButton.addEventListener("click", function() {
        const counter = timer.innerText;
        let temp = parseInt(counter);

        timer.innerText = --temp;
    })

    heartButton.addEventListener("click", function() {
        const number = timer.innerText;
        const temp = parseInt(number);

        if (likesArray[temp - 1] === undefined) {
            likesArray[temp - 1] = 0;
        }
        likesArray[temp - 1] += 1;

        likes.innerText = likesArray[temp - 1];
    })

    pauseButton.addEventListener("click", function() {
        let pause = clearInterval(pageTimer);

        if (pause == 1) {
            minusButton.disabled = false;
            plusButton.disabled = false;
            heartButton.disabled = false;
            pauseButton.innerText = "pause"
        } else {
            minusButton.disabled = true;
            plusButton.disabled = true;
            heartButton.disabled = true;
            pauseButton.innerText = "Resume"
        }
    })

    function upTick() {
        const counter = timer.innerText;
        let temp = parseInt(counter);

        timer.innerText = ++temp;
    }
});