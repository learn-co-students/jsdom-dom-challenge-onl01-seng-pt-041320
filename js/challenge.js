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
  let clicks = 0

  heart.onclick = function() {
      let currentCount = count
      let likes = document.querySelector('.likes'); 
      let currentLike = likes.querySelector(`#li-${currentCount}`)
      if (currentLike !== null) {
        clicks++
        li.innerText = `${currentCount} has been liked ${clicks} times`;
      } else {
        clicks = 1
        li = document.createElement('li');
        li.id = `li-${currentCount}`
        li.innerText = `${currentCount} has been liked ${clicks} time`;
      }
      likes.appendChild(li)
  };

  let pause = document.getElementById('pause');

  pause.onclick = function() {
    clearInterval(setTime)
    document.querySelector(':button').prop('disabled', true);
    $(':button').prop('disabled', true);
    pause.innerHTML = "resume"
  }
  