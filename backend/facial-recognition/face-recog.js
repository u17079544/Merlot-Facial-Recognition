const db = require('../database/database.js');
//const e = require('exceptions.js');
const ip = require('./image-processor.js');
const fr = require('face-recognition');

const recognizer = fr.FaceRecognizer();

/** @function train_model */
/**
 * Train the model with images and a classification label.
 * @param {string} client_id - The client ID.
 * @param {JSONArray} json_base64_images - The images of the client in a JSON Array in base64 format.
 * @returns {JSONObject} -  The trained model in json.
 */
const train_model = (client_id, json_base64_images) => {
	var face_training_set = ip.process_images(json_base64_images);
	var face_model = null; 
	
	//const number_of_jitter = 1;
	//recognizer.addFaces(face_training_set, client_id, number_of_jitter);
	
	recognizer.addFaces(face_training_set, client_id);
	face_model = recognizer.serialize();

	return face_model;
};
/* Might not be needed.
const save_model = (trained_model) => {
	//save all model in database
};
*/


const load_models = () => {
	//get all models from database.
};

/** @function authenticate_client */
/**
 * Authenticates using the client's face image
 * @param {string} client_base64_image - The client's image in base64 format.
 * @returns {string} -  client ID if there is a match.
 * @throws {NoMatchException} client is not in the database
 */
const authenticate_client = (client_base64_image) => {
	const required_accuracy = 0.85;
	var prediction_accuracy = 0;
	var client_id = '';
	var face_prediction = null;
	var face_models = load_models();
	var client_face = ip.process_image(client_base64_image);
	

	for (var i=0; i < face_models.length; i++) {
		recognizer.load(face_models[i]);
		face_prediction = recognizer.predict(client_face);

		client_id = face_prediction[0].className;
		prediction_accuracy = 1 - face_prediction[0].distance;

		if (prediction_accuracy >= required_accuracy)
			return client_id;
	}

	//log that authenticaion failed if such info is logged

	throw 'No match found.';
};

module.exports = {
	authenticate_client,
	train_model//,
	//save_model
}


