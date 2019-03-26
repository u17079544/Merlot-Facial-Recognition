// const fs = require('fs');
// const obj = {table: []};

// module.exports = function(){
// 	//to insert a new client into the databank
// 	this.Insert = function(client_id, images_json){
// 		//converts images to base64
// 		for(var i = 0 ; i < 5; i++){
// 			let buff = fs.readFileSync(images[i]);
// 			images[i] = buff.toString('base64');
// 		}

// 		obj.table.push({id: client_id, images: [images_json], active: true});
// 		fs.writeFile('databank.json', JSON.stringify(obj), function(error){
// 			if(error) throw error;
// 			else return true;
// 		});
// 	}

// 	//this will update the client if found else it will call the insert method
// 	this.Update = function(){}

// 	this.Delete = function(){}

// 	//call this function to get all information from databank
// 	//loop through this json data returned to do facial recognition
// 	this.GetDataBank = function(){
// 		var file = require('databank.json');
// 		return file;
// 	}
// };


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
			if(error) throw error;
			else return client_id;
		});
		db.close();
		client.close();
	});
};

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