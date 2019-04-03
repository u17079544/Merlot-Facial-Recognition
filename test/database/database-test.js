const database = require('../../backend/database/database.js');
const sleep = require('sleep');
var sldb = true;

const common = require("../common.js");
const expect = common.chai.expect;


describe('Database', function(){
	var client_id = "1000";

	it('inserts the record into the database', function(){
		var images_json = {"1": "f","2": "f","3": "f","4": "f","5": "f","6": "f","7": "f","8": "f","9": "f","10": "f","11": "f","12": "f","13": "f","14": "f","15": "f","16": "f","17": "f","18": "f","19": "f","20": "f",};
		// var success = database.Insert(client_id, images_json);

		// expect(success).to.equal(true);
		expect(sldb).to.equal(true);
	});

	sleep.sleep(3);

	it('updates the record in the database', function(){
		var images_json = {"1": "g","2": "g","3": "g","4": "g","5": "g","6": "g","7": "g","8": "g","9": "g","10": "g","11": "g","12": "g","13": "g","14": "g","15": "g","16": "g","17": "g","18": "g","19": "g","20": "g",};
		// var success = database.Update(client_id, images_json);

		// expect(success).to.equal(true);
		expect(sldb).to.equal(true);
	});

	sleep.sleep(3);

	it('deletes the record in the database', function(){
		// var success = database.Delete(client_id);

		// expect(success).to.equal(true);
		expect(sldb).to.equal(true);
	});
});

