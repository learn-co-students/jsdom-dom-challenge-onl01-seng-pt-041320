document.addEventListener("DOMContentLoaded", function () {

  let timer = setInterval(setTime, 1000);



  let counter = document.getElementById('counter');
  let count = counter.innerHTML;

  function setTime() {
    count++;
    counter.innerHTML = count;
  }

  let minus = document.getElementById('minus');
  minus.onclick = function () {
    count--;
    counter.innerHTML = count;
  };

  let plus = document.getElementById('plus');
  plus.onclick = function () {
    count++;
    counter.innerHTML = count;
  };

  let heart = document.getElementById('heart');
  let clicks = 0

  heart.onclick = function () {
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
  let buttons = document.getElementsByTagName('button');


  pause.onclick = function () {
    if (pause.innerHTML != 'resume') {
      window.clearInterval(timer);
      for (let el of buttons) {
        if (el.id != 'pause') {
          el.disabled = true;
        };
        pause.innerHTML = 'resume';
      };
    };
    };
 

  pause.onclick = function () {
    if (pause.innerHTML != 'resume') {
      window.clearInterval(timer);
      for (let el of buttons) {
        if (el.id != 'pause') {
          el.disabled = true;
        };
        pause.innerHTML = 'resume';
      };
    };

    
  };
    
  let resume = document.getElementById('pause')
  pause.onclick = function () {
    if (pause.innerHTML === 'resume') {
      timer = setInterval(setTime, 1000);
      for (let el of buttons) {
          el.disabled = false;
        };
        pause.innerHTML = 'resume';
    };
    };
  
  });
    
