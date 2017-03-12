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

      "description": "Denounce your PLEASURE and Embrace your PAIN!!!",
      "problemSolving": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
      "solution": "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
      "humanityImpact": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies in lorem non suscipit. Donec suscipit est volutpat leo dictum, eu fringilla enim hendrerit. Suspendisse lacinia purus augue, ultricies posuere erat vehicula ac. Suspendisse rutrum efficitur ligula, non convallis mi gravida a. Curabitur sagittis, orci ac semper efficitur, erat dolor consectetur sem, id auctor metus metus ut nisl. Sed ornare arcu vel odio venenatis, at accumsan tellus pulvinar. Vestibulum pharetra imperdiet magna non accumsan. Sed id finibus quam, varius feugiat dui. Donec ornare ornare efficitur. Maecenas et leo vitae urna pharetra iaculis. Duis ultrices diam et vulputate consectetur.       Vestibulum a orci sit amet leo euismod molestie. Pellentesque in mauris in leo suscipit scelerisque sed eu purus. Proin scelerisque, enim eget tincidunt ultrices, urna dolor convallis lectus, semper imperdiet diam lectus eu ex. Aenean vulputate arcu metus, et venenatis neque viverra eu. Cras ut sollicitudin turpis. Vestibulum at dignissim velit. Sed congue nisi eget sapien tempus ultrices. Nullam ac nisi elit. Sed ornare ante diam, ut scelerisque nunc maximus vel.       Vivamus rhoncus, mauris quis dignissim pellentesque, massa neque porta justo, sed cursus lorem metus viverra nisi. Nunc a elit leo. Phasellus vel ligula ac elit tristique dictum. Ut ac magna imperdiet, feugiat est nec, mollis nisl. Etiam lacus velit, consectetur eget lacus vitae, gravida lobortis nunc. Praesent rhoncus finibus rutrum. Phasellus ac arcu eu ligula lobortis ultricies id vitae mi. Aliquam nec ex rhoncus, lacinia purus a, congue odio. Quisque ornare dui eu molestie vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.       Quisque suscipit maximus mi vitae dapibus. Curabitur ac est ut nisl aliquet malesuada. Duis in scelerisque libero. Morbi a eros et nunc suscipit venenatis et id ipsum. Proin ut neque non arcu porta porttitor. Morbi non sem at orci placerat sagittis viverra auctor lectus. Sed fermentum, libero id condimentum bibendum, metus augue vestibulum leo, laoreet tristique purus nisi quis lectus. Etiam aliquam orci sit amet dui sagittis dictum. Nunc mattis, arcu non euismod imperdiet, magna justo consequat mauris, in rhoncus mi dui id metus. Integer placerat ac est ultrices sollicitudin. Maecenas posuere gravida elit sit amet laoreet. Aenean tempus risus quis nisl pulvinar, ut fermentum ligula scelerisque. Donec a pharetra tortor, ut mollis lacus. Sed ultrices sapien ut odio vulputate fermentum. Sed a risus nisi. Aliquam tellus ex, malesuada molestie tincidunt in, rhoncus egestas nibh. Proin at commodo nisi. Curabitur interdum dui id rhoncus consequat. Sed fermentum ante mauris, id molestie mauris cursus vitae. Etiam sed euismod enim. Ut viverra bibendum facilisis. Sed mattis mi euismod tempus ornare. Sed blandit bibendum justo. Donec fringilla justo sed faucibus pulvinar. Ut quis turpis enim.",

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
    document.querySelector('#handlebars-container').innerHTML = html;
  });


})();