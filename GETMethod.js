const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//var authenticate = require('./Authenticate.js')
//var authenticate = require('./Register.js')

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
				var now = new Date();
				var jsonDate = now.toJSON();
				var obj = 	{
								log: [
									{
										date: jsonDate,
										clientid: 1234
									},
									{
										date: jsonDate,
										clientid: 2345
									}
								]
							};
				res.send(JSON.stringify(obj));
			break;
		}
	}
	else
	{
		res.send("incorrect format");
	}
});

app.listen(3000);
