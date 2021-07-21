// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

function stringTransformer(str) {
	return str
		.split(' ')
		.reverse()
		.map(el =>
			el
				.split('')
				.map(l => (l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()))
				.join('')
		)
		.join(' ');
}

console.log(reverseCap('Example Input'), 'iNPUT eXAMPLE');
console.log(reverseCap('  Re   D Fta'), 'fTA d   rE  ');

///! more efficient

function transform(str) {
	return str
		.split(' ')
		.reverse()
		.join(' ')
		.split('')
		.map(l => (l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()))
		.join('');
}

console.log(transform('Example Input'), 'iNPUT eXAMPLE');
console.log(transform('  Re   D Fta'), 'fTA d   rE  ');
