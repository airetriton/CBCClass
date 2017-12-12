var bandlist = require("./bandcrap.js");

// one way to do it
for(var key in bandList){
	console.log(key);
	console.log(bandList[key]);
}

// never going to work because it is not an array - can't do a for loop
// for (var i = 0; i < newBands.length; i++) {
// 	console.log(newBands[i]);
// };
// console.log(bands);


// this is like a for loop for arrays, and works for objects instead
Object.keys(bandList).forEach(function(k){
	console.log(k);
	console.log(bankdList[k]);
});

