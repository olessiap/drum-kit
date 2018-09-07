function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) //select the audio element
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    audio.currentTime = 0;  //restart audio so it keeps playing on press without a lag
    audio.play();

    key.classList.add("playing");//adds transformation 
    const keys = document.querySelectorAll('.key'); //selects nodes of all keys 

    function removeTransition(e) {
      if (e.propertyName !== 'transform') return;
      e.target.classList.remove('playing');
    }
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))
  }

  window.addEventListener('keydown', playSound)