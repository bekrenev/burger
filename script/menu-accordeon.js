let accordeonMenu = (function(options) {
  let item = document.querySelectorAll(options.item);
  let list = document.querySelector(options.list);
  let otherItems = list.children;

  item.forEach(function(element, i, item) {
    let trigger = element.firstElementChild;
    let button = element.lastElementChild.lastElementChild;

    trigger.addEventListener('click', function(event){
      let activeClass = 'menu__item--active';
      let parent = this.parentNode;
      
        if (!parent.classList.contains(activeClass)){
          for (let j = 0; j < otherItems.length; j++){
            if (otherItems[j].classList.contains(activeClass)){
              otherItems[j].classList.toggle(activeClass);
            }
          }
        }
        parent.classList.toggle(activeClass); 
    });

    button.addEventListener('click', function(event){
      let activeClass = 'menu__item--active';
      let parent = this.parentNode.parentNode;
      parent.classList.toggle(activeClass); 
    });

  });

})({
  item: '.menu__item',
  list: '.menu__list'
})