const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//var authenticate = require('./Authenticate.js')
//var database = require('./database.js')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/', function(req, res)
{
	if(req.body.hasOwnProperty("type"))
	{
		switch(req.body.type)
		{
			case "authenticate":
				//will pass req.body.image
				//run authenticate function
				//return clientid or error
				var obj = {clientid: 1234};
				res.send(JSON.stringify(obj));
			break;
			case "update":
				//will pass req.body.clientid
				//will pass req.body.images (images is a JSON array)
				//run register function
				var obj = {success: true};
				res.send(JSON.stringify(obj));
			break;
			case "log":
				//will pass req.body.start
				//will pass req.body.end
				//run log function
				//return array of date and clientid as json object
				var obj = 	{
								log: [
									{
										date: "2014-01-01T23:28:56.782Z",
										clientid: 1234
									},
									{
										date: "2014-01-01T23:28:56.782Z",
										clientid: 2345
									}
								]
							};
				res.send(JSON.stringify(obj));
			break;
			default:
				res.send("incorrect format");
			break;
		}
	}
	else
	{
		res.send("incorrect format");
	}
});

app.listen(3000);
