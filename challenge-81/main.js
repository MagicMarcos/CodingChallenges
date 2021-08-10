//reverse a string of characters without using the reverse method

function reverseWord(str) {
	let newStr = '';
	for (let char of str) {
		newStr = char + newStr;
	}
	return newStr;
}

console.log(reverseWord(abc));
