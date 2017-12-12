// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// var request = require("request");


// var num3 = process.argv[2];
// num3 = parseInt(num3);
// var num2 = process.argv[3];
// num2 = parseInt(num2);	



// var sortNumber = function (a, b) {
//     return a - b;
// }

// var numArray = [20, 2, 11, 4, 1];
// numArray.sort(sortNumber);
// alert(numArray.join(","));



//Chris solution
// var hateArray = process.argv;
// var array = [];

// for (var i = 2; i = hateArray.length; i++) {
// 	array.push(hateArray[i])
// }
// array.sort();

// console.log(array);



//class solution

var nodeArg = process.argv;

var numArray=[];

for (var i=2; i < nodeArg.length; i++) {
	numArray.push(parseFloat(nodeArg[i]));

}

console.log(numArray);

console.log(numArray.sort(sortNums));


function sortNums(a, b) {
    return (a - b);
}