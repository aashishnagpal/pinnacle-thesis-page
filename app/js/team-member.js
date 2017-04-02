/**
 * Created by Aashish on 4/2/2017.
 */
var teamDetails = (function () {
  'use strict';
  var initialize = function () {
    var teammates = document.querySelectorAll('.team__member');
    var rightmostIndex = teammates.length - 1;
    for (var i = rightmostIndex; i >= 0; --i) {
      if (teammates[i].getBoundingClientRect().right > teammates[rightmostIndex].getBoundingClientRect().right) {
        rightmostIndex = i;
        break;
      }
    }

    [].forEach.call(teammates, function (teammate) {
      teammate.addEventListener('click', function () {
        this.classList.add('team__member--is-hovered');
      });

      var info = teammate.querySelector('.team__member-info');
      info.querySelector('.team__member-info__close-icon').addEventListener('click', function (event) {
        event.stopPropagation();
        teammate.classList.remove('team__member--is-hovered');
      });

      if (teammate.getBoundingClientRect().left === teammates[0].getBoundingClientRect().left) {
        info.classList.add('team__member-info--leftmost');
      } else if (teammate.getBoundingClientRect().right === teammates[rightmostIndex].getBoundingClientRect().right) {
        info.classList.add('team__member-info--rightmost');
      }
    });
  };

  return {
    initialize: initialize
  };
})();