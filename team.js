var inquirer = require("inquirer");

function coinFlip(){
	var headsOrTails = Math.floor(Math.random()*2);
	return headsOrTails;
}


function Player (name, position, defense, offense) {
	this.name = name;
	this.position = position; 
	this.defense = defense;
	this.offense = offense;
	
	
	this.goodGame = function(){
		if (coinFlip > 1){
			Offense += Math.floor(Math.random()*10);
			
			} else {
			Defense	+= Math.floor(Math.random()*10)
			
		}
	}

	this.badGame = function(){
		if (coinFlip > 1){
			Offense -= Math.floor(Math.random()*10);
			} else {
			Defense	-= Math.floor(Math.random()*10)
			}
	}
}

Player.prototype.printStats = function() {
  	console.log(this.name + " " + this.osition + " " + this.defense + " " + this.offense + " ")
  	console.log("---------------");
     };

var count = 0;

var playerArray = [];

var askQuestion = function() {

	if (count < 8) {

		console.log("NEW PLAYER");

		inquirer.prompt([
	{
        name: "name",
        message: "What is your name?"
      }, {
        name: "position",
        message: "What is your current position?"
      }, {
        name: "offense",
        message: "What is the strength of your offense in a number between 1 - 10?"
       }, {
        name: "defense",
        message: "What is the strength of your defense in a number between 1 - 10?"
       },
      

    ]).then(function(answers) {
      // initializes the variable newguy to be a programmer object which will
      // take in all of the user's answers to the questions above
      var newPeople = new Player(
        answers.name,
        answers.position,
        answers.offense,
        answers.defense);
      // pushes newguy object into our array
      playerArray.push(newPeople);
      // add one to count to increment our recursive loop by one
      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
  }
  else {
    for (var x = 0; x < playerArray.length; x++) {
      playerArray[x].printStats();
    }
  }
};

// call askQuestion to run our code
askQuestion();