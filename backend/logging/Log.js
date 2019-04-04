const fs = require('fs');

let add = function (t,da,i,s,du)//type,date,id,success,duration
{	
	if(typeof t === 'string' && da instanceof Date && typeof s === 'boolean' && typeof du === 'number')
	{
		var json = fs.readFileSync(__dirname + '/logs.json');
		var log = JSON.parse(json)
		var logEntry = {
						clientID: i,
						duration: du,
						success: s,						
						timestamp: da,
						type: t
				   };
		log.push(logEntry)
		
		var	data = JSON.stringify(log);
		fs.writeFileSync(__dirname + '/logs.json',data);		
	}
	else
	{
		return "error";
	}	
};

let get = function (start,end)
{
	if(start instanceof Date && end instanceof Date)
	{
		var json = fs.readFileSync(__dirname + '/logs.json');
		var log = JSON.parse(json);
		var data = [];
		for(var i=0;i<log.length;i++)
		{
			var compareDate = Date.parse(log[i].timestamp);
			if((compareDate-start)>=0 && (compareDate-end)<=0)
			{
				log[i].timestamp=new Date(compareDate);
				data.push(log[i]);			
			}
		}
		return data;
	}
	else
	{
		return "error";
	}
};

exports.add = add;
exports.get = get;
