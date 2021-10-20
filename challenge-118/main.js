// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// big int will prevent you from having numbers show up in exponential notation.
function sumStrings(a, b) {
	let result = BigInt(a) + BigInt(b);
	return result.toString();
}
