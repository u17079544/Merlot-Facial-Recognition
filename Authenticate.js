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

/** @function train */
/**
 * Train the model with images and a classification label.
 * @param {Array} imgsClient - The images of the client.
 * @param {string} lblClient - The client name or ID.
 * @returns {JSONObject} -  The trained model in json.
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
 * @param {Object} img - The image of the client.
 * @returns {JSONObject} - Information of client or Error has occurred.
 */
Authentication.prototype.authenticate = function(img) {
  const fr = require("face-recognition");
  const recognizer = fr.FaceRecognizer();
  const db = require("database.js");
  const table = db.getDataBank();
  var clientID = "";
  
  table.forEach(function(row) {
    var modelState = row.model;
    recognizer.load(modelState);
    var prediction = recognizer.predict(img);
  });
  
  if (clientID == "")
    return error;
  return clientID;
}


//Exporting module
modules.exports = new Authentication();
