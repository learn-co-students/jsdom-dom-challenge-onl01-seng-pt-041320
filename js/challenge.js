
  document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("comment-form")

    form.addEventListener('submit', function(event) {
        let data = document.getElementById("comment-input").value
        let comment = document.createTextNode(data)
        let li = document.createElement("li")
        let list = document.getElementById("list")
        list.appendChild(li)
        li.appendChild(comment)


        event.preventDefault();
    
    });


    
    
    function startTimer() {
        setInterval(countUp, 1000);
      }
    
    function countUp() {
        let text = document.getElementById("counter");
        let number = parseInt(text.innerText);
        text.innerText = number + 1
    
      }
    
    interval = startTimer();


    const minus=document.getElementById("minus")
    const plus=document.getElementById("plus")
    const heart=document.getElementById("heart")
    const pause=document.getElementById("pause")

    plus.addEventListener("click", function() {
        let text = document.getElementById("counter");
        let number = parseInt(text.innerText);
        text.innerText = number + 1
    })

    minus.addEventListener("click", function() {
        let text = document.getElementById("counter");
        let number = parseInt(text.innerText);
        text.innerText = number - 1
    })

    heart.addEventListener("click", function() {
        let a = document.getElementById("counter")
        let b = parseInt(a.innerText)
        let list = document.querySelector("ul")
        let li = document.createElement("li")
        let like = document.createTextNode(`You liked the number ${b}`)

        list.appendChild(li)
        li.appendChild(like)

    })
    
    pause.addEventListener("click", function() {
        clearInterval(interval);
    });
    


});
