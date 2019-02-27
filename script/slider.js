let slider = (function(options){
  let list = document.querySelector(options.list);
  let item = document.querySelectorAll(options.item);
  let arrows = document.querySelectorAll(options.arrows);

  let activeClass = 'burgers__item--active';
  let nextClass = 'burgers__item--next';
  let arrowLeftClass = 'burgers__arrow--left';
  let arrowRightClass = 'burgers__arrow--right';

  let findClass = function(array, key){
    for (let i = 0; i < array.length; i++){
      if (array[i].classList.contains(key)){
        return array[i];
      };
    };
  }

  let toNull = function(array){
    for (let i = 0; i < array.length; i++){
      array[i].style.left = 0 + 'px';
    }
  }

  let moveSlide = function(next, direction){
    let activeItem = findClass(item, activeClass);
    let slideWidth = activeItem.offsetWidth;
    let nextSlidePosition = 0;
    let activeSlidePosition = 0;

    if (direction === 'forward'){
      nextSlidePosition = slideWidth;
      activeSlidePosition = -slideWidth;
    } else if (direction === 'backward'){
      nextSlidePosition  = -slideWidth;
      activeSlidePosition = slideWidth;
    }

    next.classList.toggle(nextClass);
    next.style.left = nextSlidePosition + 'px';

    let nextItem = findClass(item, nextClass);

    setTimeout(function(){
      activeItem.style.left = activeSlidePosition + 'px';
      activeItem.classList.toggle(activeClass);
    });

    setTimeout(function(){
      nextItem.style.left = 0 + 'px';
      toNull(item);
      
      nextItem.classList.toggle(nextClass);
      nextItem.classList.toggle(activeClass);
    }, 500);

  }

  let init = function() {
    let changeSlide = function(event){
      event.target = this;
      let activeSlide = findClass(item, activeClass);
      let nextSlide = activeSlide.nextElementSibling;
      let previousSlide = activeSlide.previousElementSibling;
      let firstSlide = list.firstElementChild;
      let lastSlide = list.lastElementChild;

      if (this.classList.contains(arrowRightClass)){
        if(nextSlide !== null) {
          moveSlide(nextSlide, 'forward');
        } else {
          moveSlide(firstSlide, 'forward');
        }
      } else {
        if(previousSlide !== null) {
          moveSlide(previousSlide, 'backward');
        } else {
          moveSlide(lastSlide, 'backward');
        }
      }
    }

    arrows.forEach(function(element) {
      element.addEventListener('click', changeSlide);
    }, this);
  }

  return {
    init: init
  }

})({
  list: '.burgers__list',
  item: '.burgers__item',
  arrows: '.burgers__arrow'
});

slider.init();