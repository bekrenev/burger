let modal = (function(options) {
  let item = document.querySelectorAll(options.item);
  let body = document.querySelector('body');

  let modalWindow = document.getElementById('modal');
  let closeButton = document.getElementById('modalCloseButton');
  let modalTitle = document.getElementById('modalTitle');
  let modalDescription = document.getElementById('modalDescription');

  let _changeModal = function(event) {
    let closeClass = 'closed';
    modalWindow.classList.toggle(closeClass);
    body.classList.toggle('body-active-menu');
  }

  item.forEach(function(element, i, item) {
    let trigger = element.lastElementChild.lastElementChild;
    let title = element.lastElementChild.children[0];
    let description = element.lastElementChild.children[1];

    let _openModal = function(event) {
      modalTitle.innerHTML = title.dataset.name;
      modalDescription.innerHTML = description.dataset.description;
      _changeModal();
    }

    let addListeners = function() {
      trigger.addEventListener('click', _openModal);
      closeButton.addEventListener('click', _changeModal);
    };
  
  return addListeners();
  });

})({
  item: '.review__item'
});