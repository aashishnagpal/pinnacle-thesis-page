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

  var testData = {
    "pinnacleProject": {
      "fullName": "Vojislav Grujić",
      "email": "vojislav.grujic@gmail.com",
      "careerPathsAndGradDates": [
        "Advanced Frontend Developer, July 2017",
        "Advanced Fullstack Developer, December 2017"
      ],
      "title": "The Great Pineapple Project",
      "featuredImage": "images/age-of-man.jpg",
      "description": "Denounce your PLEASURE and Embrace your PAIN!!!",
      "problemSolving": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. \nNor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
      "solution": "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. \nBut in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
      "humanityImpact": "But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. \nThese cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.\n\nBut in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.\n\nThese cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. \nNo one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
      "teamProject": "yes",
      "team": [
        {
          "firstName": "Jonas",
          "lastName": "Lininger",
          "photoUrl": "https://images.pexels.com/photos/101584/pexels-photo-101584.jpeg?w=470&h=210&auto=compress&cs=tinysrgb",
          "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a semper sem. Ut pellentesque libero ut ultricies vehicula. Morbi suscipit felis nulla, luctus ornare nunc fringilla et",
          "portfolioUrl": "#",
          "githubUrl": "#",
          "twitterUrl": "#",
          "facebookUrl": "#",
          "linkedInUrl": "#"
        },
        {
          "firstName": "Mariam",
          "lastName": "Casaus",
          "photoUrl": "https://images.pexels.com/photos/27411/pexels-photo-27411.jpg?w=470&h=210&auto=compress&cs=tinysrgb",
          "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a semper sem. Ut pellentesque libero ut ultricies vehicula. Morbi suscipit felis nulla, luctus ornare nunc fringilla et",
          "portfolioUrl": "#",
          "githubUrl": "#",
          "twitterUrl": "#",
          "facebookUrl": "#",
          "linkedInUrl": "#"
        },
        {
          "firstName": "Herbert",
          "lastName": "Stamper",
          "photoUrl": "https://images.pexels.com/photos/119705/pexels-photo-119705.jpeg?w=470&h=210&auto=compress&cs=tinysrgb",
          "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a semper sem. Ut pellentesque libero ut ultricies vehicula. Morbi suscipit felis nulla, luctus ornare nunc fringilla et",
          "portfolioUrl": "#",
          "githubUrl": "#",
          "twitterUrl": "#",
          "facebookUrl": "#",
          "linkedInUrl": "#"
        },
        {
          "firstName": "Alyssa",
          "lastName": "Mcglothin",
          "photoUrl": "https://images.pexels.com/photos/206559/pexels-photo-206559.jpeg?w=470&h=210&auto=compress&cs=tinysrgb",
          "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a semper sem. Ut pellentesque libero ut ultricies vehicula. Morbi suscipit felis nulla, luctus ornare nunc fringilla et",
          "portfolioUrl": "#",
          "githubUrl": "#",
          "twitterUrl": "#",
          "facebookUrl": "#",
          "linkedInUrl": "#"
        },
        {
          "firstName": "Claudio",
          "lastName": "Cunha",
          "photoUrl": "https://images.pexels.com/photos/211050/pexels-photo-211050.jpeg?w=470&h=210&auto=compress&cs=tinysrgb",
          "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a semper sem. Ut pellentesque libero ut ultricies vehicula. Morbi suscipit felis nulla, luctus ornare nunc fringilla et",
          "portfolioUrl": "#",
          "githubUrl": "#",
          "twitterUrl": "#",
          "facebookUrl": "#",
          "linkedInUrl": "#"
        },
        {
          "firstName": "Elvera",
          "lastName": "Stacks",
          "photoUrl": "https://images.pexels.com/photos/27949/pexels-photo-27949.jpg?w=470&h=210&auto=compress&cs=tinysrgb",
          "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a semper sem. Ut pellentesque libero ut ultricies vehicula. Morbi suscipit felis nulla, luctus ornare nunc fringilla et",
          "portfolioUrl": "#",
          "githubUrl": "#",
          "twitterUrl": "#",
          "facebookUrl": "#",
          "linkedInUrl": "#"
        }
      ],
      "mailChimpFormTitle": "Join my project and help Advance humanity",
      "mailChimpAPIKey": "http://mailchimp.com/api",
      "mailListID": "sdczx161vx",
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
    document.querySelector('#handlebars-container').innerHTML = html;

    var teammates = document.querySelectorAll('.team__member');
    var rightmostIndex = teammates.length - 1;
    for (var i = rightmostIndex; i >= 0; --i) {
      if (teammates[i].getBoundingClientRect().right > teammates[rightmostIndex].getBoundingClientRect().right) {
        rightmostIndex = i;
        break;
      }
    }

    [].forEach.call(teammates, function (teammate) {
      var info = teammate.querySelector('.team__member-info');
      if (teammate.getBoundingClientRect().left === teammates[0].getBoundingClientRect().left) {
        info.classList.add('team__member-info--leftmost');
      } else if (teammate.getBoundingClientRect().right === teammates[rightmostIndex].getBoundingClientRect().right) {
        info.classList.add('team__member-info--rightmost');
      }
    });

    formScannerScript.setMasking();
  });


})();