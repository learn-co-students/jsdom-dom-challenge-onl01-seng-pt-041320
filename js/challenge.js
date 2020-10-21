document.addEventListener("DOMContentLoaded", () => {
    const timer = document.getElementById("counter");
    const minus = document.getElementById("minus");
    const plus = document.getElementById("plus");
    const heart = document.getElementById("heart");
    const pause = document.getElementById("pause");
    const likes = document.getElementsByClassName("likes");

    let likesArray = new Array();

    setInterval(upTick, 1000);

    plus.addEventListener("click", function() {
        const counter = timer.innerText;
        let temp = parseInt(counter);

        timer.innerText = ++temp;
    })

    minus.addEventListener("click", function() {
        const counter = timer.innerText;
        let temp = parseInt(counter);

        timer.innerText = --temp;
    })

    heart.addEventListener("click", function() {
        const number = timer.innerText;
        const temp = parseInt(number);

        if (likesArray[temp - 1] === undefined) {
            likesArray[temp - 1] = 0;
        }
        likesArray[temp - 1] += 1;

        likes.innerText = likesArray[temp - 1];
    })

    pause.addEventListener("click", function() {

    })

    function upTick() {
        const counter = timer.innerText;
        let temp = parseInt(counter);

        timer.innerText = ++temp;
    }
});