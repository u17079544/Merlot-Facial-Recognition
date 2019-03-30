var dataset = require("./database.js");

exports.run = function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	var json = {"1" : "sueifhoadoiada", "2" : "iqohhfascnzcjzdfd", "3" : "oefheodahcjsdnfushdf", "4" : "ioadhfdsnjvnjjsrjf", "5" : "iaofsdjcnxkvsrshg"};
	dataset.Insert("1234", json);
	res.end();
}
