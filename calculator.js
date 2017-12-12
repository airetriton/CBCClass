
var operator = process.argv[2];
var num1 = process.argv[3];
num1 = parseInt(num1);	
var num2 = process.argv[4];
num2 = parseInt(num2);	

if (operator==="add") {

	console.log(num1 + num2);
}
else if (operator==="multiply") {

	console.log(num1 * num2);
}
else if(operator==="subtract") {

	console.log(num1 - num2);
}
else if (operator==="divide") {

	console.log(num1 / num2);
}	
else if (operator==="^") {

	console.log(num1 ^ num2);
}	
else if (operator==="exponent") {
	console.log(num1**num2);
}
else  {
	outputnum = error;
}