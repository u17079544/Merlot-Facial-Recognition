const fs = require('fs');
const fr = require('face-recognition');
const recognizer = fr.FaceRecognizer();
const detector = fr.FaceDetector();
var b64 = require('base64-img');

function train(images, label) {
	var newImages = processImages(images);

	//const numJitter = 1;
	console.log("Training on " + images.length + " images...");
	recognizer.addFaces(newImages, label);
	const model = recognizer.serialize();

	return model;
}

function pushToDatabase(images, label) {
	var model = train(images,label);
	database.Insert(label, images, model);
}

function authenticate(image) {
	var dataBank = database.GetDataBank();
	var model = null;
	
	var result = {};
	result.result = 'No match.';
	result.error = true;

	for (var i=0; i < dataBank.length; i++) {
		model = dataBank[i].model;
		result = authenticateOne(image,model);
		if (!result.error)
			return result;
	}

	return result;
}

function authenticateOne(image, model) {
	var img = processImages(image);
	var label = '';
	var response = {};
	response.result = 'No match.';
	response.error = true;

	recognizer.load(model);
	var prediction = recognizer.predict(img);
	/*console.log(prediction);
    if ((1 - prediction[0].distance) > 0.85) {
      response.result = prediction[0].className;
      response.error = false;
    }*/
	
	return (1-prediction[0].distance)*100;
}


//helper functions
function convertToImage(base64Image) {
	var matches = base64Image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
	var response = {};

    if (matches.length !== 3)
    	return new Error('Invalid input string');

    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');

    return response;
}

function saveToDisk(base64Image) {
	// Regular expression for image type:
    // This regular image extracts the "jpeg" from "image/jpeg"
    var imageTypeRegularExpression = /\/(.*?)$/;

    var imageBuffer = convertToImage(base64Image);
    var userUploadedFeedMessagesLocation = './';
	var uniqueRandomImageName = 'image1';
        // This variable is actually an array which has 5 values,
        // The [1] value is the real image extension
    var imageTypeDetected = imageBuffer.type.match(imageTypeRegularExpression);

    var userUploadedImagePath = userUploadedFeedMessagesLocation + uniqueRandomImageName + '.' + imageTypeDetected[1];

        // Save decoded binary image to disk
    try {
    	fs.writeFileSync(userUploadedImagePath, imageBuffer.data);
    }
    catch(error) {
    	console.log('ERROR:', error);
    }

    return userUploadedImagePath;
}

function deleteFromDisk(filename) {
	var fs = require('fs');
	fs.unlinkSync(filename);
}

function processImages(images) {
	var filename = "";
	var newImages = [];
	var faces = [];
	var image1 = null;

	if (Array.isArray(images)) {
		for (var i=0; i < images.length; i++) {
			filename = saveToDisk(images[i]);
			//console.log(filename);
			image1 = fr.loadImage(filename);
			//console.log(image1);
			faces = detector.detectFaces(image1);
			if (faces[0] !== undefined)
				newImages.push(faces[0]);
			deleteFromDisk(filename);	
		}
	} else {
		filename = saveToDisk(images);
		newImages = detector.detectFaces(fr.loadImage(filename))[0];
		deleteFromDisk(filename);
	}

	return newImages;
}


//testing
var img1 = null;
var img2 = null;
let b = null;

//test image
img2 = b64.base64Sync('(10).jpg');
//console.log(img2);
console.log("Single Image Processing...");

//images
var imgs_all = [];

for (var j=0; j < 9; j++) {
	b64Img = b64.base64Sync('('+(j+1)+').jpg');
	imgs_all.push(b64Img);
}

console.log("Multiple Image Processing....");
var m = train(imgs_all, 'Nolan');

console.log("Training done!");

console.log(authenticateOne(img2,m) + "%");
//4121415991


