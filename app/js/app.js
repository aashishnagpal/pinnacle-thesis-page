/**
 * Created by Aashish on 3/8/2017.
 */
(function () {
  'use strict';

  Handlebars.registerHelper('isTeamProject', function (val, options) {
    if (val === 'yes')
      return options.fn(this);
    return options.inverse(this);
  });

  Handlebars.registerHelper('replaceNewLineFeeds', function (content) {
    return '<p>' + content.replace(/\n+/g, '</p><p>') + '</p>';
  });

  window.addEventListener('load', function () {
    pinnacleProjectDetails.fetch('aashish.nagpal@hotmail.com', function (response) {
      if (response.success && response.data) {
        // Compile the handlebars template and populate it​ using AJAX response
        document.getElementById('handlebars-container').innerHTML = ppt.templates.pinnacleProjectThesis(response.data);

        // Align Team Details properly on the page
        teamDetails.initialize();

        // Set CSS masking on the mailing form
        formScannerScript.setMasking();
      } else if (response.error) {
        console.error(response.error);
      }
    });
  });
})();