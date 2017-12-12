function Character(name, profession, gender, age, strength, hitPoints) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hitPoints = hitPoints;
  this.printStats = function() {
  	console.log(this.name + " " + this.profession + " " + this.gender + " " + this.age + " " + this.strength + " " + this.hitPoints + "" )
     }
  };



var myCharacter = new Character("Triton", "Assassin", "Nonya", 24, 780, 300)

var yourCharacter = new Character("Jordan", "Thief", "MAN", 32, 520, 450)

myCharacter.printStats();

yourCharacter.printStats();

var IsAlive = function(myCharacter, yourCharacter) {
	if (this.hitPoints >= 0) {
		return true;
	console.log(this.name + " is still alive");
	} else {
		console.log("wa wa wa...You Are Dead")
	}
};

var Attack = function(myCharacter, yourCharacter){
	console.log(myCharacter.hitPoints - yourCharacter.hitPoints);
};




