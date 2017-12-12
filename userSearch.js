//pull data from weather.js
var weather = require("weather-js");
var fs = require("fs");

function userSearch (name, location) {
	this.name = name; 
	this.location = location;
	this.date = Date.now();

	this.getWeather = function () {
		weather.find({
			search: this.location,
			degreeType: "F"
		}, function(err, result) {
			if(err){
				console.log(err);
			}else {

				fs.appendFileSync("log.txt", JSON.stringify(result, null, 2));;
				console.log(JSON.stringify(result, null, 2));;
			}
		})

		}

	};
//insert username and real location from file...just using this to test
// var u = new userSearch ("name", "location")
// var u = new userSearch ("Triton", "kearns");
// u.getWeather();

// userSearch();

module.exports = userSearch;