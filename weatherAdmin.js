//files that you need to pull info from - require files
var userSearch = require("./userSearch.js")
var fs = require("fs");

//weatheradmin constructor
function weatherAdmin() {

//method 1
//new user search (name, location)

	this.newUserSearch = function (name, location) {
		var newUserSearch = new userSearch(name, location);
		var logTxt = 
			"\nName: " + newUserSearch.name +" Location: " + newUserSearch.location +" Date: "+ newUserSearch.date +" "
		fs.appendFile("log.txt", logTxt);
		newUserSearch.getWeather();
		}
	//method 2
	//getData() log a list of searches users have made - pulling from the log.txt file

	this.getData = function (){
		fs.readFile("log.txt", "utf8", function read (err, data) {
			if(err){
				throw err;
			} else {
				content = data;

			}
		})

		console.log (content);
		// processFile();
	}

	

	
};

//calling the function is for testing purposes
// weatherAdmin();
//test WeatherAdmin

module.exports = weatherAdmin;