// given a string of words or phrases count the number of vowels

function countVowel(str) {
	let count = 0;
	const vowels = 'aeiou';

	for (let char of str.toLowerCase()) {
		if (vowels.includes(char)) {
			count++;
		}
	}
	return count;
}

console.log(countVowels('hello'));
