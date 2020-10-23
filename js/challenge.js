document.addEventListener("DOMContentLoaded", function() {

const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const likes = document.querySelector(".likes");
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const list = document.getElementById("list");
let number = parseInt(counter.innerText);


let timerId = setInterval(stopwatch, 1000);

minus.addEventListener("click", function() {
    number--;
    updateDisplay();
})

plus.addEventListener("click", function() {
    number++;
    updateDisplay();
})

heart.addEventListener("click", function() {
   let newLike = document.createElement("li")
   newLike.innerText = `${number} is liked.`
   likes.appendChild(newLike);
})

pause.addEventListener("click", pauseEvent); 

commentForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let newComment = document.createElement("li");
    newComment.innerHTML = commentInput.value;
    list.appendChild(newComment);
    event.target.reset();
})

function pauseEvent() {
    clearInterval(timerId);
    pause.innerHTML = "resume";
    pause.removeEventListener("click", pauseEvent);
    pause.addEventListener("click", resumeEvent);
}

 function resumeEvent() {
    timerId = setInterval(stopwatch, 1000);
    pause.innerHTML = "pause";
    pause.removeEventListener("click", resumeEvent);
    pause.addEventListener("click", pauseEvent);
 }

function updateDisplay() {
    counter.innerText = number;
}

function stopwatch() {
    counter.innerText = number += 1;
}



})