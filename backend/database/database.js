const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin123@facialrecdataset-umcor.mongodb.net/facialrecdataset?ssl=true&authSource=admin";
const client = new MongoClient(uri, { useNewUrlParser: true });
const faceRec = require('../facial-recognition/face-recog.js');

//The Insert function receives the client_id and either a single image, or an array of images as a json object
//The new entry is inserted into the MongoDB database and the client_id is returned if successful.
exports.Insert = function(client_id, images_json){
	client.connect(err => {
		if(err) throw err;
		const collection = client.db("FacialRecDataSet").collection("FacialRecTable");
		const model = faceRec.train_model(client_id, images_json);
		var obj = {clientID : client_id, photos : images_json, trained_model : model, activated : true};
		collection.insertOne(obj, function(error, result){
			if(error) throw error;
			//console.log("Inserted");
			else return client_id;
		});
		client.close();
	});
};

//The Delete function will just deactivate a client based on the client_id provided
exports.Delete = function(client_id, callback){
	client.connect(err => {
		if(err) throw err;
		var db = client.db("FacialRecDataSet");
		var query = { clientID : client_id };
		var update = { $set: { activated : false } };
		db.collection("FacialRecTable").updateOne(query, update, function(error, res){ 
			if(error) throw error;
			else return client_id;
		});
		db.close();
		client.close();
	});
};

exports.Update = function(){

};

exports.Callback = function(){
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

exports.Get = function(callback){
	callback();
};
