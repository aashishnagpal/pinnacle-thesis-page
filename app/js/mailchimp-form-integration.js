/**
 * Created by Aashish on 4/7/2017.
 */
var mailchimpIntegration = (function () {
  var subscribe = function () {
    var apiKey = '54d673ad41706f5699a49842c90c8dc3-us15';
    var dataCenter = apiKey.split('-')[1];
    var apiRoot = 'https://' + dataCenter + '.api.mailchimp.com/3.0';
    var listId = 'a568dde891';
    var addMemberResourceURI = '/lists/' + listId + '/members';

    return function (successCallback, existingMemberCallback, errorCallback) {
      var firstName = document.getElementById('firstName').value;
      var lastName = document.getElementById('lastName').value;
      var emailId = document.getElementById('emailId').value;

      // successCallback(this);
      // existingMemberCallback.call(thisArg);
      // errorCallback.call(thisArg);

      var xhr = new XMLHttpRequest();

      xhr.open('POST', apiRoot + addMemberResourceURI);
      xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
      xhr.setRequestHeader('Authorization', 'apikey ' + btoa(apiKey));
      xhr.setRequestHeader('Cache-Control', 'no-cache');

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status < 300) {
            successCallback();
          } else if (xhr.status === 400) {// && response.body.title === "Member Exists")
            console.log(xhr.response);
            // existingMemberCallback();
          } else {
            errorCallback();
          }
        }
        return false;
      };

      xhr.send(JSON.stringify({
        'email_address': emailId,
        'status': 'subscribed',
        'merge_fields': {
          'FNAME': firstName,
          'LNAME': lastName
        }
      }));
    };
  };

  return {
    subscribe: subscribe
  };
})();