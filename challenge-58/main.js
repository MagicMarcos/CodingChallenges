// remove all consecutive duplicate words from a string leavin only the first entry

function removeConsecutive(str) {
	return str
		.split(' ')
		.filter((el, i, arr) => el != arr[i - 1])
		.join(' ');
}

console.log(removeConsecutive('dog dog cat bird desk desk bed red'));
