// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

// For example (Input --> Output)

// "Yes" --> "Yes?"
// "No?" --> "No?"

function ensureQuestion(s) {
	let sArr = s.split('');
	sArr.includes('?') === false ? sArr.push('?') : s;

	return sArr.join('');
}

function ensureQuestion(s) {
	return s.split('?').join('').concat('?');
}

const ensureQuestion = s => (s.endsWith('?') ? s : s + '?');
