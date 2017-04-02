/**
 * Created by Aashish on 4/2/2017.
 */
var formScannerScript = (function () {
  'use strict';
  var setMasking = function () {
    var formScannerInputConts = document.querySelectorAll('.formScanner__inputContainer');
    var formScanner = document.querySelector('.formScanner');
    for (var i = 0; i < formScannerInputConts.length; i++) {

      var formScannerInput = formScannerInputConts[i].querySelector('.formScanner__input');
      var formScannerMask = formScannerInputConts[i].cloneNode(true);
      formScannerMask.className = 'formScanner__inputMask';
      if (i === 0) {
        formScannerMask.classList.add('formScanner__cursor');
        // formScannerInput.focus();
      }
      formScannerMask.querySelector('input').removeAttribute('required');
      formScannerMask.querySelector('input').removeAttribute("tabindex");
      formScannerMask.querySelector('input').setAttribute("disabled", "");
      formScannerInputConts[i].appendChild(formScannerMask);

      formScannerInput.addEventListener('focus', function () {
        var formScannerMask = this.parentNode.querySelector('.formScanner__inputMask');
        formScannerMask.classList.remove('formScanner__inputMaskCover');
        formScannerMask.classList.add('formScanner__cursor');
      });

      formScannerInput.addEventListener('focusout', function () {
        var formScannerMask = this.parentNode.querySelector('.formScanner__inputMask');
        formScannerMask.classList.remove('formScanner__cursor');
        formScannerMask.classList.remove('formScanner__invalidInput');
        if (this.checkValidity()) {
          formScannerMask.querySelector('.formScanner__input').value = " " + this.value;
          formScannerMask.classList.add('formScanner__inputMaskCover');
        }
      });

      formScannerInput.addEventListener('invalid', function (e) {
        e.preventDefault();
      });

      formScannerInputConts[i].addEventListener('click', formScannerMaskClick);

    }


    function formScannerMaskClick() {
      var formScannerInput = this.querySelector('.formScanner__input');
      var formScannerMask = this.querySelector('.formScanner__inputMask');
      formScannerMask.classList.remove('formScanner__maskCover');
      formScannerMask.classList.add('formScanner__cursor');
      formScannerInput.focus();
    }

    var formScannerSubmitConts = document.querySelectorAll('.formScanner__submitContainer');
    console.log(formScannerSubmitConts.length);
    for (var i = 0; i < formScannerSubmitConts.length; i++) {
      var formScannerSubmit = formScannerSubmitConts[i].querySelector('.formScanner__submit');
      var formScannerSubmitMask = formScannerSubmitConts[i].cloneNode(true);

      formScannerSubmitMask.className = 'formScanner__submitMask';
      formScannerSubmitConts[i].appendChild(formScannerSubmitMask);

      formScannerSubmit.addEventListener('click', function () {
        if (formScanner.checkValidity()) {
          var formScannerSubmitMask = this.parentNode.querySelector('.formScanner__submitMask');
          formScannerSubmitMask.querySelector('.formScanner__submit').setAttribute('value', 'Thank You. Check your' +
              ' email.');
          formScannerSubmitMask.classList.add('formScanner__submitMaskCover');

          for (var j = 0; j < formScannerInputConts.length; j++) {
            formScannerInputConts[j].querySelector('.formScanner__input').disabled = true;
            formScannerInputConts[j].querySelector('.formScanner__inputMask input').classList.add('formScanner__clearInput');
            formScannerInputConts[j].removeEventListener('click', formScannerMaskClick);
          }
        } else {
          formScanner.querySelector(':invalid').focus();
          formScanner.querySelector(':invalid ~ .formScanner__inputMask').classList.add('formScanner__invalidInput');
        }
      })
    }
  };

  return {
    setMasking: setMasking
  };
})();
