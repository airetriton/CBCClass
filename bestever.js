var fs = require ("fs");

fs.readFile("best_things_ever.txt", {encoding: 'utf-8'}, function(err, data)
{ 
	

	if (err) {
		console.log(err)
	} 	
	
	var output = data.split(",");
	
	for(var i = 0; i < output.length; i++) {
		
		// output[i];
		console.log(output[i])
		//write to new file when using an for loop
		fs.appendFile("newFile.txt", output[i], + "\n", function(err) {
			console.log(err)
		})
	}



});

//other options

fs.writeFile("newFile3.txt", output.join("\n"), function (err) {
	console.log(err);
});