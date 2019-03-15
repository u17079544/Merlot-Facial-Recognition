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
/** @member {JSONArray} - The images in a JSON array in base64 format */
Authentication.prototype.images = null;

//Defining Authentication functions
/** @function toBase64 */
/**
 * Convert an image into a Base64 string.
 * @param {Object} img - The image in jpg/gif/png.
 * @returns {String} - The image converted to Base64
 */
Authentication.prototype.toBase64 = function(img) {
  let imageBuffer = new Buffer(img);
  return imageBuffer.toString("base64");
}

/** @function toImage */
/**
 * Convert a Base64 string into an image.
 * @param {string} base64 - The Base64 string of the image.
 * @returns {Object} - The image in jpg/gif/png.
 */
Authentication.prototype.toImage = function(base64) {
  return Buffer.from(base64,"base64");
}

/** @function getFakeFaces */
/**
 * Get fake faces from filesystem.
 * @returns {Object} - The image in jpg/gif/png.
 */
Authentication.prototype.getFakeFaces() {
  const fs = require('fs');
  //complete later ...
}

/** @function train */
/**
 * Train the model with images and a classification label.
 * @param {JSONArray} imgsClient - The images of the client in a JSON Array in base64 format.
 * @param {string} lblClient - The client name or ID.
 * @returns {JSONObject} -  The trained model in json.
 */
Authentication.prototype.train = function(imgsClient,lblClient) {
  const fr = require("face-recognition");
  const recognizer = fr.FaceRecognizer();
  const clientFaces = [];
  const fakeFaces = [];
  
  if (imgsClient != null && lblClient != "") {
    imgsClient.forEach(function(image) {
      clientFaces.push(this.toImage(image)); //converting image that are in base64
    });
    
    const numJitters = 15;
    recognizer.addFaces(clientFaces, lblClient, numJitters);
    recognizer.addFaces(fakeFaces, "fake", numJitters);
    const modelState = recognizer.serialize();
    
    return modelState;
  } else {
    return {null};
  }
}

/** @function authenticate */
/**
 * Recognize the face of the client.
 * @param {Object} img - The image of the client.
 * @returns {JSONObject} - Information of client or Error has occurred.
 */
Authentication.prototype.authenticate = function(img) {
  const fr = require("face-recognition");
  const db = require("database.js");
  const recognizer = fr.FaceRecognizer();
  const table = db.getDataBank();
  var clientID = "";
  
  table.forEach(function(row) {
    var modelState = row.model;
    recognizer.load(modelState);
    var prediction = recognizer.predict(img);
    if ((1 - prediction[0].distance) > 0.85) 
      clientID = prediction[0].className;
  });
  
  if (clientID == "")
    return error;
  return clientID;
}


//Exporting module
modules.exports = new Authentication();
