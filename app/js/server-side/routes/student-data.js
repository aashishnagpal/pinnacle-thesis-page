/**
 * Created by Aashish on 4/11/2017.
 */
exports.getData = function (req, res) {
  var email = req.query.email;
  var _ = require('lodash');
  var Firebase = require("firebase");
  var fire = new Firebase("https://moderndeveloper.firebaseio.com/");

  fire.child('learn')
      .child('studentsWebsiteData')
      .once('value', function (data) {

        var profileAndPerformance = data.val();
        if (email) {
          for (var student in profileAndPerformance) {
            if (profileAndPerformance.hasOwnProperty(student) &&
                profileAndPerformance[student].pinnacleProject &&
                profileAndPerformance[student].pinnacleProject.email === email) {
              var pinnacleProjectObject = profileAndPerformance[student].pinnacleProject;
              return res.send(200, {success: true, data: pinnacleProjectObject});
            }
          }
          return res.send(200, {
            success: false,
            error: 'The email "' + email + '" does not match any user email from the database!'
          });
        } else {
          return res.send(200, {
            success: false,
            error: 'A valid email address must be provided!'
          });
        }
      });
};
