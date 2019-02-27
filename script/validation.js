let validation = (function(){

  let validateForm = function(form){
    $("#phone").mask("+375 (99) 999-99-99");

    let elements = $(form).find('input[data-content]').not('input.hidden-input');

    $.each(elements, function(index, element){
      _setUpListener(form);
    });

    let valid = true;
    $.each(elements, function(index, element){
      let $element = $(element);
      let value = $element.val();
      if (!value.length) {
        _addError($element);
        valid = false;
      }
    });
    return valid;
  };

  function _addError(element){
    element.addClass('error');
    _createQtip(element, element.data('position'));
  }

  function _setUpListener(form){
    $(form).on('keydown', '.error', _removeError);
    $(form).on('click', '.error', _removeError);
    $(form).on('reset', _clearForm);
  }

  function _removeError() {
    $(this).removeClass('error');
  };

  function _clearForm() {
    let $form = $(this);
    $(this).find('.error').removeClass('error');
    $(this).find('input[data-content]').trigger('hideTooltip');
  };

  function _createQtip(element, direction) {
    direction = direction || 'top';
    position = {
      left: {
        my: 'center right',
        at: 'center left'
      },
      right: {
        my: 'center left',
        at: 'center right'
      },
      bottom: {
        my: 'top center',
        at: 'bottom center'
      },
      top: {
        my: 'bottom center',
        at: 'top center'
      }
    };

    element.qtip({
      content: {
        text: function() {
          return $(this).data('content');
        }
      },
      show: {
        event: 'show'
      },
      hide: {
        event: 'keydown click hideTooltip'
      },
      position: position[direction],
      style: {
        classes: 'qtip-mystyle',
        tip: {
          height: 10,
          width: 10
        }
      }
    }).trigger('show');
  };
  
  return{
    validateForm: validateForm
  }
})()

validation.validateForm();