document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter");
    const minusButton = document.getElementById("minus");
    const plusButton = document.getElementById("plus");
    const heartButton = document.getElementById("heart");
    const pauseButton = document.getElementById("pause");
    const submit = document.getElementById("submit")
    const buttons = [minusButton, plusButton, heartButton, submit]
    let time = 0;
    let isPaused = false;

    let ticking = setInterval(startTimer, 1000);

    minusButton.addEventListener("click", function() {
        counter.innerText = `${time--}`;
    })

    plusButton.addEventListener("click", function() {
        counter.innerText = `${time++}`;
    })

    heartButton.addEventListener("click", addLikes)

    pauseButton.addEventListener("click", pauseFunction)

    function startTimer() {
        if (isPaused === false) {
            time++;
            counter.innerText = `${time}`;
        }
    }

    function addLikes() {
        let likes = document.querySelector(".likes");
        let currentTime = counter.innerText;
        let li = document.getElementById(currentTime);

        if (li) {
            let text = li.innerText;
            let textArray = text.split(" ");
            let number = Number(textArray.slice(-2, -1));

            li.innerHTML = `${currentTime} has been liked ${number + 1} times`;
        } else {
            let li = document.createElement("li");

            li.setAttribute("id", currentTime);
            likes.appendChild(li);
            li.innerHTML = `${currentTime} has been liked 1 time`;
        }
    }

    function pauseFunction() {
        if (pauseButton.innerText === "pause") {
            pause.innerText = "resume";

            buttons.forEach(function(e) {
                e.disabled = true;
            })

            isPaused = !isPaused;
        } else {
            pause.innerText = "pause";

            buttons.forEach(function(e) {
                e.disabled = false;
            })

            isPaused = !isPaused;
        }
    }
});

submit.addEventListener("click", commentList)

function commentList(e) {
    e.preventDefault();

    let list = document.getElementById("list");
    let p = document.createElement('p');

    list.appendChild(p);

    let content = document.getElementById("comment-input");

    p.innerText = `${content.value}`;
    content.value = "";
}