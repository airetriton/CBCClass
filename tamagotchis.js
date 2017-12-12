function DigitalPal(hungry, sleepy, bored, age){
	this.feed = false;
	this.sleepy =  false;
	this.bored = true;
	this.age = age;

	this.feed = function(){
		if (this.hungry===true){
			console.log("That was yummy!");
			this.hungry = false;
			this.sleepy = true;
		} else {
			console.log("No thanks! I'm full.");
		}
	};

	this.sleep = function(){
		if(this.sleepy === true) {
			console.log("Zzzzz");
			this.sleepy = false;
			this.bored = true; 
			this.increaseAge();
		} else {
			console.log("No Way! I'm not tired.");
		}

	};

	this.play = function(){
		if(this.bored===true) {
			console.log("Yay! Let's Play!");
			this.bored = false;
			this.hungry = true;
		} else {
			console.log("Not right now. Later?");
		}

	};

	this.increaseAge = function(){
		this.age += 1;
		console.log("Happy Birthday to me! I am "+ this.age+" old!");
	}


};

var dog = new DigitalPal(false, false, true, 3);

dog.feed();
dog.sleep();
dog.increaseAge();



dog.outside = false;
dog.bark = function() {
	console.log("woof, woof!")};
dog.goOutside = function() {
	if (outside === false){
		console.log("Yay! I love the outdoors!");
		this.outside = true;
		bark();
	} else {
		console.log("We're already outside though...");
	}
};
dog.goInside = function() {
	if (outside === true){
		console.log("Do we have to? Fine...");
		this.outside = false;
	} else {
		console.log("I'm already inside...")
	}
};

var cat = new DigitalPal();
cat.houseCondition = 100;
cat.meow = function(){
	console.log("Meow! Meow!")};
cat.destroyFurniture = function(){
	houseCondition -= 10;
	console.log("Muahahahahah! Take That Furniture");
	this.bored = false;
	this.sleepy = true;
	if (houseCondition === 0) {
		stop;
	}
}
;