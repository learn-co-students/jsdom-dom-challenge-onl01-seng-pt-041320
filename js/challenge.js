setInterval(setTime, 1000);
let counter = document.getElementById('counter');
let count = counter.innerHTML;

function setTime() {
  count++;
  counter.innerHTML = count;
  
}

  let minus = document.getElementById('minus');
  minus.onclick = function() {
  count--;
  counter.innerHTML = count;
  };

  let plus = document.getElementById('plus');
  plus.onclick = function() {
  count++;
  counter.innerHTML = count;
  };

  let heart = document.getElementById('heart');
  clicks = 0

  heart.onclick = function() {
      let currentCount = count
      currentCount.numOfClicks = clicks
      likes = document.querySelector('.likes'); 

      if (currentCount.numOfClicks > 1) {
        let currentCount = count
        li.appendChild()
        li.innerText = `${currentCount} has been liked ${currentCount.numOfClicks++} times`;
      } else {
        li = document.createElement('li');
        li.innerText = `${currentCount} has been liked 1 time`;
      }
      likes.appendChild(li)
  };
  