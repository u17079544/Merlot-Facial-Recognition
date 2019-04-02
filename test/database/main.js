var dataset = require("./database.js");
var http = require("http");

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});

	//Testing inserting a new client
	var json = {"1" : "sueifhoadoiada", "2" : "iqohhfascnzcjzdfd", "3" : "oefheodahcjsdnfushdf", "4" : "ioadhfdsnjvnjjsrjf", "5" : "iaofsdjcnxkvsrshg"};
	var client_id = dataset.Insert("1234", json);
	console.log(client_id);

	//Testing deleting a client
	client_id = dataset.Delete("1234");
	console.log(client_id);

	res.end();
}).listen(8000);