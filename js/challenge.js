let counter = document.getElementById("counter")
let likeCount = {}
let likeList = document.getElementsByClassName("likes")[0]
let commentList = document.getElementById("list")

document.addEventListener("DOMContentLoaded", function(event) {

  let timer = setInterval(function() {
    incrementCounter(1)
  }, 1000)

  document.addEventListener("click", event => {
    if(event.target.id === "minus"){
      incrementCounter(-1)
    }
    else if(event.target.id === "plus"){
      incrementCounter(1)
    }
    else if(event.target.id === "heart"){
      let number = counter.textContent
      if(likeCount[number]) {
        likeCount[number]++
        let li = document.querySelector(`[data-id="${number}"]`)
        li.textContent = `${number} has been liked ${likeCount[number]} times!`
      } else {
        likeCount[number] = 1
        let li = document.createElement("li")
        li.dataset.id = number
        li.textContent = `${number} has been liked times!`
        likeList.append(li)
      }
    } 
    else if(event.target.id === "pause"){
      clearInterval(timer)
      document.getElementById("minus").disabled = true 
      document.getElementById("plus").disabled = true
      document.getElementById("heart").disabled = true
      document.getElementById("submit").disabled = true
      event.target.textContent = "resume"
      event.target.id = "resume"
    }
    else if(event.target.id === "resume"){
      timer = setInterval(function() {
        incrementCounter(1)
      }, 1000)
      document.getElementById("minus").disabled = false 
      document.getElementById("plus").disabled = false
      document.getElementById("heart").disabled = false
      document.getElementById("submit").disabled = false
      event.target.textContent = "pause"
      event.target.id = "pause"
    }
  })
})

document.addEventListener("submit", function(event) {
  event.preventDefault()
  let comment = event.target.comment.value
  let p = document.createElement("p")
  p.textContent = comment
  list.append(p)
  event.target.reset 
})

function incrementCounter(number) {
  counter.innerText = parseInt(counter.textContent) + number
}