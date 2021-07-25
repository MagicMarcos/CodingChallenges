// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//  You can check if a property exists and increment a value tied to that property HINT HINT!

function count(str) {
	let charCounts = {};
	// if you look at charCount is there something with the property that matches el
	// if there is then we increment the value of the property by one
	// if there isnt then we create the property
	str
		.split('')
		.forEach(el => (charCounts[el] ? charCounts[el]++ : (charCounts[el] = 1)));
	return charCounts;
}

console.log(count('aba'), { a: 2, b: 1 });
