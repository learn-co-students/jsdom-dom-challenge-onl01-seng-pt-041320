
  document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("comment-form")
    attachPlusEventListener()
    startTimer()

    form.addEventListener('submit', function(event) {
        let data = document.getElementById("comment-input").value
        let comment = document.createTextNode(data)
        let li = document.createElement("li")
        let list = document.getElementById("list")
        list.appendChild(li)
        li.appendChild(comment)


        event.preventDefault();
    
    });

    const globals = {
      clicks: 0
    }


    
    
    function startTimer() {
       const interval = setInterval(countUp, 1000);
       attachPauseEventListener(interval)
      }
    
    function countUp() {
        let text = document.getElementById("counter");
        let number = parseInt(text.innerText);
        text.innerText = number + 1

      }
    



    const minus = document.getElementById("minus")
    const heart = document.getElementById("heart")
    
    function attachPlusEventListener(){
      const plus = document.getElementById("plus")
      plus.addEventListener("click", function() {
          let text = document.getElementById("counter");
          let number = parseInt(text.innerText);
          text.innerText = number + 1
      })
    }

    minus.addEventListener("click", function() {
        let text = document.getElementById("counter");
        let number = parseInt(text.innerText);
        text.innerText = number - 1
    })
  
    
    heart.addEventListener("click", function() {
        let a = document.getElementById("counter")
        let b = parseInt(a.innerText)
        let likes = document.querySelector("ul")
        let currentNumber = document.querySelector(`#li-${b}`)

        if (currentNumber) {
            globals.clicks++
            currentNumber.innerText = `${b} has been liked ${globals.clicks} times`;
          } 
        else {
            globals.clicks++
            let li = document.createElement("li")
            li.id = `li-${b}`
            let like = document.createTextNode(`${b} has been liked 1 time`)
            likes.appendChild(li)
            li.appendChild(like)
          }
      });

    function attachPauseEventListener(interval){
      const pause = document.getElementById("pause")
      pause.addEventListener("click", function() {
          clearInterval(interval);
      });
    }
    


});
