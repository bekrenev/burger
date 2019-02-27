let menu = (function(options){
  let mobileIcon = document.querySelector(options.icon);
  let body = document.querySelector('body');
  
  let _openMenu = function(){
    mobileIcon.classList.toggle('mobile-icon--active');
    body.classList.toggle('body-active-menu'); 
  }

  let addListener = function(){
    if (mobileIcon != null){
      mobileIcon.addEventListener('click', _openMenu);
    }
  }

  return{
    init: addListener
  }
})({
  icon: '.mobile-icon'
});