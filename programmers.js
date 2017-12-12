function programmers(name, position, age, language){
	this.name = name;
	this.position = position;
	this.age = age;
	this.language = language;
	this.printStats = function() {
  	console.log(this.name + " " + this.position + " " + this.age + " " + this.language + " " )
     }
	}

	var myProgrammer = new programmers("Triton", "Assassin", 24, "Python")
	
	myProgrammer.printStats();
	
	