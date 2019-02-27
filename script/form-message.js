let closeMessage = (function(){
  let messageWindow = document.querySelector('.message');
  let messageButton = document.querySelector('.message__button');

  function init(){
    if (getComputedStyle(messageWindow).display !== 'none'){
      if (getComputedStyle(messageWindow).visibility === 'visible')
      messageButton.addEventListener('click', function(){
        messageWindow.style.visibility = 'hidden';
      })
    }
  }

  return {
    init: init
  }
})()