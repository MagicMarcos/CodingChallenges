// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, update_light('green') should return 'yellow'.

//? So first if you don't mind. I'd like to clarify a couple of things about this problem before we proceed to the solution.

//? The parameters we're taking in, will they always be a string?
//? will that string always be red, green, or yellow?
//? is there anything else I should know about the parameter being passed in?

//? Great! As for the value we're returning. Are we expecting a string with the name of the color of the next light?

//? would you mind if I walk through a couple of examples?
//? green -> yellow
//? yellow -> red
//? red -> green

//? I'd like to take a moment  here and set up our function and some test cases if you don't mind.

function trafficLight(color) {
	//? so now before I write the code, I'd like to run throughh some pseudo code with you if you don't mind?
	// use a simple if statement to check the current color against the value being passed in and return the next color
	if (current === 'green') {
		return 'yellow';
	} else if (current === 'yellow') {
		return 'red';
	} else {
		return 'green';
	}

	//? is there anything you see here that raises any flags?
	//? does your generally prefer to use ES6 syntax? What about conditional operators?
	//? do you prefer code to be commented out in practice?
}

console.log(trafficLight(red), 'green');
console.log(trafficLight(yellow), 'red');
console.log(trafficLight(green), 'yellow');
