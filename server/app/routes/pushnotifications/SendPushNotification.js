// External dependencies
var express = require('express');
var sendPush = express.Router();
var PushNotifications = require('bluemix-push-notifications').PushNotifications;
var Notification = require('bluemix-push-notifications').Notification;

// Displays current version of server APIs
sendPush.get('/', function(req, res) {
    var myPushNotifications = new PushNotifications(PushNotifications.Region.US_SOUTH, "253e97ab-d90f-49a9-b104-dd48be68a99e", "a8ba41b1-0a2e-470e-87a6-bcd09f81b51d");
    
    var notificationExample = new Notification("Woop");
    
    myPushNotifications.send(notificationExample, function(error, response, body) {
        console.log("Error: " + error);
        console.log("Response: " + JSON.stringify(response));
        console.log("Body: " + body);
    });
    res.status(200).json({
        sendPushService: "running"
        
    });
});

module.exports = sendPush;
