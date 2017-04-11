/**
 * Created by Aashish on 4/11/2017.
 */
/**
 * Created by Aashish on 4/7/2017.
 */
var pinnacleProjectDetails = (function () {
  'use strict';
  var fetch = function (emailAddress, callback) {
    var apiEndpoint = 'http://localhost:9001/pinnacleproject';
    var xhr = new XMLHttpRequest();

    xhr.open('GET', apiEndpoint + '?email=' + emailAddress);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
    xhr.setRequestHeader('Cache-Control', 'no-cache');

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          callback(response);
        } else {
          var errorResponse = {
            success: false,
            error: 'Fetch Error: ' + xhr.status + xhr.statusText
          };
          callback(errorResponse);
        }
      }
      return false;
    };

    // xhr.send(JSON.stringify({'email': emailAddress}));
    xhr.send();
  };

  return {
    fetch: fetch
  };
})();