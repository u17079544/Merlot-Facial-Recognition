const db = require('../database/database.js');
const ip = require('./image-processor.js');
const fr = require('face-recognition');

const recognizer = fr.FaceRecognizer();

const load_models = (callback) => {
	db.Get((rows) => {
		callback(rows);		
	});
};

const validate = (client_image) => {
	var str = '' + client_image;
	var matches = client_image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
	//var image_info = {};
	
    	if (matches.length === 3) {
    		return true;
    	} else 
    		return false;
};

const authenticate_client = (client_base64_image, callback) => {
	if (!validate(client_base64_image)) {
		callback({clientid: "Not base64 string", Success: false});
	} else {
	ip.process_image(client_base64_image, (client_face) => {
		load_models((model_list) => {
			const required_accuracy = 0.75;
			var prediction_accuracy = 0;
			var client_id = '';
			var face_prediction = null;
			one_prediction.id = '';
			one_prediction.accuracy = 0;
			var match = false;
			for (var i=0; i < model_list.length; i++) {
				if (!model_list[i].activated) continue;
				
				recognizer.load(model_list[i].trained_model);
				face_prediction = recognizer.predict(client_face);

				client_id = face_prediction[0].className;
				prediction_accuracy = 1 - face_prediction[0].distance;

				if (prediction_accuracy >= required_accuracy) {
					match = true;
					callback({clientid: client_id, Success: true});
					break;
				}
					
			}
			if (!match)
				callback({clientid: "No match found", Success: false});
		});	
	});
	}
};

const train_model = (client_id, json_base64_images, callback) => {
	ip.process_images(json_base64_images, (client_faces) => {
		recognizer.addFaces(client_faces, client_id);
		callback(recognizer.serialize());
	});
};

module.exports = {
	authenticate_client,
	train_model
}
