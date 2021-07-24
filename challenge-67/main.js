// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function breakCasing(s) {
	return s
		.split('')
		.map(el => (el === el.toUpperCase() ? ` ${el}` : el))
		.join('');
}
console.log(breakCasing('camelCasing'), 'camel Casing');
