const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin123@facialrecdataset-umcor.mongodb.net/facialrecdataset?ssl=true&authSource=admin";
const client = new MongoClient(uri, { useNewUrlParser: true });
//var exports = module.exports = {};

exports.Insert = function(client_id, images_json){
	client.connect(err => {
		if(err) throw err;
		const collection = client.db("FacialRecDataSet").collection("FacialRecTable");
		var obj = {clientID : client_id, photos : images_json, activated : true};
		collection.insertOne(obj, function(error, result){
			if(error) throw error;
			//console.log("Inserted");
			else return client_id;
		});
		client.close();
	});
};

exports.Delete = function(client_id){
	client.connect(err => {
		if(err) throw err;
		var db = client.db("FacialRecDataSet");
		var query = { clientID : client_id };
		var update = { $set: { activated : false } };
		db.collection("FacialRecTable").updateOne(query, update, function(error, res){

exports.Update = function(){

};

exports.Get = function(){
	client.connect(err => {
		if(err) throw err;
		var db = client.db("FacialRecDataSet");
		db.collection("FacialRecTable").find({}).toArray(function(error, result){
			if(error) throw error;
			return result;	
		});
		db.close();
		client.close();
	});
};