//const express = require('express');
//const app = express();
var http = require("http");

////const faceRec = require('face-recog.js');
////var authenticate = require('./Authenticate.js')
////var database = require('./database.js')
var logging = require('../Logging/log.js');

const bodyParser = require('body-parser');
const app = require('../../app.js').app;

app.use(bodyParser.urlencoded({limit: '50mb', extended:false}));
app.use(bodyParser.json({limit: '50mb'}));

exports.authHandler = function(req, res) {
	if(req.body.hasOwnProperty("type")) {
		switch(req.body.type) {
			case "authenticate":
				//will pass req.body.image
				//run authenticate function
				/*
				var obj = {};
				try {
					obj.clientid = faceRec.authenticate_user(req.body.image); 
				} catch(msg) {
					obj.error = msg;
				}
				*/
				//return clientid or error
				var obj = {clientid: 1234};
				logging.add('Authenticate',new Date(Date.now()),obj.clientid);
				res.send(JSON.stringify(obj));
			break;
			case "update":
				//will pass req.body.clientid
				//will pass req.body.images (images is a JSON array)
				//run register function
				var obj = {success: true};				
				logging.add('Update',new Date(Date.now()),req.body.clientid);
				res.send(JSON.stringify(obj));
			break;
			default:
				res.send("incorrect format");
			break;
		}
	}
	else {
		res.send("incorrect format");
	}
}

exports.log = function(date) {
	dateNew = new Date(Date.now());
	var data = logging.get(date,dateNew);
	var postData = querystring.stringify({
			log_set: {
				logs: data,
				system: "face"
			}
		})
	var options = {
	host: 'https://still-oasis-34724.herokuapp.com',
	port: 80,
	path: '/uploadLog',
	method: 'POST',
	headers: {
	 'Content-Type': 'application/x-www-form-urlencoded',
	 'Content-Length': Buffer.byteLength(postData)
	}
	
	var req = http.request(options, function (res) {});
	req.write(postData);
	req.end;
	setTimeout(log(dateNew));
}

// app.listen(3000);
