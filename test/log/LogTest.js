var request = require('request');
var expect = require('chai').expect;
var log = require('./log');

describe('add', function(){
	it('should return a JSON array containing the added element', function(){
		
		//Arrange
		var t="Authenticate";//type
	    var d=new Date(Date.now());//date
		i=1234;//clientID
		
		//Act
		log.add(t,d,i);
		
		//Assert
		var result = log.get(d,d);
		expected = {
						type: t,
						date: d,
						clientID: i
				   };
		expect(result).to.deep.include(expected);
	});	
	it('should return an error', function(){
		
		//Arrange
		var t=1;//type
	    var d=new Date(Date.now());//date
		i=1234;//clientID
		
		//Act
		var result = log.add(t,d,i);
		
		//Assert
		expected="error";
		expect(result).to.equal(expected);
	});	
	it('should return an error', function(){
		
		//Arrange
		var t="Authenticate";//type
	    var d="a";//date
		i=1234;//clientID
		
		//Act
		var result = log.add(t,d,i);
		
		//Assert
		expected="error";
		expect(result).to.equal(expected);
	});		
});

describe('get', function(){
	it('should return a JSON array containing a set of elements within the specified boundaries', function(){
		
		log.add("Authenticate",new Date("1/1/2018"),1);
		log.add("Authenticate",new Date("1/2/2018"),2);
		log.add("Authenticate",new Date("1/3/2018"),3);
		log.add("Authenticate",new Date("1/4/2018"),4);
		log.add("Authenticate",new Date("1/5/2018"),5);
		
		
		//Arrange
		var start=new Date("1/2/2018");
	    var end=new Date("1/4/2018");
		
		//Act
		var result = log.get(start,end);
		
		//Assert
		expectedToHave = [{
						type: "Authenticate",
						date: new Date("1/2/2018"),
						clientID: 2
				   },
				   {
						type: "Authenticate",
						date: new Date("1/3/2018"),
						clientID: 3
				   },
				   {
						type: "Authenticate",
						date: new Date("1/4/2018"),
						clientID: 4
				   }];
		expectedNotToHave = [{
						type: "Authenticate",
						date: new Date("1/1/2018"),
						clientID: 2
				   },
				   {
						type: "Authenticate",
						date: new Date("1/5/2018"),
						clientID: 3
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
