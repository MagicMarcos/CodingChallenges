function fizzbuzz(num) {
	let numArr = [];
	for (let i = 1; i <= num; i++) {
		numArr.push(i);
	}
	return numArr.map(el =>
		el % 3 === 0 && el % 2 === 0
			? (el = 'fizzbuzz')
			: el % 3 === 0
			? (el = 'buzz')
			: el % 2 === 0
			? (el = 'fizz')
			: el
	);
}

console.log(fizzbuzz(10));
