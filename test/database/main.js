var dataset = require("./database.js");
var http = require("http");

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	var json = {"1" : "sueifhoadoiada", "2" : "iqohhfascnzcjzdfd", "3" : "oefheodahcjsdnfushdf", "4" : "ioadhfdsnjvnjjsrjf", "5" : "iaofsdjcnxkvsrshg"};
	dataset.Insert("1234", json);
	res.end();
}).listen(8000);