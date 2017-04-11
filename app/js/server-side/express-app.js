/**
 * Created by Aashish on 4/11/2017.
 */

'use strict';

/*
 * Express Dependencies
 */
var port = 9001;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var routes = {
  // mailchimp: require('./routes/mailchimp.js'),
  studentData: require('./routes/student-data.js')
};

// var Firebase = require("firebase");
// var fire = new Firebase("https://moderndeveloper.firebaseio.com/");
//
// app.set("fire", fire);

app.use(function (req, res, next) {
  var allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:9000',
    'http://localhost:9001',

    'https://learn.bovacademy.com',
    'http://learn.bovacademy.com',
    'https://bovacademy.github.io',

    'https://learnstaging-59990.onmodulus.net',
    'http://learnstaging-59990.onmodulus.net',
    'http://learn-59337.onmodulus.net',
    'https://learn-59337.onmodulus.net',

    'https://learn.moderndeveloper.com',
    'http://learn.moderndeveloper.com',
    'https://moderndeveloper.github.io'
  ];
  var origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1){
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Cache-Control');
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});


// For gzip compression
app.use(express.compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(__dirname + '/'));

/* ---------- Routes ------------ */
// at the moment, it appears as if this route definition is not needed
// app.get('/', function (req, res) {
//   res.sendfile('../../dist/index.html');
// });

app.get('/pinnacleproject', routes.studentData.getData);
// app.post('/mailchimp/subscribe', routes.mailchimp.subscribe);


/* Start it up */
app.listen(process.env.PORT || port);
console.log('Express started on port: ' + port);
