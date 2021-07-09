// handle empty string
// take in a single string
function isPalindrome(string) {
	const arr = string.split('');
	if (arr.length > 0) {
		const arr2 = arr.map(el => el.toLowerCase());
		return arr2.join('') === arr2.reverse().join('');
	} else {
		return true;
	}
}

console.log(isPalindrome(''), true);
console.log(isPalindrome('raceCar'), true);
console.log(isPalindrome('nothing'), false);

//more optimized version

function palindromeChecker(str) {
	let lowerCase = string.split('').map(l => l.toLowerCase());
	return lowerCase.join('') === lowerCase.reverse().join('');
}
