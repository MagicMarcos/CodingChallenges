// Variables
// Create a variable, reassign the value, add the value to the dom

let variableNum;

variableNum = 3;

const variableResult = document.querySelector('.variableResult');

variableResult.innerText = variableNum;

// Create a variable, multiply it by itself, replace a number in the dom with the new number from the multiplication

let variableReplacement = 5;

variableReplacement *= variableReplacement;

// !replace a number in the dom with the new number
setTimeout(() => {
	variableResult.innerText = variableReplacement;
}, 4000);

// Functions
// Create a function that takes in one argument. That argument should be a Fahrenheit value to be converted to Celcius. Console log the converted value
const result = document.querySelector('.celsius');
const tempInput = document.querySelector('.fTemp');
document.querySelector('.convert').addEventListener('click', convertTemp);

function convertTemp(temp) {
	temp = tempInput.value;
	let celsiusTemp = (temp - 32) / 1.8;
	result.innerText = celsiusTemp;
	console.log(celsiusTemp);
}

// Create a function takes in two arguments. Create a function that takes in one argument and alerts that value. Call the second function with an argument that is the sum from the original two argument function.

function takeTwoArgs(n1, n2) {
	return n1 + n2;
}

function oneArgAndAlert(arg) {
	alert(arg);
}

oneArgAndAlert(takeTwoArgs(3, 5));

// Conditionals
// Create a function that choses a random throw of rock, paper, scissors, lizard, spock and alerts the random choice

function randomRPSLPAndAlert() {
	const randomNum = Math.ceil(Math.random() * 5);
	console.log(randomNum);
	if (randomNum === 1) {
		alert('scissor');
	} else if (randomNum === 2) {
		alert('rock');
	} else if (randomNum === 3) {
		alert('paper');
	} else if (randomNum === 4) {
		alert('lizard');
	} else {
		alert('spock');
	}
}
randomRPSLPAndAlert();

// Create a function that takes in two numbers. If the second number is divisible by the first, alert the product of those two numbers. If not, alert the sum of those two numbers
function twoNumCompareAndAlert(n1, n2) {
	if (n2 % n1 === 0) {
		alert(n1 * n2);
	} else {
		alert(n1 + n2);
	}
}

twoNumCompareAndAlert(3, 4);
