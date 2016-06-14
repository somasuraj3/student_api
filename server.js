var express = require('express');
var bodyParser = require('body-parser');
var student = require('./routes/student'); //routes are defined here
var app = express(); //Create the Express app

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + "/html"));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended : true}));
app.use('/', student); //This is our route middleware

app.set('port', process.env.PORT || 80);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

module.exports = server