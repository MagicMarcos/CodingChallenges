// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function convertString(str) {
	let count = {};
	let strArr = str.toLowerCase().split('');
	strArr.forEach(el => (count[el] ? count[el]++ : (count[el] = 1)));

	return strArr.map(el => (count[el] > 1 ? (el = ')') : (el = '('))).join('');
}

console.log(convertString('din'), '(((');
console.log(convertString('recede'), '()()()');
console.log(convertString('Success'), ')())())');
