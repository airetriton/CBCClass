//pull in your require files
var weatherAdmin = require("./weatherAdmin.js");



//call out your process.argv 

var user = process.argv[2];//admin or user
var name = process.argv[3];
var location = process.argv[4];

var w = new weatherAdmin();

if (user === "admin") {
	w.getData();
	;
} else {
	w.newUserSearch(name, location);
}
