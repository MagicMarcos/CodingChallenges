// Create a function that takes 2 nonnegative integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

//? so lets start by talking a little about what this function is going to be taking in okay?>
//? so we're taking a number as string and summing it to another number as a string right?>
//? will they ever not be a string?
//? will the number ever be a word?
//? will it ever be decimals?
//? they will always be positive right?

//? great now that we got that out of the way. Can we take a second to talk about what were returing here?
//? will the return be a string?
//? will it be formatted the same as the input?

//? i'd like for us to run some explamples here if thats okay with you?
//? "8","2" -> '10'
//?"4",  "5" --> "9"
//? "34", "5" --> "39"

//? now I want to take a second to set up the function before we proceed

function sumString(a, b) {
	//? If its okay with you, would it be okay if we ran through some pseudo code?
	// convert our strings to numbers
	let strA = Number(a);
	let strB = Number(b);
	//add the numbers and return as string
	return `${strA + strB}`;
}

console.log(sumString('4', '5'), '9');
console.log(sumString('8', '2'), '10');
console.log(sumString('34', '5'), '39');
