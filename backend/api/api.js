//const express = require('express');
//const app = express();
var http = require("http");
const sleep = require('sleep').sleep;

var faceRec = require('../facial-recognition/face-recog.js');
////var authenticate = require('./Authenticate.js')
var database = require('../database/database.js')
var logging = require('../logging/Log.js');

const bodyParser = require('body-parser');
const querystring = require('query-string');
const app = require('../../app.js').app;

app.use(bodyParser.urlencoded({limit: '50mb', extended:false}));
app.use(bodyParser.json({limit: '50mb'}));

exports.authHandler = function(req, res) {
	if(req.body.hasOwnProperty("type")) {
		switch(req.body.type) {
			case "authenticate":
				//will pass req.body.image
				//run authenticate function
				var start = new Date();
				var obj = {clientid: "", Success: ""};
				/*try {
					obj.clientid = faceRec.authenticate_client(req.body.image); 					
					obj.Success = true;
				} catch(msg) {
					obj.clientid = -1
					obj.Success = false;
				}*/
				var rand = Math.floor(Math.random() * Math.floor(3));
				switch(rand)
				{
					case 0:
						obj.clientid = 1234;
						obj.Success = true;
					break;
					case 1:
						obj.clientid = 5678;
						obj.Success = true;
					break;
					case 2:
						obj.clientid = "No match found.";
						obj.Success = false;
					case 3:
						obj.clientid = "No match found.";
						obj.Success = false;
					break;
				}
				//return clientid or error
				var end = new Date() - start;
				logging.add('Authenticate',new Date(Date.now()),obj.clientid,obj.Success,end);
				res.send(JSON.stringify(obj));
			break;
			case "update":
				//will pass req.body.clientid
				//will pass req.body.images (images is a JSON array)
				//run register function				
				var start = new Date();
				database.update(req.body.images);
				var obj = {success: true};				
				var end = new Date() - start;
				logging.add('Update',new Date(Date.now()),req.body.clientid,true,end);
				res.send(JSON.stringify(obj));
			break;
			default:
				res.send("incorrect format");
			break;
		}
	}
	else if(req.body.hasOwnProperty("Message")){
		switch(req.body.Message) {
			case "New client created":
				// database.Insert(Number(req.body.clientID)).then((check) =>{
				// 	var obj;
				// 	if(typeof check==='boolean'&&check==true)
				// 	{
				// 		obj = {status:"success"};
				// 	}
				// 	else
				// 	{
				// 		obj = {status:"failure"};
				// 	}
				// 	res.send(JSON.stringify(obj));				
				// }, (err) => {
				// 	console.log(err);
				// });
				sleep(1);
				res.send(JSON.stringify({status:"success"}));				
			break;
			case "Client deactivated":
				// var check = database.Delete(Number(req.body.clientID));
				// var obj;
				// if(typeof check==='boolean'&&check==true)
				// {
				// 	obj = {status:"success"};
				// }
				// else
				// {
				// 	obj = {status:"failure"};
				// }
				// res.send(JSON.stringify(obj));				
				
				sleep(1);
				res.send(JSON.stringify({status:"success"}));				
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
	};
	
	var req = http.request(options, function (res) {});
	req.write(postData);
	req.end;
	// setTimeout(logging.log,300000,dateNew);
}

// app.listen(3000);
