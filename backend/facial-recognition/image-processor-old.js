const fs = require('fs');
const fr = require('face-recognition');

const detector = fr.FaceDetector();

/** @function process_image */
/**
 * Train the model with images and a classification label.
 * @param {string} base64_image - An image in base64 format containing a face.
 * @returns {Object} -  The processed image containing only a face.
 */
const process_image = (base64_image) => {
	var image_path = '';
	var temp_image = null;
	var face = null;
	var detected_faces = [];

	image_path = save_image(base64_image);
	temp_image = fr.loadImage(image_path);
	delete_image(image_path);
	detected_faces = detector.detectFaces(temp_image);
	if (detected_faces[0] !== undefined)
		face = detected_faces[0];
	//else ignore invalid image or faceless image

	return face;
};

/** @function train_model */
/**
 * Train the model with images and a classification label.
 * @param {JSONArray} json_base64_images - The images containing faces, in a JSON Array in base64 format.
 * @returns {Array} - An array of processed images containing only faces.
 */
const process_images = (json_base64_images) => {
	var image_path = '';
	var temp_image = null;
	var detected_faces = [];
	var face_collection = [];

	if (Array.isArray(json_base64_images)) {
		for (var i=0; i < json_base64_images.length; i++) {
			image_path = save_image(json_base64_images[i]);
			temp_image = fr.loadImage(image_path);
			delete_image(image_path);
			detected_faces = detector.detectFaces(temp_image);
			if (detected_faces[0] !== undefined)
				face_collection.push(detected_faces[0]);
			//else ignore invalid images or faceless images
		}
	} else 
		throw "Error: expected an array of Base64 images."; //for now, later use exceptions.js

	return face_collection;	
};

//helper functions
const validate_image = (image) => {};

const convert_image = (base64_image) => {
	var matches = base64_image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
	var image_info = {};

    if (matches.length === 3) {
    	image_info.type = matches[1];
    	image_info.data = new Buffer(matches[2], 'base64');
    } else 
    	throw "Error: expected an image in Base64 format."; //for now, later use exceptions.js
    
    return image_info;
};

const save_image = (base64_image) => {
	var image_type_regex = /\/(.*?)$/;
	var image_buffer = convert_image(base64_image);
	var image_dir = './'; //for now, later use a folder or something.
	var image_name = 'tmp-img';
	var image_type = image_buffer.type.match(image_type_regex);
	var image_path = image_dir + image_name + '.' + image_type[1];

	fs.writeFileSync(image_path, image_buffer.data);

	return image_path;
};

const delete_image = (image_name) => {
	fs.unlinkSync(image_name);
};

module.exports = {
	process_image,
	process_images
}
