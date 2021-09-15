// Write function isPalindrom that checks if a given string (case insensitive) is a palindrom.

function isPalindrome(x) {
	return x.toLowerCase().split('').reverse().join('') === x.toLowerCase();
}

console.log(isPalindrome('Bob'), true);
