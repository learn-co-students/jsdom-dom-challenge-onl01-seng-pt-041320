//time increments every second once page loads -
//plus and minus buttons increment counter 
//like button can "like" a number. Have to display count of likes for a number 
//pause button pauses counter, disables everything but pause button, 
//when paused, pause button becomes "resume" button 
//resume button starts counter and re-enables other buttons 
//text in comment box submits to page 

document.addEventListener("DOMContentLoaded", function() {
//CLOCK!!______________________________________
  let totalTime = 0;
  const nums = document.querySelector('#counter');

  const time = setInterval(goTime, 1000);

  function goTime () {
    let i = (++totalTime);
    nums.innerText = i;
  }

  function strtTime() {
    
  }

  const stopBtn = document.querySelector('#pause');
  stopBtn.addEventListener('click', function (e) {
    clearInterval(time);
    stopBtn.innerText = "resume"
    subBtn.disabled = true;
    addBtn.disabled = true; 
    likeBtn.disabled = true;
    
    if (stopBtn.innerText == "resume") {
    e.target.addEventListener('click', function(){
      setInterval(goTime, 1000);
      stopBtn.innerText = "pause"
      subBtn.disabled = false;
      addBtn.disabled = false; 
      likeBtn.disabled = false;
      });
    }
  
  });
  
  
  
//ADD + SUBTRCT COUNTING NUMBERS!!!!____________
  let subBtn = document.querySelector('#minus');
  let addBtn = document.querySelector('#plus');

  subBtn.addEventListener('click', function() {
    nums.innerText = parseInt(nums.innerText) - 1;
  }); 

  addBtn.addEventListener('click', function() { 
    nums.innerText = parseInt(nums.innerText) + 1;
  });
//LIKES!!!!!!!____________________________________
  const likeBtn = document.querySelector('#heart');
  let count = 0
  
  likeBtn.addEventListener('click', function() {
    let likesCont = document.querySelector('.likes');
    let likesLi = document.createElement('li')
    
    likesLi.innerText = nums.innerText + " gets a like!!!";
    
    likesCont.appendChild(likesLi);
  });

  // COMMENTS!!!___________________________________________
  const commentForm = document.getElementById('comment-form');
  const commentList = document.querySelector('#list')

  commentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const commentInput = document.querySelector('#comment-input').value; 
    let container = document.createElement('ul');
    let containerLi = document.createElement('li');
    commentList.appendChild(container);
    container.appendChild(containerLi);
    containerLi.innerText = commentInput;
    commentForm.reset(); 
  
  })
    
  
    
    
})