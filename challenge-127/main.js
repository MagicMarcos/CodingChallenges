// Given an integer, return an integer that has the reverse ordering of that which was received.
// Keep the following rules in mind:
// The signs must not change i.e -123 becomes -321
// The value returned must be an integer.
// All insignificant zeroes must be removed i.e 900 becomes 9 and not 009

// Reverses a string
function reverseString(text) {
	return [...text].reduce((acc, char) => char + acc, '');
}

// Reverses an integer
function reverseInteger(num) {
	let reversedNumber = parseInt(reverseString(num.toString()));

	return reversedNumber * Math.sign(num);
}
