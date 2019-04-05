const database = require('../../backend/database/database.js');
const common = require("../common.js");
const expect = common.chai.expect;


describe('Database', function(){
	describe('Insert(client_id, images)', function(){
		it('inserts the record into the database', function(){
			var images_json = {"1": "f","2": "f","3": "f","4": "f","5": "f","6": "f","7": "f","8": "f","9": "f","10": "f","11": "f","12": "f","13": "f","14": "f","15": "f","16": "f","17": "f","18": "f","19": "f","20": "f",};
			database.Insert("9000", images_json).then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});

		it('inserts the record into the database', function(){
			var images_json = {"1": "f","2": "f","3": "f","4": "f","5": "f","6": "f","7": "f","8": "f","9": "f","10": "f","11": "f","12": "f","13": "f","14": "f","15": "f","16": "f","17": "f","18": "f","19": "f","20": "f",};
			database.Insert("9001", images_json).then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});

		it('inserts the record into the database', function(){
			var images_json = {"1": "f","2": "f","3": "f","4": "f","5": "f","6": "f","7": "f","8": "f","9": "f","10": "f","11": "f","12": "f","13": "f","14": "f","15": "f","16": "f","17": "f","18": "f","19": "f","20": "f",};
			database.Insert("9002", images_json).then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});

		it('inserts the record into the database', function(){
			var images_json = {"1": "f","2": "f","3": "f","4": "f","5": "f","6": "f","7": "f","8": "f","9": "f","10": "f","11": "f","12": "f","13": "f","14": "f","15": "f","16": "f","17": "f","18": "f","19": "f","20": "f",};
			database.Insert("9003", images_json).then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});

		it('inserts the record into the database', function(){
			var images_json = {"1": "f","2": "f","3": "f","4": "f","5": "f","6": "f","7": "f","8": "f","9": "f","10": "f","11": "f","12": "f","13": "f","14": "f","15": "f","16": "f","17": "f","18": "f","19": "f","20": "f",};
			database.Insert("9004", images_json).then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});

		it('inserts the record into the database', function(){
			var images_json = {"1": "f","2": "f","3": "f","4": "f","5": "f","6": "f","7": "f","8": "f","9": "f","10": "f","11": "f","12": "f","13": "f","14": "f","15": "f","16": "f","17": "f","18": "f","19": "f","20": "f",};
			database.Insert("9005", images_json).then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});

		it('inserts the record into the database', function(){
			var images_json = {"1": "f","2": "f","3": "f","4": "f","5": "f","6": "f","7": "f","8": "f","9": "f","10": "f","11": "f","12": "f","13": "f","14": "f","15": "f","16": "f","17": "f","18": "f","19": "f","20": "f",};
			database.Insert("9006", images_json).then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});

		it('inserts the record into the database', function(){
			var images_json = {"1": "f","2": "f","3": "f","4": "f","5": "f","6": "f","7": "f","8": "f","9": "f","10": "f","11": "f","12": "f","13": "f","14": "f","15": "f","16": "f","17": "f","18": "f","19": "f","20": "f",};
			database.Insert("9007", images_json).then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});

		it('inserts the record into the database', function(){
			var images_json = {"1": "f","2": "f","3": "f","4": "f","5": "f","6": "f","7": "f","8": "f","9": "f","10": "f","11": "f","12": "f","13": "f","14": "f","15": "f","16": "f","17": "f","18": "f","19": "f","20": "f",};
			database.Insert("9008", images_json).then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});

		it('inserts the record into the database', function(){
			var images_json = {"1": "f","2": "f","3": "f","4": "f","5": "f","6": "f","7": "f","8": "f","9": "f","10": "f","11": "f","12": "f","13": "f","14": "f","15": "f","16": "f","17": "f","18": "f","19": "f","20": "f",};
			database.Insert("9009", images_json).then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});
	});

	describe('Activate(client_id)', function(){
		it('inserts the record into the database', function(){
			database.Insert("11000").then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});
		

		it('inserts the record into the database', function(){
			database.Insert("11001").then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});


		it('inserts the record into the database', function(){
			database.Insert("11002").then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});
		
		it('inserts the record into the database', function(){
			database.Insert("11003").then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});
		
		it('inserts the record into the database', function(){
			database.Insert("11004").then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});
	});


	describe('Update(client_id, images)', function(){
		it('updates the record in the database', function(){
			var images_json = {"1": "img64img","2": "img64img","3": "img64img","4": "img64img","5": "img64img","6": "img64img","7": "img64img","8": "img64img","9": "img64img","10": "img64img","11": "img64img","12": "img64img","13": "img64img","14": "img64img","15": "img64img","16": "img64img","17": "img64img","18": "img64img","19": "img64img","20": "img64img",};
			database.Update("15000", images_json).then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});

		it('updates the record in the database', function(){
			var images_json = {"1": "img64img","2": "img64img","3": "img64img","4": "img64img","5": "img64img","6": "img64img","7": "img64img","8": "img64img","9": "img64img","10": "img64img","11": "img64img","12": "img64img","13": "img64img","14": "img64img","15": "img64img","16": "img64img","17": "img64img","18": "img64img","19": "img64img","20": "img64img",};
			database.Update("15001", images_json).then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});

		it('updates the record in the database', function(){
			var images_json = {"1": "img64img","2": "img64img","3": "img64img","4": "img64img","5": "img64img","6": "img64img","7": "img64img","8": "img64img","9": "img64img","10": "img64img","11": "img64img","12": "img64img","13": "img64img","14": "img64img","15": "img64img","16": "img64img","17": "img64img","18": "img64img","19": "img64img","20": "img64img",};
			database.Update("15002", images_json).then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});

		it('updates the record in the database', function(){
			var images_json = {"1": "img64img","2": "img64img","3": "img64img","4": "img64img","5": "img64img","6": "img64img","7": "img64img","8": "img64img","9": "img64img","10": "img64img","11": "img64img","12": "img64img","13": "img64img","14": "img64img","15": "img64img","16": "img64img","17": "img64img","18": "img64img","19": "img64img","20": "img64img",};
			database.Update("15003", images_json).then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});

		it('updates the record in the database', function(){
			var images_json = {"1": "img64img","2": "img64img","3": "img64img","4": "img64img","5": "img64img","6": "img64img","7": "img64img","8": "img64img","9": "img64img","10": "img64img","11": "img64img","12": "img64img","13": "img64img","14": "img64img","15": "img64img","16": "img64img","17": "img64img","18": "img64img","19": "img64img","20": "img64img",};
			database.Update("15004", images_json).then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});
	});


	describe('Delete(client_id)', function(){
		
		it('deactivates the record in the database', function(){
			database.Delete("9000").then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});

		it('deactivates the record in the database', function(){
			database.Delete("9001").then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});

		it('deactivates the record in the database', function(){
			database.Delete("9002").then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});

		it('deactivates the record in the database', function(){
			database.Delete("9003").then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});

		it('deactivates the record in the database', function(){
			database.Delete("9004").then((val) => {
				expect(val).to.equal(true);
			}, (err) => {
				console.log(err);
			;})
		});

	});
});

