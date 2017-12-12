// Combines two command line arguments (strings).
// console.log(process.argv[2] + process.argv[3]);

// Adds two command line arguments (numbers).
console.log(parseFloat(process.argv[2]) + parseFloat(process.argv[3]));


var a = process.argv[2];
var b = process.argv[3];

if (a===b) {
	console.log(true);
}
else {
	console.log(false);
}

console.log (process.argv[2] === process.argv[3]);