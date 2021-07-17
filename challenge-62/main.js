// create a camelCase method where all words have their first letter capitalized and there are no spaces

function camelCase(str) {
	return str
		.split(' ')
		.map(el => x[0].toUpperCase() + el.slice(1))
		.join('');
}

console.log(camelCase('hello world'), 'HelloWorld');
