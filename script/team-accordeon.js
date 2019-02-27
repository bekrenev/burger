let accordeonTeam = (function(options) {
  let item = document.querySelectorAll(options.item);
  let list = document.querySelector(options.list);
  let otherItems = list.children;

  item.forEach(function(element, i, item) {
    let trigger = element.firstElementChild;
    trigger.addEventListener('click', function(){
      let activeClass = 'team__item--active';
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
  });
})({
  item: '.team__item',
  list: '.team__list'
})