// Challenge:

// Given a string, return a copy of the string with the vowels' case swapped.

// For this kata, assume that vowels are in the set "aeouiAEOUI".

// Example: Given a string "C is alive!", your function should return "C Is AlIvE!"

// Addendum: Your solution is only required to work for the ASCII character set.

// Please make sure you only swap cases for the vowels.

function swapVowelCase(str) {
	let upperVowels = ['A', 'E', 'I', 'O', 'U'];
	let lowerVowels = ['a', 'e', 'i', 'o', 'u'];
	let newStr = str.split('');
	for (let i = 0; i < newStr.length; i++) {
		for (let j = 0; j < upperVowels.length; j++) {
			if (newStr[i] === upperVowels[j]) {
				newStr[i] = newStr[i].toLowerCase();
			} else if (newStr[i] === lowerVowels[j]) {
				newStr[i] = newStr[i].toUpperCase();
			}
		}
	}

	return newStr.join('');
}
