let MyForm = function(form, url) {
  this.form = form;
  this.url = url;
  this.addListener(this.form);
};

MyForm.prototype.addListener = function(form) {
  $(form).on('submit', $.proxy(this.submitForm, this));
};

MyForm.prototype.submitForm = function(event) {
  event.preventDefault();
  let $form = $(this.form);
  let defObject = this.ajaxForm($form, this.url);

  if (defObject) {
    defObject.done(function(answer) {
      let message = answer.message;
      let status = answer.status;
      if ((status = 'OK')) {
        $.form.trigger('reset');
        $('.message').css('visibility', 'visible');
        $('.message__text').text('Сообщение отправлено').show();
        closeMessage.init();
      } else {
        $('.message').css('visibility', 'visible');
        $('.message__text').text('Сообщение не отправлено').show();
        closeMessage.init();
      }
    });
  }
};

MyForm.prototype.ajaxForm = function(form, url) {
  if (!validation.validateForm(form)) {
    return false;
  }
  let data = form.serialize();

  return $.ajax({
    type: 'POST',
    url: this.url,
    dataType: 'JSON',
    data: data
  }).fail(function(answer) {
    $('.message').css('visibility', 'visible');
    $('.message__text').text('На сервере произошла ошибка').show();
    closeMessage.init();
  });
};