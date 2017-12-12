var num1 = process.argv[3];
num1 = parseInt(num1);
var num2 = process.argv[4];
num2 = parseInt(num2);

if (num1===num2) {
	console.log(true);
}
else {
	console.log(false);
}

if (num1 % 7 === 0 && num2 % 7 === 0) {
	console.log(true);
} else {
	console.log(false);
}

console.log (process.argv[2] === process.argv[3]);

//this pulls in the file
var fs = require("fs")
//fs is built into mode as a modulus