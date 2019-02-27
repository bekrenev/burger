menu.init();

//scroll start
$('.main-content').onepage_scroll({
  beforeMove: function(index){
    let mobile = document.querySelector('.mobile-icon');
    if (mobile.classList.contains('mobile-icon--active')){
      mobile.classList.toggle('mobile-icon--active');
    };
    let modal = document.querySelectorAll('.modal-review');
    for (let i = 0; i < modal.length; i++){
      if (!modal[i].classList.contains('closed')){
        modal[i].classList.toggle('closed');
      }
    }
  }
});

let linksArray = ['.welcome__arrow', '.nav__link',
'.header__button', '.burgers__button'];

let _changeSection = function(event){
  event.preventDefault();
  $attrValue = $(this).attr('data-scroll-to');
  $(this).moveTo($attrValue);
};

for(let i = 0; i < linksArray.length; i++){
  $(linksArray[i]).on('click', _changeSection);
};
//scroll end

if (document.getElementById('map')) {
  google.maps.event.addDomListener(window, 'load', mapGoogle.init);
}

if (document.querySelector('.form')) {
  let formOrder = new MyForm($('.form'), '/send-form.php');
}