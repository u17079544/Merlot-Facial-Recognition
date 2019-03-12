const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//var authenticate = require('./Authenticate.js')
//var authenticate = require('./Register.js')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/', function(req, res)
{
	switch(req.body.type)
	{
		case "authenticate":
			//will pass req.body.image
			//run authenticate function
			//return clientid or error
			res.send("1");
		break;
		case "register":
			//will pass req.body.clientID
			//will pass req.body.images (images is a JSON array)
			//run register function
			res.send("2");
		break;
	}
	res.send(req.query.var);
});

app.listen(3000);
