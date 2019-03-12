/** @module Authentication */
/** @class */
var Authentication = function() {};

//Defining Authentication member variables
/** @member {string} */
Authentication.prototype.model = ""; //serialization of trained model
/** @member {string} */
Authentication.prototype.label = "";
/** @member {Object} */
Authentication.prototype.image = null;
/** @member {Array} */
Authentication.prototype.images = null;

//Defining Authentication functions
/** @function toBase64 */
/**
 * Convert an image into a Base64 string.
 * @param {string} base64 - The Base64 string of the image.
 */
Authentication.prototype.toBase64 = function(img) {
}

/** @function toImage */
/**
 * Convert a Base64 string into an image.
 * @param {string} base64 - The Base64 string of the image.
 */
Authentication.prototype.toImage = function(base64) {
}

/** @function train */
/**
 * Train the model with images and a classification label.
 * @param {Array} imgsClient - The images of the client.
 * @param {string} lblClient - The client name or ID.
 */
Authentication.prototype.train = function(imgsClient,lblClient) {
  if (imgsClient != null && lblClient != "") {
    
  } else {
    //send error
  }
}

/** @function authenticate */
/**
 * Recognize the face of the client.
 * @param {object} img - The image of the client.
 */
Authentication.prototype.authenticate = function(img) {
}

//load model from db
Authentication.prototype.loadModel = function() {
}

//load images from db
Authentication.prototype.loadImages = function() {
}

//load image from db
Authentication.prototype.loadImage = function() {
}

//save model to db
Authentication.prototype.saveModel = function() {
}

//save images to db
Authentication.prototype.saveImages = function() {
}

//save image to db
Authentication.prototype.saveImage = function() {
}

//Exporting module
modules.exports = new Authentication();
