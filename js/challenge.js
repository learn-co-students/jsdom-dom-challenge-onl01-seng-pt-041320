document.addEventListener("DOMContentLoaded", () => {
    const timer = document.getElementById("counter");
    const minus = document.getElementById("minus");
    const plus = document.getElementById("plus");
    const heart = document.getElementById("heart");
    const pause = document.getElementById("pause");
    const likes = document.getElementsByClassName("likes");

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
        let likesCount = likes.innerText;


    })

    pause.addEventListener("click", function() {

    })

    function upTick() {
        const counter = timer.innerText;
        let temp = parseInt(counter);

        timer.innerText = ++temp;
    }
});