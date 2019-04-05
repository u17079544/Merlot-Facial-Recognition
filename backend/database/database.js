const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin123@facialrecdataset-umcor.mongodb.net/facialrecdataset?ssl=true&authSource=admin";
const client = new MongoClient(uri, { useNewUrlParser: true });
const faceRec = require('../facial-recognition/face-recog.js');


//The Insert function receives the client_id and either a single image, or an array of images as a json object
//The new entry is inserted into the MongoDB database and the client_id is returned if successful.
exports.Insert = function(client_id, images_json){
	// do not insert if client exists.
	return new Promise(function(resolve, reject) {
		client.connect((err,db) => {
			if(err) reject(err);
			const collection = client.db("FacialRecDataSet").collection("FacialRecTable");
			collection.findOne({clientID : client_id}).then( (value) => {
				if (value === undefined){
					console.log(client_id + " already exists in database");	
					resolve(false);
				} else {
					// const model = faceRec.train_model(client_id, images_json);
					// var obj = {clientID : client_id, photos : images_json, trained_model : model, activated : true};
					var obj = {clientID : client_id, photos : images_json, activated : true};
					collection.insertOne(obj, function(error, result) {
						if(err) reject(err);
						else console.log(client_id + " inserted");
						// db.close();
					});
					client.close();
					resolve(true);
				}
			}, (err) => {
				reject(err);
			});
		});
	});
};

exports.Activate = function(client_id){
	// do not insert if client exists.
	return new Promise(function(resolve, reject) {
		client.connect((err,db) => {
			if(err) reject(err);
			const collection = client.db("FacialRecDataSet").collection("FacialRecTable");
			collection.findOne({clientID : client_id}).then( (value) => {
				if (value === undefined){
					console.log(client_id + " already exists in database");	
					resolve(false);
				} else {
					// var obj = {clientID : client_id, photos : images_json, trained_model : model, activated : true};
					var obj = {clientID : client_id, activated : true};
					collection.insertOne(obj, function(error, result) {
						if(err) reject(err);
						else console.log(client_id + " inserted");
						// db.close();
					});
					client.close();
					resolve(true);
				}
			}, (err) => {
				reject(err);
			});
		});
	});
};

//The Delete function will just deactivate a client based on the client_id provided
exports.Delete = function(client_id){
	// do not delete if client does not exist.
	return new Promise(function(resolve, reject) {
		client.connect((err, db) => {
			if(err) reject(err);
			var collection = client.db("FacialRecDataSet").collection("FacialRecTable");
			collection.findOne({clientID : client_id}).then( (value) => {
				if (value === undefined) {
					console.log(client_id + " does not exist in database");
					resolve(false);
				} else {
					var query = { clientID : client_id };
					var update = { $set: { activated : false } };
					collection.updateOne(query, update, function(error, res){ 
						if(error) {
							reject(error);
						} else {
							console.log(client_id + " deactivated");
						}
						// db.close();
					});
					client.close();
					resolve(true);
				}
			}, (err) => {
				reject(err);
			});
		});
	});
};

exports.Update = function(client_id, images_json){
	// do not update if client does not exist.
	// do not update if images are the same as those in db.
	return new Promise(function(resolve, reject) {
		client.connect((err, db) => {
			if(err) reject(err);
			const collection = client.db("FacialRecDataSet").collection("FacialRecTable");
			collection.findOne({clientID : client_id, photos: images_json}).then( (value) => {
				if (value === undefined) {
					console.log(client_id + " no change in database");
					resolve(false);
				} else {
					// const model = faceRec.train_model(client_id, images_json);
					var obj = {clientID : client_id};
					// var newvalues = { $set: {photos : images_json, trained_model : model} };
					var newvalues = { $set: {photos : images_json} };
					collection.updateOne(obj, newvalues, function(error, result){
						if(error) {
							throw error;
						} else {
							console.log(client_id + " updated");
							// return client_id;
						}
						// db.close();
					});
					client.close();
					resolve(true);
				}
			}, (err) => {
				reject(error);
			});
		});
	});
};

exports.Get = function(callback){
	client.connect(err => {
		if(err) throw err;
		var db = client.db("FacialRecDataSet");
		db.collection("FacialRecTable").find({}).toArray(function(error, result){
			if(error) throw error;
			callback(result);	
		});
		db.close();
		client.close();
	});
};
