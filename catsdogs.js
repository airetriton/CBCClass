var dogs = {
	raining: true,
	noise: "woof!",
	makeNoise: function () {
		console.log(this.noise)
	}
};

var cats = {
	raining: false,
	noise: "Meow!",
	makeNoise: function() {
		console.log(this.noise)
	}
};

dogs.makeNoise();

cats.makeNoise();

if (this.raining === true) {
	console.log(this.noise)
};

dogs.makeNoise();
cats.raining = true;
cats.makeNoise();

var massHysteria = function(dogs, cats) {
	if(dogs.raining ===true && cats.raining ===true){
		console.log("dogs and cats living together! Mass Hysterial!");

	}
};

massHysteria();

// # **Instructions**

// * Make a dogs object with three keys...

//   * First key called "raining" with a value of true

// * Second key called "noise" with a value of "Woof!"

// * Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining dogs

// * Make a cats object with three keys...

//   * First key called "raining" with a value of false

//   * Second key called "noise" with a value of "Meow!"

//   * Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining cats

// * Make the dog bark

// * Make the cat meow

// * BONUS: Create a function called "massHysteria" which takes in both the cats and the dogs object and prints "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!" if both of the `raining` keys are equal to true.

// * BONUS: Look to see if you can find any means to simplify your code further and further