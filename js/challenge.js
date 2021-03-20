let likesCounter = {};
let counter = 0;
let display = document.getElementById("counter");
let likeList = document.getElementsByClassName("likes")[0]

window.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener("click", event =>{
        if(event.target.id === 'minus'){
            display.innerHTML=counter;
            counter--;
        }
        else if(event.target.id === 'plus'){
            display.innerHTML=counter;
            counter++;
        }
        else if(event.target.id === 'heart'){
            if (likesCounter[counter]){
                likesCounter[counter]++
                let li = document.querySelector(`[data-id="${counter}"]`)
                li.textContent = `${counter} has been liked ${likesCounter[counter]} times!`
            } else {
                likesCounter[counter] = 1
                let li = document.createElement("li");
                li.dataset.id = counter;
                li.textContent = `${counter} has been liked!`;
                likeList.append(li);
            }
        }
        else if(event.target.id === 'pause'){
            clearInterval(timer)
            document.getElementById('minus').disabled=true
            document.getElementById('plus').disabled=true
            document.getElementById('heart').disabled=true
            document.getElementById('submit').disabled=true

            event.target.textContent = "resume"
            event.target.id = "resume"
        }
        else if(event.target.id === 'resume'){
            timer = setInterval(function(){
                display.innerText = counter++;
            }, 1000);

            document.getElementById('minus').disabled=false
            document.getElementById('plus').disabled=false
            document.getElementById('heart').disabled=false
            document.getElementById('resume').disabled=false

            event.target.textContent = "pause"
            event.target.id = "pause"
        }

    })

    document.addEventListener('submit', function(event){
        event.preventDefault()
        let comment = event.target.comment.value
        let p = document.createElement('p')
        p.textContent = comment
        list.appendChild(p)
        event.target.reset
    })

});
    let timer = setInterval(function(){
        display.innerText = counter++;
    }, 1000);