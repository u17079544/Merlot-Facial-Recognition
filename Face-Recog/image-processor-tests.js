const ip = require('./image-processor.js');
const b64Converter = require('base64-img');
const assert = require('chai').assert;
const i2b = require('image-to-base64');

const number_of_images = 20; 

//convert images to base64
function convert_from_disk() {
	var json_array = [];
	for (var i=0; i < number_of_images; i++) {
		i2b('./t' + i + '.jpg').then(
        	(response) => {
           		json_array.push(response);
        	}
    	).catch(
        	(error) => {
            	console.log(error);
        	}
    	)		
	}
	return json_array;
}

//write tests for validate_image
	//what could go wrong:
	//-image might not be in the proper base64 format
	//-image might not be an image
	//-image might have too-small/too-big dimesions, which might make processing it fail so check image dimensions
	//-image might have a bad resolution
//write tests for process_image
	//what could go wrong:
	//-image might not be created
	//-image might take too much memory
	//-face detector might not find a face
	//-image might not be deleted
//write tests for process_images
	//what could go wrong:
	//-
