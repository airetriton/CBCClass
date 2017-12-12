var fs = require("fs");
var textFile = process.argv[3];
var result = process.argv[4];
var adjNum = (Math.random(500 + 1 +250) -250);
 

//need to name a function and then invoke it....CRAP
fs.readFile("bank.txt", {encoding: 'utf-8'}, function(err, data)

{

if (result === "lotto") { 
	adjNum();
	fs.appendFile(bank.txt, adjNum + ", ", function(err) {
		
		if(adjNum >= 0){
			console.log('deposit' +adjNum);
		} else {
			console.log('withdraw' +adjNum);

		}
		});
}

else if (result === "total") {
	fs.readFile("bank.txt", {encoding: 'utf-8'}, function (err, data){
		data = data.split(", ");
		var amount = 0;

		for (var i = 0; i < data.length; i++) {

			var parsedNumber = parseFloat(data[i]);
			if(parsedNumber) {
				amount+= parsedNumber;
			} 
		}

		console.log("You have a total of " + amount.toFixed(2));
	});



}

})