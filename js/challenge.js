let counter = document.getElementById("counter")
let likeCount = {};
let likeList = document.getElementsByClassName("likes")[0];
let commentList = document.getElementById('list');

document.addEventListener("DOMContentLoaded", function() {    
   let timer = setInterval(function(){
        incrementCounter(1)
        // counter.innerText = parseInt(counter.textContent) + 1
    }, 1000)

    document.addEventListener('click', event => {
        if(event.target.id === "minus"){
            incrementCounter(-1)
        } else if(event.target.id === "plus"){
            incrementCounter(1)
        } else if(event.target.id === "heart"){
            let number = counter.textContent

            //number has been liked already
            if(likeCount[number]) {
                likeCount[number]++
                let li = document.querySelector(`[data-id="${number}"]`)
                li.textContent = `${number} has been liked ${likeCount[number]} times!`
            } else {
            likeCount[number] = 1
            let li = document.createElement('li')
            li.dataset.id = number
            li.textContent = `${number} has been liked!`
            likeList.append(li)
            }
        } else if(event.target.id === "pause"){
            clearInterval(timer);
            document.getElementById('minus').disabled = true
            document.getElementById('plus').disabled = true
            document.getElementById('heart').disabled = true
            document.getElementById('submit').disabled = true
            event.target.textContent = "resume"
            event.target.id = 'resume'

        } else if(event.target.id === "resume") {
             timer = setInterval(function(){
                incrementCounter(1)
            }, 1000)

            document.getElementById('minus').disabled = false
            document.getElementById('plus').disabled = false
            document.getElementById('heart').disabled = false
            document.getElementById('submit').disabled = false

            event.target.textContent = "pause"
            event.target.id = "pause"
        }
    })

    document.addEventListener('submit', function(event) {
        event.preventDefault()
        let comment = event.target.comment.value 
        let p = document.createElement('p');
        p.textContent = comment
        commentList.appendChild(p)
        event.target.reset()
    })

    function incrementCounter(number) {
        counter.innerText = parseInt(counter.textContent) + 1
    }

});


// let pause_id = document.getElementById("pause")
// let minus_id = document.getElementById("minus")
// let plus_id = document.getElementById("plus")
// let heart_id = document.getElementById('heart')
// let list_id = document.getElementById("list")
// let comment_id = document.getElementsByTagName("form")[0]


// let counter = 0
// let timer = setInterval(function(){
//     counter_id.innerHTML = counter
//     counter += 1;
// }, 1000);

// plus_id.addEventListener('click', function(){
//     counter += 1;
//     counter_id.innerHTML = parseInt(counter_id.innerHTML) + 1;
// });

// minus_id.addEventListener('click', function(){
//     counter += 1;
//     counter_id.innerHTML = parseInt(counter_id.innerHTML) - 1;
// });

// pause_id.addEventListener('click', function(){

// })