/**
 * Created by Aashish on 3/30/2017.
 */
var mailingFormScript = (function () {
  'use strict';

  var setMaksing = function () {
    var form = document.querySelector('.mailing-form');
    var inputContainers = form.querySelectorAll('.mailing-form__input-container');

    [].forEach.call(inputContainers, function (container) {
      var maskContainer = container.cloneNode(true);
      maskContainer.className = 'mailing-form__mask-container';
      container.appendChild(maskContainer);
      var maskedTextInput = maskContainer.querySelector('.mailing-form__text-input');
      if (maskedTextInput) {
        maskedTextInput.removeAttribute("required");
        maskedTextInput.removeAttribute("tabindex");
      }

      container.addEventListener('focusin', function () {
        var textInput = container.querySelector('.mailing-form__text-input');
        if (textInput) {
          var mask = this.querySelector('.mailing-form__mask-container');
          mask.classList.remove('mailing-form__mask');
          mask.classList.add('mailing-form__indicator');
          textInput.focus();
        }
      });

      container.addEventListener('focusout', function () {
        var textInput = container.querySelector('.mailing-form__text-input');
        if (textInput) {
          var mask = this.querySelector('.mailing-form__mask-container');
          if (textInput.checkValidity()) {
            mask.classList.add('mailing-form__mask');
            mask.classList.remove('mailing-form__indicator');
            textInput.blur();

            var maskingInput = mask.querySelector('.mailing-form__text-input')
            if (maskingInput) {
              maskingInput.value = textInput.value;
            }
          } else if (!textInput.value) {
            mask.classList.remove('mailing-form__indicator');
          }
        }
      });

      var submitBtn = container.querySelector('.mailing-form__submit-btn');
      if (submitBtn) {
        submitBtn.addEventListener('click', function () {
          if (form.checkValidity() == true) {
            var mask = this.parentNode.querySelector('.mailing-form__mask-container');
            mask.querySelector('.mailing-form__submit-btn').setAttribute('value', "Thanks. Check your email.");
            mask.classList.add('mailing-form__mask');
          }
        });
      }
    });
  };

  return {
    setMasking: setMaksing
  };
})();