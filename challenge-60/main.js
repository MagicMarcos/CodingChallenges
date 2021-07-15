//create a function call truncate (str, maxLength) checks length of Str and if it exceed the max length -- replaces the end of str with ellipses ".." to make it length equal to the max length

function truncate(str, maxLength) {
	return str.length > maxLength ? str.slice(0, maxLength - 1) + '...' : str;
}

console.log(truncate('hello world!', 3), 'he...');
