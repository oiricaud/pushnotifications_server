

// Log all uncaught Exceptions
process.on('uncaughtException', function(err){
  console.log('Caught an uncaught exception: ' + err.stack);
});

// External dependencies
var express = require('express');
var cors = require('cors');
var http = require('http');
var https = require('https');

// Internal dependencies
var router = require('./app/routes/router.js');

// Setting the number of concurrent sockets can be opened for http requests
http.globalAgent.maxSockets = 100;
https.globalAgent.maxSockets = 100;

var app = express();
app.use(cors());

// Set routes
app.use(router);

//Start listening
app.set('port', process.env.VCAP_APP_PORT || process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
  console.log('Host listening: ' + server.address().address + ' Port: ' + server.address().port  );
});

