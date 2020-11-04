const counter = document.getElementById("counter")
let count = parseInt(counter.innerText)
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const pause = document.getElementById("pause")
const heart = document.getElementById("heart")
let liked = document.getElementsByClassName("likes")[0]
let likes = {};
const element = document.getElementById("comment-form")
const list = document.getElementById("list")
const comment = document.getElementById("comment-input")
let comments = []


function startTime() {
    myTime = setInterval(addTime, 1000);  
}

function addTime() {
    count += 1;
    counter.innerText = count;
}

function lessTime() {
    count -= 1;
    counter.innerText = count;
}

function pauseTime() {
    if (minus.disabled == true) {
        startTime()
        plus.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
        pause.innerText = ("pause");
    } else {
        clearInterval(myTime);
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
        pause.innerText = ("resume");
    };
}

function likeTime() {
    if (likes[count]) {
        likes[count]++
        let li = document.querySelector(`[data-id="${count}"]`)
        li.textContent = (`${count} has been liked ${likes[count]} times!`);
    } else {
        likes[count] = 1
        let li = document.createElement("li");
        li.dataset.id = count;
        li.textContent = `${count} has been liked 1 time!`;
        liked.append(li)
    };
};



document.addEventListener("DOMContentLoaded", () => {
    startTime();
    element.addEventListener('submit', function(event){
        event.preventDefault();
        comments.push(comment.value);
        let p = document.createElement("p");
        p.innerText = comments.slice(-1)
        list.appendChild(p)
    });
});

plus.addEventListener('click', addTime);
minus.addEventListener('click', lessTime);
pause.addEventListener('click', pauseTime);
heart.addEventListener('click', likeTime);
