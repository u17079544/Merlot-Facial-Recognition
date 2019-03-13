const fs = require('fs');
const express = require('express');
const mongoose = require('mongoose');

function dataURLtoFile(data, filename) {
    var arr = data.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
}

module.exports = function(){
	mongoose.Promise = global.Promise;
	mongoose.connect("mongodb://localhost:27017/facial_recognition_database"); //database will be created if it does not exist?

	var schema = new mongoose.Schema({
		client_id: String,
		photos: [{1: String, 2: String, 3: String, 4: String, 5: String}],
		active: Boolean
	});

	var Client = mongoose.model("Client", schema);

	this.Insert = function(images){
		var id = Math.floor(Math.random() * (100000000 - 1000000 + 1)) + 1000000;

		for(var i = 0 ; i < 5; i++){
			let buff = fs.readFileSync(images[i]);
			images[i] = buff.toString('base64');
		}

		var new_client = new Client({client_id: id, photos[1: images[0], 2: images[1], 3: images[2], 4: images[3], 5: images[4]], active: true});

		new_client.save(function(error, client){
			if(error) throw error;
			return client.client_id;
		});
	}

	this.Update = function(){}

	this.Delete = function(){}

	this.Authenticate = function(image){
		Client.find().forEach(function(client){
			var images = [];

			for(var i = 0; i < 5; i++){
				images[i] = client.photos[i + 1];
				images[i] = dataURLtoFile('data/img/png;base64,........', i + '.png');
				// let buff = new Buffer(images[i], 'base64');  
				// fs.writeFileSync(i + '.png', buff);
			}

			//do facial recognition
			//throw NotAuthenticated error if not found
		});
	}
};





/*******************************************************************************************************************************
												CODE FOR MYSQL DATABASE
*******************************************************************************************************************************/


// const mysql = require('mysql');

// const connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'admin',
// 	password: 'admin123',
// 	database: 'facial_recognition_database'
// });

// connection.connect((error) => {
// 	if(error) throw error;

// 	//images is an array of client photo's
// 	this.Insert = function(images){
// 		for(var i = 0 ; i < 5; i++){
// 			let buff = fs.readFileSync(images[i]);
// 			images[i] = buff.toString('base64');
// 		}
		
// 		var client_id = Math.floor(Math.random() * (100000000 - 1000000 + 1)) + 1000000;
// 		var sql = "INSERT INTO Clients(ID, Photos) Values(" + client_id + ", {'1': " + images[0] + ", '2': " + images[1] + ", '3': " + images[2] + ", '4': " + images[3] + ", '5': " + images[4] + "})";
		
// 		connection.query(sql, function(err, result){
// 			if(err) throw err;
// 			else{
// 				return client_id;
// 			}
// 		});
// 	}

// 	this.Update = function(client_id, info){}

// 	this.Delete = function(client_id){
// 		//only deactivate account
// 	}

// 	//image is a single photo
// 	this.Authenticate = function(image){
// 		var images = [];

// 		//also have to check whether account is active or not
// 		connection.query("SELECT * FROM Clients", function(e, rows, fields){
// 			if(e) throw e;

// 			for(var i = 0; i < rows.length; i++){
// 				//conversion and authentication;
// 				let record = rows[i];
// 			}
// 		});

// 		// let buff = new Buffer(data, 'base64');  
// 		// fs.writeFileSync('stack-abuse-logo-out.png', buff);

// 		//do authentication using facial recognition plug-in

// 		throw NotAuthenticated;
// 	}
// });