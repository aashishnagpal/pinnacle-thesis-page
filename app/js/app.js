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

  var testData = {
    "pinnacleProject": {
      "fullName": "Vojislav Grujić",
      "careerPathsAndGradDates": [
        "Advanced Frontend Developer,  July 2017",
        "Advanced Fullstack Developer,  December 2017"
      ],

      "title": "The Great Pineapple Project",
      "featuredImage": "http://placehold.it/1200x500",

      "description": "This will be the most abstract pineapple project... I like pineapples!",
      "problemSolving": "All problems you can imagine. Alllll of them!",
      "solution": "FTATD!",
      "humanityImpact": "Impacts like a meteor that wiped out the dinosaurus.",

      "teamProject": "yes",
      "team": [
        "no",
        "body",
        "with",
        "me",
        "I'm",
        "alone"
      ],

      "thesisApproved": "yes",
      "completionDate": "",
      "link": "http://here.and.there.bla",
      "thesisPageLink": "http://doesnt.exist.ydfdet.x.x.x.s.dfdd",
      "typeOfProject": "enlightenment",
      "revenueModel": "open-source",
      "thesisSubmissionDate": "Sat, 04 Mar 2017 00:20:19 GMT"
    }
  };

  var data = testData.pinnacleProject;
  var html = ppt.templates.pinnacleProjectThesis(data);
  //Compile the template​
  window.addEventListener('load', function () {
    document.querySelector('body').innerHTML = html;
  });


})();