var request = require('request');

request.post(
    'http://localhost:3000/',
    { json: { 
				type: "authenticate",
				image: "Base64Image"
			} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
);

request.post(
    'http://localhost:3000/',
    { json: { 
				type: "update",
				images: [
					"Base64Image",
					"Base64Image",
					"Base64Image",
					"Base64Image",
					"Base64Image"
				]
			} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
);

request.post(
    'http://localhost:3000/',
    { json: { 
				type: "log",
				start: new Date(),
				end: new Date()
			} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
);
