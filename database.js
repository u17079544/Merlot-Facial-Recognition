const fs = require('fs');
const obj = {table: []};

module.exports = function(){
	//to insert a new client into the databank
	this.Insert = function(client_id, images_json){
		//converts images to base64
		for(var i = 0 ; i < 5; i++){
			let buff = fs.readFileSync(images[i]);
			images[i] = buff.toString('base64');
		}

		obj.table.push({id: client_id, images: [images_json], model: {}, active: true});
		fs.writeFile('databank.json', JSON.stringify(obj), function(error){
			if(error) throw error;
			else return true;
		});
	}

	//this will update the client if found else it will call the insert method
	this.Update = function(){}

	this.Delete = function(){}

	//call this function to get all information from databank
	//loop through this json data returned to do facial recognition
	this.GetDataBank = function(){
		var file = require('databank.json');
		return file;
	}
};
