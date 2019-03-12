//Defining Authentication object
var Authentication = function() {};

//Defining Authentication member variables
Authentication.prototype.model = ""; //serialization of trained model
Authentication.prototype.label = "";
Authentication.prototype.image = null;
Authentication.prototype.images = null;

//Defining Authentication functions
//convert Base64 to image
Authentication.prototype.toBase64 = function(img) {
}

//convert image to Base64
Authentication.prototype.toImage = function(base64) {
}

//train model
Authentication.prototype.train = function(imgsClient,lblClient) {
  if (imgsClient != null && lblClient != "") {
    
  } else {
    //send error
  }
}

//authentication method
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
