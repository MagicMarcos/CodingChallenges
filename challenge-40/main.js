//remove exclamation points

function removeExclamationMarks(s) {
	const sArr = Array.from(s);
	let newArr = [];
	sArr.forEach(el => {
		if (el !== '!') {
			newArr.push(el);
		}
	});
	return newArr.join('');
}
