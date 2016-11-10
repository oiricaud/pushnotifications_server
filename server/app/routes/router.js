// External dependencies
var express = require('express');
var router = express.Router();
var underscore = require('underscore');

// Send Push Notification dependency
var sendPushNotification = require('./pushnotifications/SendPushNotification.js');

// Routes all /sendPushNotification to sendPushNotification.js
router.use('/sendPushNotification', sendPushNotification);

// Responds to GET request on main URL
router.get('/', function(req, res) {
    res.status(200).json({
        status: "running"
        
    });
});

// Returns 404s for all other routes
router.use(function(req, res, next) {
    var err = new Error("Not found!");
    err.status = 404;
    next(err);
});



// Logs an error and responds to client
router.use(function(err, req, res, next){
    console.log('Error Name:  %s | Error Message: %s', err.name, err.message);
    res.status(err.status || 500).json({
        status: 'error',
        name: err.name,
        message: err.message,
    });
    next(err);
});

module.exports = router;
