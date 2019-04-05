const fs = require('fs');
const Jimp = require("jimp");
const fr = require('face-recognition');

const detector = fr.FaceDetector();

const dimension = 300;
const image_quality = 20;

const randomInt = (min,max) => {
	return parseInt((Math.random() * (max - min + 1)), 10) + min;
};

const generateName = () => {
	var randomString = '';
	var randomNumber = randomInt(4,8);
	for (var i=0; i < randomNumber; i++)
		randomString += randomInt(1,1000);
	return randomString;
};

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

function load_image(base64_image) {
	var filename = '';
	var image_type_regex = /\/(.*?)$/;
	var current_image = null;
	var image_promise = {};
	var extension = '';
	
	current_image = convert_image(base64_image);
	extension = current_image.type.match(image_type_regex)[1];
	filename = generateName() + '.' + extension;
	image_promise.image = Jimp.read(current_image.data);
	image_promise.name = filename;

	return image_promise;
}

function write_image(image_promise, image_filename) {
	return new Promise((resolve, reject) => {
		image_promise
		.resize(dimension,dimension)
		.quality(image_quality)
		.write(image_filename, () => {
			resolve(image_filename);
		});
	});
}

async function load_all_images(json_base64_images) {
	var single_promise = null;
	var single_image = null;
	var filenames = [];
	for (var i=0; i < json_base64_images.length; i++) {
		single_promise = load_image(json_base64_images[i]);
		single_image = await single_promise.image;
		filenames.push(await write_image(single_image, single_promise.name));
	}

	return filenames;
}

const process_image = (base64_image, callback) => {
	var image_promise = load_image(base64_image);
	image_promise.image.then((image) => {
		write_image(image, image_promise.name).then((filename) => {
			var current_image = fr.loadImage(filename);
			var detected_faces = detector.detectFaces(current_image);
			var face = null;
			if (detected_faces[0] !== undefined)
				face = detected_faces[0];
			callback(face);
			delete_image(filename);
		});
	});
};

const process_images = (json_base64_images, callback) => {
	load_all_images(json_base64_images).then((filenames) => {
		var current_image = null;
		var detected_faces = null;
		var face_collection = [];
		for (var i=0; i < filenames.length; i++) {
			current_image = fr.loadImage(filenames[i]);
			detected_faces = detector.detectFaces(current_image)
			if (detected_faces[0] !== undefined)
				face_collection.push(detected_faces[0]);
			delete_image(filenames[i]);
		}
		callback(face_collection);
	});
};

const delete_image = (image_name) => {
	fs.unlinkSync(image_name);
};

module.exports = {
	process_image,
	process_images
}