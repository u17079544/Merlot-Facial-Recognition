const fs = require('fs');

let add = function (t,d,i)//type,date,id
{	
	if(typeof t === 'string' && d instanceof Date)
	{
		var json = fs.readFileSync('logs.json');
		var log = JSON.parse(json)
		var logEntry = {
						type: t,
						date: d,
						clientID: i
				   };
		log.push(logEntry)
		
		var	data = JSON.stringify(log);
		fs.writeFileSync('logs.json',data);		
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
		var json = fs.readFileSync('logs.json');
		var log = JSON.parse(json);
		var data = [];
		for(var i=0;i<log.length;i++)
		{
			var compareDate = Date.parse(log[i].date);
			if((compareDate-start)>=0 && (compareDate-end)<=0)
			{
				log[i].date=new Date(compareDate);
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
