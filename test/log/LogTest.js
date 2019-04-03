var request = require('request');
var expect = require('chai').expect;
var log = require('./log');

describe('add', function(){
	it('should return a JSON array containing the added element', function(){
		
		//Arrange
		var t="Authenticate";//type
	    var da=new Date(Date.now());//date
		i=1234;//clientID
		s=true//success
		du=52643//duration
		
		//Act
		log.add(t,da,i,s,du);
		
		//Assert
		var result = log.get(da,da);
		expected = {
						clientID: i,
						duration: du,
						success: s,						
						timestamp: da,
						type: t
				   };
		expect(result).to.deep.include(expected);
	});	
	it('should return an error', function(){
		
		//Arrange
		var t=1;//type
	    var da=new Date(Date.now());//date
		i=1234;//clientID
		s=true//success
		du=52643//duration
		
		//Act
		var result = log.add(t,da,i,s,du);
		
		//Assert
		expected="error";
		expect(result).to.equal(expected);
	});	
	it('should return an error', function(){
		
		//Arrange
		var t="Authenticate";//type
	    var da="a";//date
		i=1234;//clientID
		s=true//success
		du=52643//duration
		
		//Act
		var result = log.add(t,da,i,s,du);
		
		//Assert
		expected="error";
		expect(result).to.equal(expected);
	});	
	it('should return an error', function(){
		
		//Arrange
		var t="Authenticate";//type
	    var da=new Date(Date.now());//date
		i=1234;//clientID
		s="a"//success
		du=52643//duration
		
		//Act
		var result = log.add(t,da,i,s,du);
		
		//Assert
		expected="error";
		expect(result).to.equal(expected);
	});	
	it('should return an error', function(){
		
		//Arrange
		var t="Authenticate";//type
	    var da=new Date(Date.now());//date
		i=1234;//clientID
		s=true//success
		du="a"//duration
		
		//Act
		var result = log.add(t,da,i,s,du);
		
		//Assert
		expected="error";
		expect(result).to.equal(expected);
	});	
});

describe('get', function(){
	it('should return a JSON array containing a set of elements within the specified boundaries', function(){
		
		log.add("Authenticate",new Date("1/1/2018"),1,true,52643);
		log.add("Authenticate",new Date("1/2/2018"),2,true,52643);
		log.add("Authenticate",new Date("1/3/2018"),3,true,52643);
		log.add("Authenticate",new Date("1/4/2018"),4,true,52643);
		log.add("Authenticate",new Date("1/5/2018"),5,true,52643);
		
		
		//Arrange
		var start=new Date("1/2/2018");
	    var end=new Date("1/4/2018");
		
		//Act
		var result = log.get(start,end);
		
		//Assert
		expectedToHave = [{
						clientID: 2,
						duration: 52643,
						success: true,						
						timestamp: new Date("1/2/2018"),
						type: "Authenticate"
				   },
				   {
						clientID: 3,
						duration: 52643,
						success: true,	
						timestamp: new Date("1/3/2018"),
						type: "Authenticate"
				   },
				   {
						clientID: 4,
						duration: 52643,
						success: true,	
						timestamp: new Date("1/4/2018"),
						type: "Authenticate"
				   }];
		expectedNotToHave = [{
						clientID: 1,
						duration: 52643,
						success: true,	
						timestamp: new Date("1/1/2018"),
						type: "Authenticate"
				   },
				   {
						clientID: 5,
						duration: 52643,
						success: true,	
						timestamp: new Date("1/5/2018"),
						type: "Authenticate"
				   }];
		expect(result).to.include.deep.members(expectedToHave).but.not.include.deep.members(expectedNotToHave);
	});	
	it('should return an error', function(){
						
		//Arrange
		var start="a";
	    var end=new Date("1/4/2018");
		
		//Act
		var result = log.get(start,end);
		
		//Assert
		expected="error";
		expect(result).to.equal(expected);
	});	
	it('should return an error', function(){
						
		//Arrange
		var start=new Date("1/2/2018");
	    var end="a";
		
		//Act
		var result = log.get(start,end);
		
		//Assert
		expected="error";
		expect(result).to.equal(expected);
	});	
});
